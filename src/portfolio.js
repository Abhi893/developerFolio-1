/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhishek",
  title: "Hi all, I'm Abhishek",
  subTitle: emoji(
    "A passionate  Software Developer 🚀 with expertise in building modern web applications using .NET, JavaScript, WebAPI, and Microservices. I thrive on exploring new technologies, frameworks, and tools to craft efficient and scalable solutions.."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1GgOEYCyc7-248HZkU3rxhgpwGnzk9lTIGgU-o1FMioY/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Abhi893",
  linkedin: "https://www.linkedin.com/in/abhishek-software-developer/",
  gmail: "abhi.markundi@gmail.com",
  gitlab: "",
  instagram:"https://www.instagram.com/ilone_wolf366/",
  facebook: "",
  medium: "https://medium.com/@abhi.markundi",
  stackoverflow: "",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
 title: "What I do",
subTitle: "CRAZY DOT NET FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
skills: [
    emoji(
      "⚡Develop scalable and robust web applications using ASP.NET MVC, ASP.NET Core, and Entity Framework for seamless data access."
    ),
    emoji(
      "⚡Design and manage efficient relational databases using Microsoft SQL Server, leveraging advanced features of Entity Framework Core for ORM."
    ),
    emoji(
      "⚡Implement secure and modern web APIs using RestAPI principles with ASP.NET Core, enabling seamless integration and data exchange."
    ),
    emoji(
      "⚡Leverage Microservices architecture with tools like Docker and Kubernetes, ensuring distributed and scalable solutions."
    ),
    emoji(
      "⚡Deploy and monitor cloud-native applications on platforms such as AWS, Microsoft Azure, and OpenShift, utilizing services like Azure App Services and AWS Lambda."
    ),
    emoji(
      "⚡Build responsive front-end applications using React, seamlessly integrating with robust back-end APIs."
    ),
    emoji(
      "⚡Ensure maintainability and scalability by employing SOLID principles and proven design patterns in code architecture."
    ),
    emoji(
      "⚡Optimize server performance and manage deployments with tools like IIS, while ensuring application reliability and uptime."
    ),
    emoji(
      "⚡Integrate C# for writing clean and efficient business logic, enhancing application functionality."
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
  },
  {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-microsoft"
  },
  {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
  },
  {
      skillName: "Entity Framework",
      fontAwesomeClassname: "fas fa-project-diagram" // Represents database relationships
  },
  {
      skillName: "SQL (SSMS)",
      fontAwesomeClassname: "fas fa-database"
  },
  {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
  },
  {
      skillName: "IIS",
      fontAwesomeClassname: "fas fa-server"
  },
  {
      skillName: "RestAPI",
      fontAwesomeClassname: "fas fa-exchange-alt" // Represents API communication
  },
  {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
  },
  {
      skillName: "LINQ Queries",
      fontAwesomeClassname: "fas fa-filter" // Represents data filtering and querying
  },
  {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-cubes"
  },
  {
      skillName: "ASP.NET",
      fontAwesomeClassname: "fas fa-laptop-code"
  },
  {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
  },
  {
      skillName: "Cloud 2",
      fontAwesomeClassname: "fas fa-cloud"
  },
  {
      skillName: "OpenShift",
      fontAwesomeClassname: "fab fa-redhat"
  },{
    skillName: "CI/CD Pipeline",
    fontAwesomeClassname: "fas fa-tools" // Represents development and deployment tools
},{
  skillName: "SDLC",
  fontAwesomeClassname: "fas fa-sync-alt" // Represents process workflows
}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Visvesvaraya Technological University (VTU)",
      logo: require("./assets/images/Bldea"),
      subHeader: "Bachelor of Engineering  in Computer Science",
      duration: "June 2016 - Nov 2020",
      desc: "Final year project: Diagnosis of Alzheimer Disease using EEG Signals",
      descBullets: [
        "Mini project :Apartment visiting management system",
        "Mini Project: Gym Management system"
      ]
    },
    {
      schoolName: "Gurukul Independent PU College",
      logo: require("./assets/images/Gurukul.png"),
      subHeader: "Science",
      duration: "April 2014 - April 2016",
      desc: "Physics, Chemistry, Mathematics, Electronics"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deployment: Cloud2, AWS, Azure, OpenShift",
      progressPercentage: "80%"
  },
  {
      Stack: "Backend: WebAPI, SQL, Entity Framework",
      progressPercentage: "75%"
  },
  {
      Stack: "Programming: C#, LINQ, Python",
      progressPercentage: "80%"
  },
  {
      Stack: "Frontend: React, JavaScript,.NET",
      progressPercentage: "70%"
  },
  {
      Stack: "Architecture: Microservices, Docker",
      progressPercentage: "75%"
  }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technology Analyst",
      company: "Infosys Limited",
      companylogo: require("./assets/images/Infosys_logo.svg.png"),
      date: "Jun 2024 –  Present",
      desc: "Infosys Limited is an Indian multinational technology company that offers business consulting, information technology, and outsourcing services.",
      descBullets: [
        "DanskeBank : Regulatory Tracking System",
      ]
     },
    {
      role: "Software Engineer",
      company: "Fidrox Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/fidrox.png"),
      date: "April 2021 – May 2024",
      desc: "Innovative technologies and systems integration solutions in mobility, security and enterprise collaboration and productivity.",
      descBullets: [
        "Visitor Management - FVmx-500",
        "Identity and Access Management- The process of Employee Authentication forms a very critical part of the security infrastructure.",
        "Canteen Management - Manage contractors from multiple caterer, vendors  in a secure way"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  // subtitle: "Project which I worked on in  Start-up Company ",
  projects: [
    {
      image: require("./assets/images/Regulatory-removebg-preview.png"),
      projectName: "Regulatory Tracking System",
      projectDesc: "The Regulatory Tracking System is an advanced web tool designed to streamline the monitoring of regulatory developments. Tailored to support the Regulatory Model, this platform enables organizations to efficiently track both current and upcoming regulatory initiatives from Nordic legislators and European authorities. By providing real-time updates and detailed insights, it ensures stakeholders stay informed and compliant with evolving legislative requirements across the region.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },

    {
      image: require("./assets/images/vs.png"),
      projectName: "Visitor Management System",
      projectDesc: "Capture visitor photos and information when they arrive at your doorstep. You can customize the documents you want to be signed by your guests according to their purpose of visit.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/csm.png"),
      projectName: "Canteen management system",
      projectDesc: "Canteen management system enables quick cashless transactions and enforces well-structured operational management with integration of Raspberry PI 4 & Honeywell HardWare",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Coursera",
      subtitle:
        "Type Script",
      image: require("./assets/images/coursera.png"),
      imageAlt: "coursera.",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/EEH99N5YH5PL"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "MicroSoft",
      subtitle:
        "Microsoft program on undergraduate virtual intership platform.",
      image: require("./assets/images/microsoft.png"),
      imageAlt: "Anz",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.theforage.com/badges/eo8EFkKgdzGKqutqJ/LuLQcZ8jcgy3dq7NS/Engineering%3A%20Undergraduate%20%26%20Masters%20Virtual%20Internship%20Platform/Abhishek"
        }
      ]
    },

    {
      title: "NPTL",
      subtitle: "Completed Certifcation from NPTL for IOT",
      image: require("./assets/images/Nptl.png"),
      imageAlt: "n Logo",
      footerLink: [
        {name: "Certification", url: "https://nptel.ac.in/noc/"}
        // {
        //   name: "Iot",
        //   url: "https://nptel.ac.in/noc/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 ",
  email_address: "abhi.markundi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
