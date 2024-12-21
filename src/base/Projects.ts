export const projects = [
  //In Progress Projects
  //Load Board
  {
    id: 1,
    identifier: "project-loads",
    title: "Project Loads", // A load board platform for truckers, brokers, and companies to manage loads and deliveries.
    // Turckers can register, login, bid/accept loads, view their loads, and view their history.
    // Brokers can register, login, post loads, view their loads, and view their history.
    // Companies can register, login, post loads, view their loads, and view their history.
    // Admin dashboard for managing users, loads, and deliveries.
    status: "in-progress",
    description: "A load board platform for GULF region.",
    technologies: ["React", "Next.js", "TailwindCSS", "Supabase"],
    highlights: [
      "A load board platform for truckers, brokers, and companies to manage loads and deliveries.",
      "Role specific dashboards for truckers, brokers, and companies to manage their loads and deliveries",
      "Supabase integration for secure and scalable backend",
      "Stripe integration for payment processing and subscription management",
      "Messaging system for truckers, brokers, and companies to communicate with each other",
      "Admin dashboard for managing loads and deliveries",
      "PLANNED: AI integration for generating loads, routes, and deliveries.",
    ],
    github: "https://github.com/EtoYaMak/fleetdock-webapp-nextjs",
    link: "https://fleetdock.vercel.app/",
  },
  //MedaPal
  {
    id: 2,
    identifier: "project-medpal",
    title: "MedaPal",
    status: "in-progress",
    description:
      "Led the development of Skillmint, a platform for graduates and professionals to find jobs and internships.",
    technologies: ["React Native", "Expo ", "TailwindCSS", "Supabase", "AI"],
    highlights: [
      //Medpal is a peronsal medication tracking app that uses AI to help you track your medication and provide reminders and alerts
      "AI integration to help you track your medication and provide reminders and alerts",
      "Supabase Realtime integration to store your medication data and provide notifications, alerts. Secure and scalable backend",
      "Expo Camera for scanning medication packages",
      "Expo Share for sharing your medication data, status and alerts with your doctor or family",
    ],
    github: "https://github.com/EtoYaMak/MedaPal",
  },
  //Online Projects
  //Progression
  {
    id: 3,
    identifier: "project-progression",
    title: "Progression", // A fun little app that currently has a life time stats for the user and a progress bar for the user to track their progress
    status: "live",
    description:
      "A fun little app that currently has a life time stats for the user and a progress bar for the user to track their progress",
    technologies: ["React Native", "Expo ", "TailwindCSS", "Supabase", "AI"],
    highlights: [
      "Uses stats from World Health Organization to track your life expectancy and progress",
      "Location and Gender specific data",
    ],
    github: "https://github.com/EtoYaMak/humanstats-progression-app",
    link: "https://humanstats-app.vercel.app/",
  },
  //Nexgen
  {
    id: 4,
    identifier: "project-nexgen",
    title: "Nexgen Cyber Solutions",
    status: "live",
    description:
      "Built a website for a tech agency to help them establish their online presence and showcase their services.",
    technologies: ["React", "Next.js", "TailwindCSS"],
    highlights: [
      "Designed and developed a responsive and user-friendly website for a tech agency, showcasing their services and expertise.",
      "Implemented a modern and visually appealing design using TailwindCSS",
    ],
    github: "https://github.com/EtoYaMak/nexgen-website",
    link: "https://nexgen-cyber-solutions.vercel.app/",
  },
  //Top Spots Dubai
  {
    id: 5,
    identifier: "project-topspots",
    title: "Top Spots Dubai",
    status: "live",
    description:
      "Built the popular website Top Spots Dubai as requested by Top Spots Dubai Project Manager.",
    technologies: ["JavaScript", "React", "DaisyUI", "TailwindCSS"],
    highlights: [
      "A lot faster than the original website which was built with Angular",
      "Responsive and user-friendly website design",
      "Implemented a modern and visually appealing design using TailwindCSS",
    ],
    github: "https://github.com/EtoYaMak/TopSpotsDubai_React",
    link: "https://topspotsdubai-clone.vercel.app/",
    original: "https://topspotsdubai.com/",
  },
  //Disseration Artefact
  {
    id: 6,
    identifier: "project-cyberaware",
    title: "CyberAware",
    status: "live",
    description:
      "A culmination of my research on SMEs and Cyber Security struggles in a informative and engaging way for the general public.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Engaging and informative content for the general public on the importance of Cyber Security",
      "Video to showcase common cyber security threats faced by SMEs",
      "A quiz to test your knowledge based off of most common cyber security threats faced by SMEs",
      "Visualizations and interactive elements to enhance the user experience",
    ],
    github: "https://github.com/EtoYaMak/CyberAware",
    link: "https://cyberaware-nine.vercel.app/",
  },
  //Offline Projects
  //Skillmint
  {
    id: 7,
    identifier: "project-skillmint",
    title: "Skillmint",
    status: "offline",
    description:
      "Led the development of Skillmint, a platform for graduates and professionals to find jobs and internships.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "AWS",
      "TailwindCSS",
    ],
    highlights: [
      "Led the development of Skillmint, a platform for graduates and professionals to find jobs and internships.",
      "Role specific dashboard for users and companies to manage their profiles and jobs",
      "Application tracking system for both users and companies to track the progress of their applicants",
      "Stripe integration for payment processing and subscription management",
      "A perosnalized profile page for users to showcase their skills and experiences",
      "Admin dashboard for managing users and jobs",
      "Deployed on AWS on a EC2 instance with fully secure and scalable architecture",
    ],
    github: "https://github.com/EtoYaMak/Skillmint.io",
  },
];
