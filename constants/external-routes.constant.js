// const prefix = "http://localhost:3001";
const prefix = "https://app.examsgalaxy.com";
const externalRoutes = {
  webApp: prefix,
  login: `${prefix}/login`,
  createExam: `${prefix}/exams/create-new-exam`,
  // twitter: "https://www.twitter.com",
  // instagram: "https://www.instagram.com",
  // telegram: "https://www.telegram.com",
  // linkedin: "https://www.linkedin.com",
  contactInfo: {
    email: "support@examsgalaxy.com",
    // instagram: "@example_example",
    telegram: {
      label: "@examsgalaxy_support",
      link: "https://t.me/examsgalaxy_support",
    },
  },
};

export default externalRoutes;
