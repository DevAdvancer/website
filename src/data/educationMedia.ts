export const educationMediaConfig = {
  videos: [
    {
      id: 1,
      title: "Analyzing Students with personal PI's and tests",
      thumbnail: "src/assets/education/videos/1st.png",
      videoUrl: "src/assets/education/videos/1st.mp4",
      description:
        "Learn how our comprehensive approach to analyzing students through personalized assessments and testing methodologies enhances learning outcomes and academic success.",
    },
    {
      id: 2,
      title: "University Partnership Program",
      thumbnail: "src/assets/education/videos/2nd.jpeg",
      videoUrl: "src/assets/education/videos/2nd.mp4",
      description:
        "Our successful collaboration with leading universities to enhance curriculum and student outcomes.",
    },
  ],

  images: [
    {
      id: 1,
      title: "Interactive Training Session",
      url: "src/assets/education/images/1.jpeg",
      description:
        "Students engaged in hands-on learning with modern technology and expert guidance.",
    },
    {
      id: 2,
      title: "Student Development Classes",
      url: "src/assets/education/images/2.jpeg",
      description:
        "Comprehensive student development programs focusing on personal growth, professional skills, and career readiness through structured learning modules.",
    },
    {
      id: 3,
      title: "Hands-on Practices",
      url: "src/assets/education/images/3.jpeg",
      description:
        "Interactive practical sessions where students apply theoretical knowledge through real-world exercises and skill-building activities.",
    },
    {
      id: 4,
      title: "Industry Expert Session",
      url: "src/assets/education/images/4.jpeg",
      description:
        "Guest lecture by industry professionals sharing real-world insights.",
    },
    {
      id: 5,
      title: "Exam Time",
      url: "src/assets/education/images/5.jpeg",
      description:
        "Students demonstrating their knowledge and skills through comprehensive assessments and evaluation processes."
    },
    {
      id: 6,
      title: "Hands-on Lab Session",
      url: "src/assets/education/images/6.jpeg",
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
      metric: "50+",
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
