export const BackgroundDetails: BackgroundProps = {
  Experience: [
    {
      Company: "Ally Bank",
      Duration: "August 2023 - Present",
      Role: "Software Developer",
      responsibilities: [
        // "Developed web pages using React.js, ensuring seamless integration with backend APIs",
        // "Wrote Unit testcases with test coverage of 100% for entire project using React Testing Library, Jest",
        // "Developed end points for different services using Node.js",
        // "Addressed migration issues while migrating project from Heroku to AWS, ensuring a smooth deployment process ",
      ],
    },
    {
      Company: "Xebia",
      Duration: "March 2022 - July 2023",
      Role: "Associate Software Engineer",
      responsibilities: [
        // "Developed web pages using React.js, ensuring seamless integration with backend APIs",
        // "Wrote Unit testcases with test coverage of 100% for entire project using React Testing Library, Jest",
        // "Developed end points for different services using Node.js",
        // "Addressed migration issues while migrating project from Heroku to AWS, ensuring a smooth deployment process ",
      ],
    },
    {
      Company: "MAQ Software",
      Duration: "September 2022 - Febuary 2022",
      Role: "Associate Software Engineer",
      responsibilities: [
        // "Designed and implemented responsive user interfaces with Angular, achieving a 15% increase in user satisfaction scores.",
        // "Implemented a microservices architecture using Node.js and Express, which notably enhanced API response time by 25% and reduced server load by 30%.",
        // "Led a cross-functional team in the successful implementation of a new feature using React and Redux, leading to a remarkable 20% surge in user engagement within the initial month.",
        // "Spearheaded the introduction of testing processes utilizing Jest and Enzyme, resulting in a 30% boost in test coverage and a 25% reduction in post-release defects.",
      ],
    },
    {
      Company: "Being Zero Pvt. Ltd",
      Duration: "January 2021 - Febuary 2021",
      Role: "SDE Intern",
      responsibilities: [
        // "Developed a role-based quiz application, managing creation, attempts, and result display, statistics of users",
        // "Added a Summer note (Rich Editor) for Quiz questions",
      ],
    },
  ],
  Education: [
    {
      College: "University of Central Missouri",
      level: "Master's in Computer Science",
      Duration: "August 2023 - December 2024",
    },
    {
      College: "CMR College of Engineering and Technology",
      level: "B.Tech in Computer Science & Engineering",
      Duration: "July 2018 - May 2022",
    },
  ],
};

export const projects: ProjectItemProps[] = [
  {
    image: "./quiz.png",
    title: "Quizzie",
    link: "https://github.com/mani818686/Quizzie",
    info: "Quizzie featuring creation, attempts, and results display, optimizing user experience with interactive quizzes and result reviews.",
    skills: ["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDB", "Pug"],
  },
  {
    image: "./ride.jpeg",
    title: "Student Rides",
    link: "https://test81211.000webhostapp.com/",
    info: "Student Rides is a user-friendly application facilitating seamless ride-sharing among students, offering features like ride posting, requesting, and email notifications for ride updates",
    skills: ["PHP", "MySQL", "PHPMailer", "Javascript", "HTML", "CSS"],
  },
  {
    image: "./ecommerce.png",
    title: "Ecommerce Fashion",
    link: "https://github.com/mani818686/ecommerce-fashion/",
    info: "E-commerce fashion platform features a range of categories including clothing for men, women, and children, along accessories. Users can easily filter products based on categories, view products, add items to their cart, and seamlessly place orders for a convenient shopping experience.",
    skills: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    image: "./tic-tac-toe.png",
    title: "Tic-Tac-Toe",
    link: "https://mani818686.github.io/TIC-TAC-TOE/",
    info: "Tic-Tac-Toe offers interactive gameplay where users can challenge the computer.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];
export const skills: SkillsProps = {
  Programming: ["C", "C++", "Java", "Python", "JavaScript", "Typescript"],
  Frontend: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "JQuery",
    "React.js",
    "Next.js",
    "Angular",
    "Redux",
    "React Flows",
    "Jest",
    "React Testing Library",
    "Enzyme",
    "Formik",
    "Yup",
    "Styled Components",
  ],
  Backend: ["Node.js", "Express.js", "NestJS","SpringBoot", "Flask", "Django",],
  Database: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  Tools: [
    "GitHub",
    "Git (Version Control)",
    "Visual Studio Code",
    "IntelliJ",
    "Postman",
    "Eclipse",
    "Jupyter",
  ],
  Others: [
    "Problem Solving",
    "Data Structures & Algorithms",
    "AWS",
    "Docker",
    "Selenium",
    "REST APIs", 
    "Agile methodology",
    "Objected Oriented Programming",
    "JWT",
    "Chart.js",
    "AG Grid"
  ],
};

export const about = {
  profile: "./profile.jpeg",
  linkedin: "https://www.linkedin.com/in/alimi-manideep/",
  github: "https://github.com/mani818686",
  email: "alimimanideep7@gmail.com",
  resume:
    "https://drive.google.com/file/d/1au0ykjTI0Ij5EedPaoefg4USRLjn25Jn/view?usp=sharing",
  phone: "+17203355299",
  info: [
    "Experienced Full Stack Developer proficient in web development technologies such as React.js, Node.js, Next.js., Angular",
    "Strong foundation in software engineering principles, with a focus on building scalable and efficient applications",
    "I'm passionate about creating software products.",
    "Loves to solve problems in web development.",
    "Constantly exploring the latest advancements in software development",
    "eager to embark on a journey of continuous learning and discovery.",
  ],
};
