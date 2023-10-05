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
  username: "Shafi UL Islam",
  title: "Hi all, I'm Shafi UL Islam",
  subTitle: emoji(
    "A passionate Android Application Developer 🚀 having an experience of building Mobile applications with Java / Kotlin / Android / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LG2h1VHCMvjhe_8PHtbJMZBTarFYhXVa/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jonyszone",
  linkedin: "https://bd.linkedin.com/in/jonyszone/",
  gmail: "jonyszone@gmail.com",
 // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/itsmeshafiul",
  twitter: "https://twitter.com/JONYSZONE",
  medium: "https://medium.com/@jonyszone",
 // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"
    ),
    emoji("⚡ Native Android Applications Development with Java, Kotlin"),
    emoji(
      "⚡ Integration of third party dependencies such as Firebase/ Retrofit / OKHttp etc."
    ),
    emoji(
      "⚡ Develop highly interactive Cross Platform Interfaces with flutter"
    ),
    emoji(
      "⚡ Super fast blazing working procedure that you'll love"
    )
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Retrofit",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Volley",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "MVVM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "RxJava",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Provider",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Push Notification",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northern University Bangladesh",
      logo: require("./assets/images/northern.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2016 - April 2021",
      desc: "Took courses about Software Engineering, Discreate Mathematics, Operating Systems, etc.....",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Palashbari Govt. College",
      logo: require("./assets/images/palashbari.png"),
      subHeader: "Intermediate of Science",
      duration: "September 2011 - April 2014",
      desc: "Ranked top 10% in the program. Took courses about science subjects ...",
      descBullets: [
        "Activities and societies: Playing sports in an organized competitive association.",
        "Doing sports for fun (football, cricket, long-distance running, badminton).",
        "Participating in outdoor activities (football, cricket, badminton) and physical fitness training (swimming) Taking lessons (swimming)."
    
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android App Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "IOS App Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "71%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "71%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android App Developer",
      company: "SEO Expate Bangladesh ltd.",
      companylogo: require("./assets/images/seoexpate.png"),
      date: "July 2022 – Present",
      desc: "Experienced Android Developer with 1+ years of dedicated work in crafting management-focused mobile applications. 📱 Passionate about delivering efficient, user-friendly solutions to streamline business processes. 💼 Skilled in Java/Kotlin, UI/UX design, and collaborating with cross-functional teams to turn ideas into impactful apps. Let's connect to discuss how I can contribute to your next project!",
      descBullets: [
        " #AndroidDeveloper - ",
        " #MobileAppDevelopment - ",
        " #EfficiencyEnthusiast - "
      ]
    },
   /* {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },   */
    {
      role: "Android Developer Intern",
      company: "BITM",
      companylogo: require("./assets/images/logo_bitm.png"),
      date: "May 2019 – July. 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/seo_school.png"),
      projectName: "SEO School Management Mobile App",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit App in Playsotore",
          url: "https://play.google.com/store/apps/details?id=com.schoolmanagement.android"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "SAU Directory Flutter App",
      projectDesc: "SAU Directory Flutter App is my first flutter app. I've worked in this project with flutter because of client's need. And For this project i've expolore my new skill in developing flutter apps.",
      footerLink: [
        {
          name: "Visit App in Playstore",
          url: "#"
        }
      ]
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
      title: "Certified C++ And Java Developer",
      subtitle:
        "I've completed a course to learn programming fundamentals",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Certified Android App Developer",
      subtitle:
        "Developed tourism and daily expense when i was working in BITM",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Mobile Application Developer",
      subtitle: "Awarded Certifcation from App Development Team of SEO Expate Bangladesh.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
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
  subtitle: "I LOVE TO TALK ABOUT MY BELIEF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    //"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+88-01773405828",
  email_address: "jonyszone@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jonyszone", //Replace "twitter" with your twitter username without @
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
