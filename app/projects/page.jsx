"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/Syncflow.jpeg",
    category: "Springboot + React",
    name: "SyncFlow",
    description: (
      <>
        A full-stack{" "}
        <strong>AI-powered email and task management platform</strong> built
        with <strong>Java, Spring Boot, PostgreSQL, and React</strong>, designed
        to help users identify and organize important tasks and meetings from
        their emails.
        <br />
        <br />
        SyncFlow integrates with{" "}
        <strong>Gmail using OAuth 2.0 and Gmail APIs</strong> to securely
        connect email accounts, perform initial synchronization, and process new
        emails incrementally using{" "}
        <strong>Gmail History API and Google Pub/Sub</strong>. Incoming emails
        are processed asynchronously through background workers, with{" "}
        <strong>
          retry handling, failure management, and idempotent processing
        </strong>{" "}
        to ensure reliable synchronization.
        <br />
        <br />
        An <strong>LLM-powered classification pipeline using Groq</strong>{" "}
        analyzes emails and identifies whether they represent a{" "}
        <strong>task, meeting, or irrelevant message</strong>, extracting
        relevant information such as titles, senders, deadlines, and
        descriptions. The React frontend provides dedicated{" "}
        <strong>task, calendar, channel, and settings interfaces</strong> for
        managing the extracted information.
        <br />
        <br />
        <strong>Tech Stack:</strong> Java, Spring Boot, PostgreSQL, React,
        Tailwind CSS, Zustand, TanStack Query, Gmail API, Google OAuth 2.0,
        Google Pub/Sub, Groq, Redis, Docker
      </>
    ),
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7507131221534216193/",
    github: "/",
  },
  {
    image: "/work/animax.png",
    category: "MERN",
    name: "Animax",
    description: (
      <>
        A full-stack{" "}
        <strong>anime streaming and content management platform</strong> built
        using the <strong>MERN stack</strong>, designed to provide users with an
        immersive platform for discovering, watching, and managing anime
        content.
        <br />
        <br />
        Animax features a comprehensive <strong>
          authentication system
        </strong>{" "}
        with JWT, OAuth2, OTP verification, secure login/signup, and password
        reset functionality. Users can browse an extensive anime library,{" "}
        <strong>search by title, author, or tags</strong>, watch episodes in
        fullscreen, and download content for offline viewing.
        <br />
        <br />
        The platform also allows authenticated users to{" "}
        <strong>upload anime content using Firebase Cloud Storage</strong>,
        maintain personalized <strong>favorite lists</strong>, and switch
        between <strong>light and dark themes</strong>. Redux is used for
        centralized state management, while Material UI provides a responsive
        and consistent interface.
        <br />
        <br />
        <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB,
        Redux, Material UI, Firebase, JWT, OAuth2
      </>
    ),
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7217234464572104706/",
    github: "https://github.com/ayushsingh474020/Animax_Backend",
  },
  {
    image: "/work/chat.png",
    category: "MERN",
    name: "Web Chat Application",
    description: (
      <>
        A full-stack <strong>real-time chat application</strong> built with{" "}
        <strong>React, Node.js, Express, MongoDB, and Socket.IO</strong>,
        designed to provide seamless and efficient communication through a clean
        and minimalist interface.
        <br />
        <br />
        The application features <strong>JWT-based authentication</strong> for
        secure access, along with <strong>real-time messaging</strong> and
        notifications for new messages, mentions, and group activities.
        <br />
        <br />
        Users can{" "}
        <strong>
          search for other users, start conversations, and create and manage
          group chats
        </strong>
        . <strong>Socket.IO</strong> enables real-time bidirectional
        communication, ensuring messages and chat activities are delivered
        instantly without requiring page refreshes.
        <br />
        <br />
        <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB,
        Socket.IO, JWT
      </>
    ),
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7200551758157287425/",
    github: "https://github.com/ayushsingh474020/ChatApp_Backend",
  },
  {
    image: "/work/note.jpeg",
    category: "MERN",
    name: "Note Keeper",
    description: (
      <>
        A full-stack note and task management application built using the{" "}
        <strong>MERN stack</strong> and <strong>Chakra UI</strong>, designed to
        help users organize notes, manage tasks, and stay on top of deadlines.
        <br />
        <br />
        The application provides <strong>
          secure user authentication
        </strong>{" "}
        with user-specific data management, along with complete{" "}
        <strong>CRUD functionality</strong> for creating, updating, and deleting
        notes and tasks.
        <br />
        <br />
        Note Keeper includes{" "}
        <strong>search functionality across notes and tasks</strong>,{" "}
        <strong>note sharing</strong> for collaboration, and{" "}
        <strong>deadline notifications</strong> to help users stay on schedule.
        It also features <strong>dark/night mode</strong> for a comfortable
        experience in low-light environments.
        <br />
        <br />
        <strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js,
        Chakra UI
      </>
    ),
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7197255448591228928/",
    github: "https://github.com/ayushsingh474020/Note_Keeper_App",
  },
  {
    image: "/work/Portfolio.jpeg",
    category: "Next",
    name: "Portfolio",
    description: (
      <>
        A modern and responsive <strong>developer portfolio website</strong>{" "}
        built with <strong>Next.js</strong>, designed to showcase my technical
        skills, projects, experience, and development journey through a clean
        and interactive interface.
        <br />
        <br />
        The portfolio features dedicated sections for{" "}
        <strong>about, skills, experience, projects, and contact</strong>, with
        responsive layouts and smooth navigation optimized for different screen
        sizes and devices.
        <br />
        <br />
        It also includes a <strong>contact form</strong> that allows visitors
        and recruiters to directly send me messages for queries, opportunities,
        or collaboration. The project focuses on{" "}
        <strong>
          modern UI, responsive design, reusable components, and an engaging
          user experience
        </strong>
        .
        <br />
        <br />
        <strong>Tech Stack:</strong> Next.js, React.js, JavaScript, Tailwind CSS
      </>
    ),
    link: "https://portfolio-henna-chi-89.vercel.app/",
    github: "https://github.com/ayushsingh474020/Portfolio",
  },
  {
    image: "/work/weather.png",
    category: "EJS",
    name: "Weather App",
    description: (
      <>
        A responsive <strong>weather forecasting web application</strong> that
        provides users with real-time weather information for searched locations
        through a simple and intuitive interface.
        <br />
        <br />
        Users can <strong>search for locations</strong> and view essential
        weather details such as{" "}
        <strong>
          temperature, weather conditions, humidity, and other location-based
          information
        </strong>
        . The application integrates a <strong>weather API</strong> to fetch and
        display up-to-date weather data dynamically.
        <br />
        <br />
        Built with a server-side rendering approach, the project focuses on{" "}
        <strong>
          API integration, backend request handling, dynamic data rendering, and
          responsive UI design
        </strong>
        .
        <br />
        <br />
        <strong>Tech Stack:</strong> Node.js, Express.js, EJS, HTML, CSS,
        Weather API
      </>
    ),
  },
  {
    image: "/work/Python.jpeg",
    category: "Python",
    name: "Amazon Price Alert",
    description: (
      <>
        A Python-based <strong>Amazon price tracking and alert system</strong>{" "}
        that monitors the price of a selected product and notifies the user when
        it drops below a predefined target price.
        <br />
        <br />
        The application uses <strong>web scraping</strong> to retrieve the
        current product price from Amazon, compares it against the user's{" "}
        <strong>target price threshold</strong>, and automatically sends an{" "}
        <strong>email notification</strong> when the desired price is reached.
        <br />
        <br />
        This project provided hands-on experience with{" "}
        <strong>
          web scraping, HTTP requests, HTML parsing, conditional logic, and
          automated email notifications
        </strong>
        , while demonstrating how Python can be used to automate practical
        everyday tasks.
        <br />
        <br />
        <strong>Tech Stack:</strong> Python, Requests, BeautifulSoup, SMTP,
        Amazon product data
      </>
    ),
  },
  {
    image: "/work/Python.jpeg",
    category: "Python",
    name: "Pomodoro Timer",
    description: (
      <>
        A desktop-based <strong>Pomodoro productivity timer</strong> built with{" "}
        <strong>Python and Tkinter</strong>, designed to help users maintain
        focused work sessions using the Pomodoro technique.
        <br />
        <br />
        The application provides a <strong>
          graphical user interface
        </strong>{" "}
        with automated work and break intervals, including{" "}
        <strong>
          25-minute work sessions, short breaks, and longer breaks
        </strong>
        . The timer automatically transitions between sessions to maintain a
        structured productivity cycle.
        <br />
        <br />
        The project provided hands-on experience with{" "}
        <strong>
          Python GUI development, event-driven programming, timers, user
          interface components, and application state management
        </strong>
        .
        <br />
        <br />
        <strong>Tech Stack:</strong> Python, Tkinter
      </>
    ),
  },
  {
    image: "/work/Python.jpeg",
    category: "Python",
    name: "Spotify Playlist",
    description: (
      <>
        A Python-based <strong>Spotify Musical Time Machine</strong> that
        creates a personalized playlist based on the{" "}
        <strong>Billboard Hot 100 songs from a selected date</strong>.
        <br />
        <br />
        Users provide a date, after which the application{" "}
        <strong>scrapes Billboard's Hot 100 chart</strong> to retrieve the top
        songs from that period. It then searches for the songs on Spotify and
        automatically <strong>creates and populates a Spotify playlist</strong>{" "}
        with the matching tracks.
        <br />
        <br />
        The project provided hands-on experience with{" "}
        <strong>
          web scraping, REST APIs, OAuth authentication, HTML parsing, and
          third-party API integration
        </strong>
        , connecting Billboard data with Spotify's platform through Python.
        <br />
        <br />
        <strong>Tech Stack:</strong> Python, BeautifulSoup, Requests, Spotipy,
        Spotify Web API
      </>
    ),
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Project = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:max-w-[900px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  className="capitalize whitespace-nowrap w-full px-4"
                  value={category}
                  key={index}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
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
  );
};

export default Project;
