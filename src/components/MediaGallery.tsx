import { useState } from "react";
import { Play, Image as ImageIcon } from "lucide-react";

interface MediaItem {
  id: number;
  title: string;
  url: string;
  thumbnail?: string;
  videoUrl?: string;
  description: string;
  type?: 'video' | 'image';
}

interface MediaGalleryProps {
  videos: any[];
  images: any[];
  fallbackImage: string;
}

const MediaGallery = ({ videos, images, fallbackImage }: MediaGalleryProps) => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  return (
    <>
      {/* Videos Section */}
      {videos.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Play className="mr-3 h-6 w-6 text-primary" />
            Success Stories & Program Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedMedia(video.videoUrl || video.url)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || fallbackImage}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary rounded-full p-4">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{video.title}</h4>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Images Section */}
      {images.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <ImageIcon className="mr-3 h-6 w-6 text-primary" />
            Program Gallery
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedMedia(image.url)}
              >
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-1">{image.title}</h4>
                  <p className="text-muted-foreground text-xs">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            {(selectedMedia.includes('.mp4') || selectedMedia.includes('.webm') || selectedMedia.includes('.ogv') || selectedMedia.includes('video')) ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="w-full rounded-lg"
                onError={(e) => {
                  console.log('Video failed to load:', selectedMedia);
                }}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedMedia}
                alt="Gallery item"
                className="w-full rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGallery;
