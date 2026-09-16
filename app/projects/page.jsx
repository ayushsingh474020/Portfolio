'use client';
import React , {useState} from "react"
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard";

const projectData=[
  {
      image:"/work/animax.png",
      category:"JavaScript",
      name:"Animax",
      description: 'Animax is an innovative anime streaming platform I developed to deliver a seamless and engaging viewing experience for anime enthusiasts. It features secure user authentication with login, signup, password reset, OTP verification, OAuth2, and JWT-based security, ensuring a safe experience for all users. The platform offers a vast and frequently updated anime library with fullscreen mode and download options for offline viewing, while also allowing creators to upload and share their own anime content via Google Firebase. Users can personalize their experience by favoriting anime, receiving smart recommendations, and leveraging advanced search functionality by name, author, or tags. To enhance usability, Animax supports both light and dark modes for visual comfort. Built with React on the frontend, Node.js and Express on the backend, and MongoDB for database management, the platform leverages Redux for state handling, Material UI for modern design, and Google Firebase for secure cloud storage.',
      link:"/",
      github:"/"
  },
  {
      image:"/work/chat.png",
      category:"JavaScript",
      name:"Web Chat Application",
      description: 'ChatApp is a real-time web chat application I developed to enable seamless and efficient communication. The platform supports secure authentication with JWT, ensuring user data protection and authorized access. It provides real-time text messaging powered by Socket.IO, complete with instant notifications for new messages, mentions, and group activities. Users can easily search for others, create and manage groups, and enjoy a clean, minimalist chat interface designed for usability. Built with React on the frontend, Node.js and Express on the backend, and Mongoose for database management, the app delivers a smooth and scalable chat experience. Planned future enhancements include video calling for richer communication and a light theme option to complement the existing dark mode. This project strengthened my expertise in real-time communication systems and reinforced my ability to design user-centric web applications.',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"NextJS",
      name:"Portfolio",
      description: 'I built my personal portfolio website using Next.js, with a strong focus on performance, responsiveness, and clean design. The user interface is crafted with shadcn/ui, giving it a modern and minimal look while ensuring accessibility across all devices. To make communication seamless, I integrated a mail feature that allows visitors to directly connect with me through the website. By leveraging Next.js features like server-side rendering and static site generation, the site delivers fast load times and a smooth browsing experience. This portfolio not only highlights my projects and skills but also reflects my ability to create scalable, user-friendly, and efficient web applications.',
      link:"/",
      github:"/"
  },
  {
      image:"/work/note.png",
      category:"JavaScript",
      name:"Note Keeper",
      description: 'The Note Keeper App is a full-stack web application designed to simplify note-taking and task management. Built using the MERN stack with Chakra UI for a clean and responsive interface, it provides users with a seamless experience to create, update, and delete notes and tasks efficiently. The application features a secure authentication system to protect user data, along with an intelligent search functionality that allows quick retrieval of both notes and tasks. To enhance collaboration, users can share notes with others, while deadline notifications ensure important tasks are never missed. Additionally, a night mode option enhances usability by offering a comfortable viewing experience in low-light environments.',
      link:"/",
      github:"/"
  },
  {
      image:"/work/weather.png",
      category:"JavaScript",
      name:"Weather App",
      description: 'The Weather App is a dynamic web application built using Node.js, Express, and EJS templates, integrated with a Weather API to deliver real-time weather updates. The app provides users with detailed weather parameters such as temperature, humidity, wind speed, and atmospheric conditions, along with a full-day forecast for better planning. Designed with clean visuals and an intuitive interface, it enhances the user experience by presenting weather data in an engaging and easy-to-understand format. By combining server-side rendering with EJS and the efficiency of Express, the application ensures fast performance and smooth navigation, making it both functional and visually appealing.',
      link:"/",
      github:"/"
  },
  {
      image:"/work/template.png",
      category:"JavaScript",
      name:"Portfolio template",
      description: 'The Portfolio Template is a dynamic and customizable web application developed using Node.js, Express, and EJS templates, with MongoDB Atlas as the database for efficient data management. Designed to showcase personal or professional profiles, it features structured sections for projects, skills, and experience, all rendered seamlessly through server-side templating with EJS. The template includes mail support, enabling visitors to connect directly through an integrated contact form, ensuring smooth and secure communication. By leveraging MongoDB Atlas, the template allows easy storage and retrieval of user data, making it scalable and adaptable for different use cases. With its clean design, responsive layout, and robust backend integration, this portfolio template offers a solid foundation for building professional online portfolios.',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Amzon Price Alert",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Birthday Wisher",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Flash Card",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Flight Deals Notifier",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Pomodoro",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Snake Game",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Spotify Playlist",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  },
  {
      image:"/work/3.png",
      category:"Python",
      name:"Turtle Racing Game",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
      link:"/",
      github:"/"
  }
]

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item)=>item.category))
]

const Project = () => {
  const [categories,setCategories] = useState(uniqueCategories)
  const [category,setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project)=>{
    return category==="all projects" ? project : project.category===category
  }) 
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none ">
            {categories.map((category,index)=>{
              return (
                <TabsTrigger onClick={()=>setCategory(category)} className="capitalise md:w-auto w-[162px]" value={category} key={index} >{category}</TabsTrigger>
              )
            })}
            </TabsList>
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project,index)=>{
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
            </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Project
