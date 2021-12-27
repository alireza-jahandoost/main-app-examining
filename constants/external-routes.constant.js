const prefix = "http://localhost:3001";
const externalRoutes = {
  webApp: prefix,
  login: `${prefix}/login`,
  createExam: `${prefix}/exams/create-new-exam`,
  twitter: "https://www.twitter.com",
  instagram: "https://www.instagram.com",
  telegram: "https://www.telegram.com",
  linkedin: "https://www.linkedin.com",
  contactInfo: {
    email: "example@example.com",
    instagram: "@example_example",
    telegram: "@example_example",
  },
};

export default externalRoutes;
