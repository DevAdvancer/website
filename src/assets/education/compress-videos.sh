#!/bin/bash

# Video Compression Script
# This script compresses videos in place using ffmpeg

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🎬 Starting video compression...${NC}"

# Check if ffmpeg is installed
check_dependencies() {
    if ! command -v ffmpeg &> /dev/null; then
        echo -e "${RED}❌ ffmpeg is not installed${NC}"
        echo -e "${YELLOW}Install with: brew install ffmpeg${NC}"
        exit 1
    fi
}

# Function to get file size in bytes
get_file_size() {
    stat -f%z "$1" 2>/dev/null || stat -c%s "$1" 2>/dev/null
}

# Function to get video duration
get_video_duration() {
    ffprobe -v quiet -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$1" 2>/dev/null | cut -d. -f1
}

# Function to compress video files
compress_video() {
    local file="$1"
    local original_size=$(get_file_size "$file")
    local duration=$(get_video_duration "$file")

    echo -e "${YELLOW}Compressing video: $file${NC}"
    echo -e "${YELLOW}Duration: ${duration}s, Size: ${original_size} bytes${NC}"

    # Create backup
    cp "$file" "$file.backup"

    # Get file extension
    local extension="${file##*.}"
    local temp_file="$file.compressed.${extension,,}"

    # Compression settings based on file size and duration
    local crf=23  # Default quality (lower = better quality, higher file size)
    local preset="medium"  # Encoding speed vs compression efficiency

    # Adjust settings for larger files
    if [ $original_size -gt 50000000 ]; then  # > 50MB
        crf=28
        preset="slow"
    elif [ $original_size -gt 10000000 ]; then  # > 10MB
        crf=25
        preset="medium"
    fi

    echo -e "${YELLOW}Using CRF: $crf, Preset: $preset${NC}"

    # Compress video with ffmpeg
    if ffmpeg -i "$file" \
        -c:v libx264 \
        -crf $crf \
        -preset $preset \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y "$temp_file" 2>/dev/null; then

        local new_size=$(get_file_size "$temp_file")

        # Only replace if compression achieved significant reduction (at least 5%)
        local min_reduction=$((original_size * 5 / 100))
        local actual_reduction=$((original_size - new_size))

        if [ $actual_reduction -gt $min_reduction ]; then
            mv "$temp_file" "$file"
            rm "$file.backup"
            local percent=$((actual_reduction * 100 / original_size))
            echo -e "${GREEN}✅ Compressed: $(basename "$file") - Saved ${actual_reduction} bytes (${percent}%)${NC}"
        else
            mv "$file.backup" "$file"
            rm "$temp_file"
            echo -e "${YELLOW}⚠️  Minimal compression benefit for: $(basename "$file")${NC}"
        fi
    else
        # Restore backup if compression failed
        mv "$file.backup" "$file"
        [ -f "$temp_file" ] && rm "$temp_file"
        echo -e "${RED}❌ Failed to compress: $(basename "$file")${NC}"
    fi
}

# Function to compress video with web optimization
compress_video_web() {
    local file="$1"
    local original_size=$(get_file_size "$file")

    echo -e "${YELLOW}Web-optimizing video: $file${NC}"

    # Create backup
    cp "$file" "$file.backup"

    local temp_file="$file.web.mp4"

    # Web-optimized compression
    if ffmpeg -i "$file" \
        -c:v libx264 \
        -crf 26 \
        -preset slow \
        -profile:v baseline \
        -level 3.0 \
        -pix_fmt yuv420p \
        -c:a aac \
        -b:a 96k \
        -ac 2 \
        -movflags +faststart \
        -f mp4 \
        -y "$temp_file" 2>/dev/null; then

        local new_size=$(get_file_size "$temp_file")

        if [ $new_size -lt $original_size ]; then
            mv "$temp_file" "$file"
            rm "$file.backup"
            local saved=$((original_size - new_size))
            local percent=$((saved * 100 / original_size))
            echo -e "${GREEN}✅ Web-optimized: $(basename "$file") - Saved ${saved} bytes (${percent}%)${NC}"
        else
            mv "$file.backup" "$file"
            rm "$temp_file"
            echo -e "${YELLOW}⚠️  No compression benefit for: $(basename "$file")${NC}"
        fi
    else
        mv "$file.backup" "$file"
        [ -f "$temp_file" ] && rm "$temp_file"
        echo -e "${RED}❌ Failed to compress: $(basename "$file")${NC}"
    fi
}

# Main compression function
compress_videos() {
    local total_original=0
    local total_compressed=0
    local file_count=0
    local web_optimize=${1:-false}

    # Find and compress all video files
    while IFS= read -r -d '' file; do
        if [[ -f "$file" ]]; then
            local original_size=$(get_file_size "$file")
            total_original=$((total_original + original_size))

            if [ "$web_optimize" = "true" ]; then
                compress_video_web "$file"
            else
                compress_video "$file"
            fi

            local new_size=$(get_file_size "$file")
            total_compressed=$((total_compressed + new_size))
            file_count=$((file_count + 1))
        fi
    done < <(find . -type f \( -iname "*.mp4" -o -iname "*.mov" -o -iname "*.avi" -o -iname "*.mkv" \) -print0)

    # Summary
    if [ $file_count -gt 0 ]; then
        local total_saved=$((total_original - total_compressed))
        local total_percent=$((total_saved * 100 / total_original))
        echo -e "${GREEN}🎉 Video compression complete!${NC}"
        echo -e "${GREEN}Files processed: $file_count${NC}"
        echo -e "${GREEN}Total saved: $total_saved bytes (${total_percent}%)${NC}"
    else
        echo -e "${YELLOW}No video files found to compress${NC}"
    fi
}

# Parse command line arguments
WEB_OPTIMIZE=false
while [[ $# -gt 0 ]]; do
    case $1 in
        --web)
            WEB_OPTIMIZE=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [--web]"
            echo "  --web    Optimize videos for web (smaller file size, web-compatible format)"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Run the script
check_dependencies
compress_videos $WEB_OPTIMIZE

echo -e "${GREEN}✨ Video compression finished!${NC}"
