import './App.css'
import profilePic from "./assets/profile-pic.jpg"

import ProjectCard from './components/ProjectCard'
import StudyCard from './components/studyCard'
import CertificateCard from './components/CertificateCard'

import project1 from './assets/recipe-share-platform.jpeg'
import staticWebsImage from './assets/static-web.jpg'
import responsiveWebImage from './assets/responsive-web.jpg'
import javaImage from './assets/java-programming.jpg'
import pythonPart1 from './assets/python-part1.jpg'
import pythonPart2 from './assets/python-part2.jpg'
import databaseImage from './assets/databases.jpg'
import pythonImage from './assets/python-nxtwave.jpg'
import fullStackIMage from './assets/fullstack-internship.jpg'
import uiuxImage from './assets/ui-ux.png'
import xpmImage from './assets/xpm.jpg'

function App() {
  const aboutArray = ["Hi, I'm Yaswanth Vardhan Killampalli, a computer science student passionate about full-stack development, cybersecurity, and cloud computing. Skilled in C and Java, I’ve developed innovative solutions for server security during hackathons. Enrolled in the CCBP SMART program, I’m advancing my expertise in cutting-edge technologies. Beyond tech, I enjoy learning, collaborating, and exploring new ideas. Let’s create something amazing together!"];
  const logoUrlArray = ["https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/wctdpqyrqunnajo34rqt","https://cdn.brandfetch.io/idcqUMqHg0/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B","https://cdn.brandfetch.io/idGJTURmPP/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B","https://cdn.brandfetch.io/id38TrOm-U/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"];
  const schoolNameArray = ["Aravindha High School","Sri Chaitanya Junior College","Dhanekula Institue of Engineering & Technology","NxtWave"];
  const timePeriodArray = ["2020-2021","2021-2023","2023-2027(Ongoing)","2024-2028(Ongoing)"];
  const aboutSchoolArray = ["During my time at Aravinda High School, I served as the All-Round Captain in ninth grade, showcasing leadership and versatility. I excelled in Mathematics and stood out in sports, especially athletics and kabaddi, demonstrating a strong balance between academics and extracurricular activities.","At Sri Chaitanya Junior College, I built a strong foundation in academics while honing my problem-solving and analytical skills. The college’s disciplined environment and focus on academic excellence prepared me for advanced studies in engineering.","At Dhanekula Institute of Engineering and Technology, I am pursuing Computer Science and Engineering with a specialization in Machine Learning. Engaging in projects, hackathons, and workshops has strengthened my skills in full-stack development, cybersecurity, and cloud computing","Through the Nextwave platform, I have been expanding my skills in full-stack development. The online learning experience, combined with structured modules and real-world projects, has allowed me to gain practical expertise in coding and software development, aligning well with industry standards."];
  const ProjectsArray = [
    {
      "name":"Recipe-Share Platform",
      "imageUrl":project1,
      "decription":"🚀Built an epic recipe-sharing app using the MERN stack with AICTE and Edunet Foundation! 🎉 Crafted a slick React.js frontend, scalable Node.js APIs, and a MongoDB database for seamless user interactions like recipe filtering and follow/unfollow. Bootstrap accordions made cooking steps a breeze! 💡 This project supercharged my full-stack skills and user-focused design! 🌟",
      "date":"21 March,2025"
    }
  ];
  const certificateArray = [
  {
    "name": "Full Stack Web Development Internship",
    "imageUrl": fullStackIMage,
    "description": "Successfully completed the 'Full Stack Internship' offered by AICTE and Edunet Foundation. During this internship, I developed a recipe-sharing platform using the MERN stack (MongoDB, Express.js, React, Node.js). The project involved designing a responsive front-end, implementing RESTful APIs, and managing a NoSQL database, enhancing my skills in full-stack development and collaborative software engineering.",
    "date": "21 March,2025"
  },
  {
    "name": "Programming Foundation with Python",
    "imageUrl": pythonImage,
    "description": "Successfully completed the 'Programming Foundation with Python' course offered by NxtWave. This course covered essential Python programming concepts, including variables, data structures, control flow, functions, and object-oriented programming. With practical exercises and real-world projects, it equipped learners with the skills to write efficient Python code and solve complex problems.",
    "date": "18 March,2025"
  },
  {
    "name": "XPM 4.O Fundamentals",
    "imageUrl": xpmImage,
    "description": "Successfully completed the 'XPM Fundamentals' course offered by NxtWave. This course provided an in-depth understanding of project management methodologies tailored for tech projects, including agile practices, sprint planning, and stakeholder collaboration. Through practical simulations, learners gained skills to manage software development projects effectively, ensuring timely delivery and quality outcomes.",
    "date": "11 Feb,2025"
  },
  {
    "name": "Introduction to Databases",
    "imageUrl": databaseImage,
    "description": "Successfully completed the 'Introduction to Databases' course offered by NxtWave. This course provided a comprehensive understanding of database concepts, including relational database management systems, SQL query writing, normalization, and data modeling. Through hands-on projects, learners gained practical skills in designing and querying databases, preparing them for real-world applications in software development.",
    "date": "05 Jan,2025"
  },
  {
    "name": "UI/UX Fundamentals Workshop",
    "imageUrl": uiuxImage,
    "description": "Successfully completed the 'UI/UX Fundamentals Workshop' offered by NxtWave. This workshop introduced key principles of user interface and user experience design, including wireframing, prototyping, usability testing, and design thinking. Through hands-on activities, learners developed skills to create intuitive and visually appealing interfaces, aligning with modern design standards.",
    "date": "23 Dec,2024"
  },
  {
    "name": "Static Website",
    "imageUrl": staticWebsImage,
    "description": "The 'Build Your Own Static Website' course by Nxtwave introduces key concepts like HTML5 basics, CSS3, the CSS box model, an introduction to Bootstrap and flex layouts, Bootstrap utility classes and components, and website layout development. This hands-on course empowers beginners to create well-structured and visually appealing static websites with ease.",
    "date": "Dec 17, 2024"
  },
  {
    "name": "Responsive Website",
    "imageUrl": responsiveWebImage,
    "description": "The 'Build Your Own Responsive Website' course by Nxtwave covers essential concepts like the Bootstrap grid system, CSS specificity, CSS cascading and inheritance, and Bootstrap flex utilities. Through hands-on exercises and real-world projects, this course provides beginners with the skills to create a responsive and visually appealing website, ensuring a strong foundation in modern web design practices",
    "date": "Dec 17, 2024"
  },
  {
    "name": "Programming in Java",
    "imageUrl": javaImage,
    "description": "Successfully completed the 'Programming in Java' course offered by NPTEL on November 18, 2024. This course provided a comprehensive understanding of Java programming, covering essential concepts, syntax, and real-world applications, equipping learners with the skills to build robust Java applications.",
    "date": "Nov 27, 2024"
  },
  {
    "name": "Programming in Python-1",
    "imageUrl": pythonPart1,
    "description": "Successfully completed the 'Programming Fundamentals using Python - Part 2' course offered by Infosys Springboard on November 18, 2024. This course covered advanced Python concepts, enhancing programming proficiency and problem-solving skills.",
    "date": "Nov 18, 2024"
  },
  {
    "name": "Programming in Python-2",
    "imageUrl": pythonPart2,
    "description": "Successfully completed the 'Programming Fundamentals using Python - Part 1' course offered by Infosys Springboard on November 18, 2024. This course provided a strong foundation in Python programming, focusing on core concepts and real-world applications.",
    "date": "Nov 18, 2024"
  }

  ];
  return (
    <>
      <nav className="navbarSetttings navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img 
              src="/portfolio.png" className="mainLogoSettings"
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link active" href="#myjourneySection">My Journey</a>
              <a className="nav-link active" href="#projectsSection">My Projects</a>
              <a className="nav-link active" href="#certificatesSection">Certificates</a>
              <a className="nav-link active" href="#contactSection">Social Media</a>
            </div>
          </div>
        </div>
      </nav>
      <div id="introSec">
        <div className="container-fluid">
          <div className="row mainHomeSettings">
              <div className="col-12 col-md-6" id="introSecWithImage">
                <img src={profilePic} className="profilePicStyling"/>
              </div>
              <div className="col-12 col-md-6">
                <h4 className='text-center'>Hello,Ladies & Gentleman</h4>
                <p className='text-center'>Presenting you</p>
                <h2 className='text-center'>Killampalli Yaswanth Vardhan</h2>
              </div>
          </div>
        </div>
      </div>
      <div id="aboutMeSection">
        <h2 className='headingSettings'>About Me</h2>
        <p>{aboutArray[0]}</p>
      </div>
      <div id="myJourneySection">
        <h2 className='headingSettings'>My Journey</h2>
        <div className='container-fluid'>
          <div className='row'>
            {logoUrlArray.map((logoUrl,index) =>
              <StudyCard
                key={index}
                logoUrl={logoUrl}
                schoolName={schoolNameArray[index]}
                timePeriod={timePeriodArray[index]}
                aboutSchool={aboutSchoolArray[index]}
              />
            )}
          </div>
        </div>
      </div>
      <div id="projectsSection">  
        <h2 className='headingSettings'>Projects</h2>
        <div className="container-fluid">
          <div className="row">
            {ProjectsArray.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                imageUrl={project.imageUrl}
                textInfo={project.decription}
                dateInfo={project.date}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="certificatesSection">
        <h2 className='headingSettings'>Certificates</h2>
        <div className="container-fluid">
          <div className="row">
            {certificateArray.map((certificate, index) => (
              <CertificateCard
                key={index}
                name={certificate.name}
                imageUrl={certificate.imageUrl}
                textInfo={certificate.description}
                dateInfo={certificate.date}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="contactSection">
        <div class="d-flex flex-column justify-content-center">
          <h2 className='text-center headingSettings'>Social Media</h2>
          <div className="d-flex flex-row justify-content-center">
            <a href="https://www.instagram.com/itz_me_yashdevil" target="_blank" aria-label="Visit my Instagram">
                <i class="fa-brands fa-instagram contact-icon-settings"></i></a>
            <a href="https://www.facebook.com/yaswanth.killampalli" target="_blank" aria-label="Visit my Facebook">
                <i class="fa-brands fa-facebook-f contact-icon-settings"></i></a>
            <a href="https://www.linkedin.com/in/yaswanthvardhankillampalli" target="_blank" aria-label="Visit my Linkedin">
                <i class="fa-brands fa-linkedin-in contact-icon-settings"></i></a>
            <a href="https://x.com/Yaswanth_VK" target="_blank" aria-label="Visit my Twitter">
                <i class="fa-brands fa-x-twitter contact-icon-settings"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
