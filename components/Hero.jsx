import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 min-h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container max-auto">
        <div className="flex max-w-[860px] w-full flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
          <div className="text-sm uppercase font-semibold mb-4 textprimary tracking-[4px] text-orange-600">
            Associate Software Engineer
          </div>
          <h1 className="h1 mb-4">Hey there, Im Ayush Singh</h1>
          <p className="subtitle max-w-[760px] mx-auto xl:mx-0 ">
          I’m an Associate Software Engineer with experience building backend systems and business applications using Java, Spring Boot, REST APIs, databases, and cloud-based services.
          Over the past year, I’ve worked on backend workflows, integrations, scheduling, reporting, document management, and SAP-based systems. A big part of my work has been improving existing processes and building features that make these systems more efficient and reliable.
          Outside of work, I’ve been building SyncFlow, an AI-powered email automation platform. It takes incoming emails and turns them into tasks and meetings. I’ve built the backend using Java, Spring Boot, PostgreSQL, Gmail APIs, Google Pub/Sub, OAuth 2.0, and asynchronous processing, along with a React frontend.
          I’m open to Software Engineer and Backend Engineer opportunities where I can keep learning, take on meaningful engineering problems, and contribute to building good products.
          I’m open to Software Engineer, Backend Engineer, and Full-Stack Engineer opportunities where I can keep learning, work on meaningful problems, and contribute across the stack.
          </p>
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
            <Link href="/contact">
              <Button className="gap-x-2">
                Contact me <Send size={18} />{" "}
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="gap-x-2" variant="secondary">
                Download CV <Download size={18} />{" "}
              </Button>
            </Link>
          </div>
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
          />
        </div>
        {/* <div className="hidden xl:flex relative">
          <Badge
            icon={<RiBriefcase4Fill />}
            endCountNum={6}
            badgeText="Months of Experience"
            containerStyles="absolute top-[24%] -left-[5rem] "
          />
          <Badge
            icon={<RiTodoFill />}
            endCountNum={6}
            endCountText="+"
            badgeText="Finished Fullstack Projects"
            containerStyles="absolute top-[60%] -left-[1rem] "
          />
          <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
          <DevImg
            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom "
            imgSrc="/hero/developer-1.png"
          />
        </div> */}

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate:bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;