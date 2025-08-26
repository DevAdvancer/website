#!/bin/bash

# Combined Media Compression Script
# This script compresses both images and videos in the project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting complete media compression...${NC}"

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Parse command line arguments
WEB_OPTIMIZE=false
IMAGES_ONLY=false
VIDEOS_ONLY=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --web)
            WEB_OPTIMIZE=true
            shift
            ;;
        --images-only)
            IMAGES_ONLY=true
            shift
            ;;
        --videos-only)
            VIDEOS_ONLY=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo "Options:"
            echo "  --web           Optimize videos for web"
            echo "  --images-only   Compress only images"
            echo "  --videos-only   Compress only videos"
            echo "  -h, --help      Show this help message"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Function to show file sizes before compression
show_initial_stats() {
    echo -e "${BLUE}📊 Initial media file statistics:${NC}"

    local image_count=$(find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l | tr -d ' ')
    local video_count=$(find . -type f \( -iname "*.mp4" -o -iname "*.mov" -o -iname "*.avi" -o -iname "*.mkv" \) | wc -l | tr -d ' ')

    if [ $image_count -gt 0 ]; then
        local image_size=$(find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec stat -f%z {} \; 2>/dev/null | awk '{sum+=$1} END {print sum+0}')
        echo -e "${YELLOW}Images: $image_count files, $image_size bytes${NC}"
    fi

    if [ $video_count -gt 0 ]; then
        local video_size=$(find . -type f \( -iname "*.mp4" -o -iname "*.mov" -o -iname "*.avi" -o -iname "*.mkv" \) -exec stat -f%z {} \; 2>/dev/null | awk '{sum+=$1} END {print sum+0}')
        echo -e "${YELLOW}Videos: $video_count files, $video_size bytes${NC}"
    fi

    echo ""
}

# Run compression scripts
run_compression() {
    show_initial_stats

    if [ "$VIDEOS_ONLY" = false ]; then
        echo -e "${BLUE}🖼️  Running image compression...${NC}"
        if [ -f "$SCRIPT_DIR/compress-images.sh" ]; then
            bash "$SCRIPT_DIR/compress-images.sh"
        else
            echo -e "${RED}❌ compress-images.sh not found${NC}"
            exit 1
        fi
        echo ""
    fi

    if [ "$IMAGES_ONLY" = false ]; then
        echo -e "${BLUE}🎬 Running video compression...${NC}"
        if [ -f "$SCRIPT_DIR/compress-videos.sh" ]; then
            if [ "$WEB_OPTIMIZE" = true ]; then
                bash "$SCRIPT_DIR/compress-videos.sh" --web
            else
                bash "$SCRIPT_DIR/compress-videos.sh"
            fi
        else
            echo -e "${RED}❌ compress-videos.sh not found${NC}"
            exit 1
        fi
        echo ""
    fi
}

# Main execution
run_compression

echo -e "${GREEN}🎉 All media compression completed!${NC}"
echo -e "${BLUE}💡 Tip: Run 'git status' to see which files were modified${NC}"
