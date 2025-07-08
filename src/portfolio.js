/* Danijel Golubovic's Portfolio Configuration */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Danijel Golubovic",
  title: "Hi, I'm Danijel",
  subTitle: emoji(
    "Project Management Officer with a strong foundation in data analytics, financial operations, and digital transformation. Currently transitioning into a data analyst role with hands-on experience in Power BI, SQL, and Excel. Passionate about leveraging data to improve decision-making and business performance."
  ),
  resumeLink: "https://drive.google.com/file/d/1OdUaYb_wR8iSt0QjdWUaenNCR2VHY1GK/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/danijel-golubovic-317883113/",
  gmail: "thegolub1989@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "BLENDING PROJECT MANAGEMENT INSIGHT WITH DATA ANALYTICS",
  skills: [
    emoji("📊 Develop dashboards and insights using Power BI"),
    emoji("📁 Organize and support complex project operations"),
    emoji("🧠 Translate business questions into data-driven insights")
  ],
  softwareSkills: [
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Scrum",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Project Management",
      fontAwesomeClassname: "fas fa-tasks"
    }
  ],
  display: true
};

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Project Management & Scrum",
      progressPercentage: "90%"
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Reporting/BI",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "EXAMPLES OF IMPACTFUL WORK",
  projects: [],
  display: false
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Relevant certificates and professional growth milestones",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "I love sharing knowledge through writing.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Eager to share and exchange ideas"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎹"),
  subtitle: "Always open for meaningful discussions.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s connect — open to collaborations, projects or coffee chats!",
  number: "+381642924156",
  email_address: "thegolub1989@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
