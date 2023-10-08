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
    "A passionate Full Stack .NET Developer 🚀 having an experience of building Web application  with DotNet / JavaScript / WebAPI / MicroServices and some other cool libraries and frameworks."
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
      "⚡Develop robust web applications using ASP.NET MVC and ASP.NET Core."
    ),
    emoji("⚡Design relational databases using Microsoft SQL Server with Entity Framework Core for ORM."),
    emoji(
      "⚡Implement secure user authentication and authorization using ASP.NET Identity."
    ),
    emoji(
      "⚡Deploy and manage applications on Microsoft Azure, leveraging services like Azure App Services, Azure SQL Database, and Azure Blob Storage."
    ),
    emoji(
      "⚡Employ SOLID principles and various design patterns ensuring maintainable and scalable codebase.."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      // fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      // fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "DotNet-Core",
      // fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      // fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ASP.NET",
      // fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "WebApiI",
      // fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "WPF",
      // fontAwesomeClassname: "fa-brands fa-wpforms"
    },
    {
      skillName: "WebServices",
      // fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-Database",
      // fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Microservices",
      // fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Raspberry-pi",
      // fontAwesomeClassname: "fa-brands fa-raspberry-pi"
    },
    {
      skillName: "python",
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "IIS",
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linq Queries",
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Entity Framework",
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ADO.Net",
      // fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Azure",
      // fontAwesomeClassname: "fab fa-docker"
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
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Fidrox Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/fidrox.png"),
      date: "April 2021 – Present",
      desc: "Innovative technologies and systems integration solutions in mobility, security and enterprise collaboration and productivity.",
      descBullets: [
        "Visitor Management - FVmx-500",
        "Identity and Access Management- The process of Employee Authentication forms a very critical part of the security infrastructure.",
        "Canteen Management - Manage contractors from multiple caterer, vendors  in a secure way"
      ]
    }//,
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  subtitle: "Project which I worked on in  Start-up Company ",
  projects: [
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
      projectDesc: "Canteen management system enables quick cashless transactions and enforces well-structured operational management",
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
  number: "+91 9036577294",
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
