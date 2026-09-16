'use client'

import Link from "next/link"
import { Button } from "./ui/button"

import {Swiper,SwiperSlide} from "swiper/react" 

import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'

import ProjectCard from "@/components/ProjectCard"

const projectData=[
    {
        image:"/work/3.png",
        category:"React",
        name:"Note Keeper",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
        link:"/",
        github:"/"
    },
    {
        image:"/work/3.png",
        category:"React",
        name:"Web Chat Application",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
        link:"/",
        github:"/"
    },
    {
        image:"/work/3.png",
        category:"EJS",
        name:"Portfolio Template",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
        link:"/",
        github:"/"
    },
    {
        image:"/work/3.png",
        category:"Next",
        name:"E-Commerce Website",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
        link:"/",
        github:"/"
    },
    {
        image:"/work/3.png",
        category:"EJS",
        name:"Weather App",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
        link:"/",
        github:"/"
    },
    {
        image:"/work/3.png",
        category:"EJS",
        name:"To-do List App",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum eveniet voluptate totam modi sequi!',
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">Here are some of the projects I’ve recently worked on, showcasing my expertise in full-stack development, and modern web technologies. From building real-time chat applications and task management systems to creating video watching platforms, each project reflects my focus on crafting scalable, secure, and engaging user experiences.  
</p>
            <Link href="/projects">
                <Button>All Projects</Button>
            </Link>      
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
            <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{640:{slidesPerView:2}}} spaceBetween={30} modules={{Pagination}} pagination={{clickable:true}}>
                {projectData.slice(0,4).map((project,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
