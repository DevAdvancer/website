#!/bin/bash

# Image Compression Script
# This script compresses images in place using imagemagick and jpegoptim/optipng

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🖼️  Starting image compression...${NC}"

# Check if required tools are installed
check_dependencies() {
    local missing_deps=()

    if ! command -v convert &> /dev/null; then
        missing_deps+=("imagemagick")
    fi

    if ! command -v jpegoptim &> /dev/null; then
        missing_deps+=("jpegoptim")
    fi

    if ! command -v optipng &> /dev/null; then
        missing_deps+=("optipng")
    fi

    if [ ${#missing_deps[@]} -ne 0 ]; then
        echo -e "${RED}❌ Missing dependencies: ${missing_deps[*]}${NC}"
        echo -e "${YELLOW}Install with: brew install imagemagick jpegoptim optipng${NC}"
        exit 1
    fi
}

# Function to get file size in bytes
get_file_size() {
    stat -f%z "$1" 2>/dev/null || stat -c%s "$1" 2>/dev/null
}

# Function to compress JPEG/JPG files
compress_jpeg() {
    local file="$1"
    local original_size=$(get_file_size "$file")

    echo -e "${YELLOW}Compressing JPEG: $file${NC}"

    # Create backup
    cp "$file" "$file.backup"

    # Compress with imagemagick (reduce quality to 85% and strip metadata)
    convert "$file" -quality 85 -strip "$file.tmp"

    # Further optimize with jpegoptim
    jpegoptim --max=85 --strip-all --overwrite "$file.tmp"

    # Replace original if compression was successful and smaller
    local new_size=$(get_file_size "$file.tmp")

    if [ $new_size -lt $original_size ]; then
        mv "$file.tmp" "$file"
        rm "$file.backup"
        local saved=$((original_size - new_size))
        local percent=$((saved * 100 / original_size))
        echo -e "${GREEN}✅ Compressed: $(basename "$file") - Saved ${saved} bytes (${percent}%)${NC}"
    else
        mv "$file.backup" "$file"
        rm "$file.tmp"
        echo -e "${YELLOW}⚠️  No compression benefit for: $(basename "$file")${NC}"
    fi
}

# Function to compress PNG files
compress_png() {
    local file="$1"
    local original_size=$(get_file_size "$file")

    echo -e "${YELLOW}Compressing PNG: $file${NC}"

    # Create backup
    cp "$file" "$file.backup"

    # Compress with imagemagick (strip metadata)
    convert "$file" -strip "$file.tmp"

    # Further optimize with optipng
    optipng -o7 -strip all "$file.tmp"

    # Replace original if compression was successful and smaller
    local new_size=$(get_file_size "$file.tmp")

    if [ $new_size -lt $original_size ]; then
        mv "$file.tmp" "$file"
        rm "$file.backup"
        local saved=$((original_size - new_size))
        local percent=$((saved * 100 / original_size))
        echo -e "${GREEN}✅ Compressed: $(basename "$file") - Saved ${saved} bytes (${percent}%)${NC}"
    else
        mv "$file.backup" "$file"
        rm "$file.tmp"
        echo -e "${YELLOW}⚠️  No compression benefit for: $(basename "$file")${NC}"
    fi
}

# Main compression function
compress_images() {
    local total_original=0
    local total_compressed=0
    local file_count=0

    # Find and compress all image files
    while IFS= read -r -d '' file; do
        if [[ -f "$file" ]]; then
            local original_size=$(get_file_size "$file")
            total_original=$((total_original + original_size))

            # Get lowercase extension for case-insensitive matching
            extension=$(echo "${file##*.}" | tr '[:upper:]' '[:lower:]')
            case "$extension" in
                jpg|jpeg)
                    compress_jpeg "$file"
                    ;;
                png)
                    compress_png "$file"
                    ;;
            esac

            local new_size=$(get_file_size "$file")
            total_compressed=$((total_compressed + new_size))
            file_count=$((file_count + 1))
        fi
    done < <(find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

    # Summary
    if [ $file_count -gt 0 ]; then
        local total_saved=$((total_original - total_compressed))
        local total_percent=$((total_saved * 100 / total_original))
        echo -e "${GREEN}🎉 Compression complete!${NC}"
        echo -e "${GREEN}Files processed: $file_count${NC}"
        echo -e "${GREEN}Total saved: $total_saved bytes (${total_percent}%)${NC}"
    else
        echo -e "${YELLOW}No image files found to compress${NC}"
    fi
}

# Run the script
check_dependencies
compress_images

echo -e "${GREEN}✨ Image compression finished!${NC}"
