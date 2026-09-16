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
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 textprimary tracking-[4px] text-orange-600">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, My Name is Ayush Singh</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 ">
              Graduated in 2025 with a degree in Computer Science Engineering from IIIT Bhubaneswar, I am a passionate full-stack developer with strong expertise in both frontend and backend development. Skilled in Java, C++, JavaScript, and Python, I work with React, Next.js, Spring Boot, and Node.js to build scalable and efficient applications. I have experience with relational and NoSQL databases such as MySQL, MongoDB, and PostgreSQL, ensuring reliable data management. Alongside development, I am exploring Machine Learning with a focus on regression, classification, clustering, and reinforcement learning to create intelligent and data-driven systems.
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
          <div className="hidden xl:flex relative">
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
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate:bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
