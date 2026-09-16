'use client'

import { RiLinkedinFill,RiGithubFill,RiFacebookFill } from "react-icons/ri"
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import Link from "next/link"

const icons = [
    {
        path:"https://www.linkedin.com/in/ayush-singh-0b9b62257/",name:<RiLinkedinFill/>
    },
    {
        path:"https://leetcode.com/u/ayushsingh474020/",name:<SiLeetcode/>
    },
    {
        path:"https://github.com/ayushsingh474020",name:<RiGithubFill/> 
    },
    {
        path:"https://www.geeksforgeeks.org/user/ayushsingpwr2/",name:<SiGeeksforgeeks/>
    },
]

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
        return (<Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>
                {icon.name}
            </div>
        </Link>)
      })}
    </div>
  )
}

export default Socials
