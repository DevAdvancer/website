// Import education images (Vite handles these well)
import image1 from "@/assets/education/images/1.jpeg";
import image2 from "@/assets/education/images/2.jpeg";
import image3 from "@/assets/education/images/3.jpeg";
import image4 from "@/assets/education/images/4.jpeg";
import image5 from "@/assets/education/images/5.jpeg";
import image6 from "@/assets/education/images/6.jpeg";

// Import video thumbnails (images work fine)
import video1Thumbnail from "@/assets/education/videos/1st.png";
import video2Thumbnail from "@/assets/education/videos/2nd.jpeg";

// Video URLs - using public folder for better Vite compatibility
const video1Url = "/assets/education/videos/1st.mp4";
const video2Url = "/assets/education/videos/2nd.mp4";

export const educationMediaConfig = {
  videos: [
    {
      id: 1,
      title: "Analyzing Students with personal PI's and tests",
      thumbnail: video1Thumbnail,
      videoUrl: video1Url,
      description:
        "Learn how our comprehensive approach to analyzing students through personalized assessments and testing methodologies enhances learning outcomes and academic success.",
    },
    {
      id: 2,
      title: "University Partnership Program",
      thumbnail: video2Thumbnail,
      videoUrl: video2Url,
      description:
        "Our successful collaboration with leading universities to enhance curriculum and student outcomes.",
    },
  ],

  images: [
    {
      id: 1,
      title: "Interactive Training Session",
      url: image1,
      description:
        "Students engaged in hands-on learning with modern technology and expert guidance.",
    },
    {
      id: 2,
      title: "Student Development Classes",
      url: image2,
      description:
        "Comprehensive student development programs focusing on personal growth, professional skills, and career readiness through structured learning modules.",
    },
    {
      id: 3,
      title: "Hands-on Practices",
      url: image3,
      description:
        "Interactive practical sessions where students apply theoretical knowledge through real-world exercises and skill-building activities.",
    },
    {
      id: 4,
      title: "Industry Expert Session",
      url: image4,
      description:
        "Guest lecture by industry professionals sharing real-world insights.",
    },
    {
      id: 5,
      title: "Exam Time",
      url: image5,
      description:
        "Students demonstrating their knowledge and skills through comprehensive assessments and evaluation processes.",
    },
    {
      id: 6,
      title: "Hands-on Lab Session",
      url: image6,
      description:
        "Practical learning experience in our state-of-the-art laboratory facilities.",
    },
  ],

  // Success metrics and testimonials
  successStories: [
    {
      metric: "95%",
      description: "Job placement rate within 6 months",
    },
    {
      metric: "500+",
      description: "Students successfully trained",
    },
    {
      metric: "4+",
      description: "University partnerships established",
    },
    {
      metric: "40%",
      description: "Average salary increase post-training",
    },
  ],
};

// Helper function to get media by type
export const getMediaByType = (type: "videos" | "images") => {
  return educationMediaConfig[type];
};

// Helper function to add new media (for future use)
export const addMedia = (
  type: "videos" | "images",
  mediaItem: Omit<
    | (typeof educationMediaConfig.videos)[0]
    | (typeof educationMediaConfig.images)[0],
    "id"
  >
) => {
  const newId =
    Math.max(...educationMediaConfig[type].map((item: any) => item.id)) + 1;
  (educationMediaConfig[type] as any[]).push({ ...mediaItem, id: newId });
};
