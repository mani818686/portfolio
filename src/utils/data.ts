
export const BackgroundDetails:BackgroundProps= {
  Experience: [
    {
      Company: "Xebia",
      Duration: "March 2022 - July 2023",
      Role: "Associate Software Engineer",
      responsibilities: [
        "Developed web pages using React.js, ensuring seamless integration with backend APIs",
        "Wrote Unit testcases for entire project using React Testing Library, Jest",
        "Developed end points for different services using Node.js",
        "Addressed migration issues while migrating project from Heroku to AWS, ensuring a smooth deployment process "
      ],
    },
    {
      Company: "MAQ Software",
      Duration: "September 2022 - Febuary 2022",
      Role: "Associate Software Engineer",
      responsibilities: [
       "Part of the software development process using Python, MySQL",
       "Worked with engineering team to debug solutions & features.",
       "Part of Bootcamp to update with latest technologies"
      ]
    },
    {
        Company: "Being Zero Pvt. Ltd",
        Duration: "January 2021 - Febuary 2021",
        Role: "SDE Intern",
        responsibilities: [
          "Developed a role-based quiz application, managing creation, attempts, and result display, statistics of users",
          "Added a Summer note (Rich Editor) for Quiz questions"
        ],
      },
  ],
  Education:[
    {
      College:"University of Central Missouri",
      level:"Master's in Computer Science",
      Duration:"August 2023 - Present"
    },
    {
      College:"CMR College of Engineering and Technology",
      level:"B.Tech in Computer Science & Engineering",
      Duration:"July 2018 - May 2022"
    }
  ]
};




export const projects : ProjectItemProps[] =[
  {
    image:"/quiz.png",
    title:"Quizzie",
    link:"https://github.com/mani818686/Quizzie",
    info:"Quizzie featuring creation, attempts, and results display, optimizing user experience with interactive quizzes and result reviews.",
    skills:["HTML","CSS","JS","Node.js","Express.js","MongoDB","Pug"]
  },
    {
      image:"/ride.jpeg",
      title:"Student Rides",
      link:"https://test81211.000webhostapp.com/",
      info:"Student Rides is a user-friendly application facilitating seamless ride-sharing among students, offering features like ride posting, requesting, and email notifications for ride updates",
      skills:["PHP","MySQL","PHPMailer","Javascript","HTML","CSS"]
    },
    {
      image:"/ecommerce.png",
      title:"Ecommerce Fashion",
      link:"https://mani818686.github.io/TIC-TAC-TOE/",
      info:"E-commerce fashion platform features a range of categories including clothing for men, women, and children, along accessories. Users can easily filter categories, view products, add items to their cart, and seamlessly place orders for a convenient shopping experience.",
      skills:["React","Node.js","Express.js","MongoDB"]
    },
    {
      image:"/tic-tac-toe.png",
      title:"Tic-Tac-Toe",
      link:"https://mani818686.github.io/TIC-TAC-TOE/",
      info:"Tic-Tac-Toe offers interactive gameplay where users can challenge the computer.",
      skills:["HTML","CSS","JavaScript"]
    },
    
]
export const skills: SkillsProps = {
  'Programming Languages': ["C", "C++", "Java", "Python", "JavaScript", "Typescript"],
  'Frontend Technologies': ["HTML", "CSS", "Bootstrap", "Material UI","JQuery","React.js","Next.js", "Angular", "Redux","React Flows"," Jest", "React Testing Library","Enzyme","Formik", "Yup","Styled Components"],
  'Backend Technologies':["Node.js","Express.js","SpringBoot","Flask",],
  Database:["MySQL","PostgreSQL","MongoDB","SQLite"],
  Tools:["GitHub", "Git", "Visual Studio Code", "IntelliJ", "Postman", "Eclipse","Jupyter" ],
  Others:["Problem Solving","Data Structures & Algorithms","AWS","Docker","Selenium"]
};

export const about ={
  "profile":"/profile.jpeg",
  'linkedin':"https://www.linkedin.com/in/alimi-manideep/",
  "github":"https://github.com/mani818686",
  "email":"alimimanideep7@gmail.com",
  "resume":"https://drive.google.com/file/d/19guMFqipj9ZatQ0PdO3qjJz54VO1EsiM/view?usp=sharing",
  'phone':"+17203355299",
  "info":["I'm passionate about creating software products."," Loves to solve problems in web development.", "Constantly exploring the latest advancements in software development"," eager to embark on a journey of continuous learning and discovery."]
}