import Image from "next/image";
import { TabsContent, TabsTrigger, Tabs, TabsList } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import DevImg from "./DevImg";

const infoData = [
  { icon: <User2 size={20} />, text: "Ayush Singh" },
  { icon: <PhoneCall size={20} />, text: "+91-7887078303" },
  { icon: <MailIcon size={20} />, text: "ayushsingh474020@gmail.com" },
  { icon: <Calendar size={20} />, text: "26 March 2003" },
  { icon: <GraduationCap size={20} />, text: "BTech in Computer Science" },
  { icon: <HomeIcon size={20} />, text: "Prayagraj, Uttar Pradesh, India" },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university:
          "International Institute of Information Technology (IIIT) Bhubaneswar",
        qualification: "Bachelor in Technology (CGPA: 8.21)",
        years: "2021-2025",
      },
      {
        university: "Kendriya Vidyalaya No.2 Jodhpur",
        qualification: "Higher Secondary (Percentage: 87.2%)",
        years: "2019-2020",
      },
      {
        university: "Kendriya Vidyalaya No.2 Gwalior",
        qualification: "Matriculation (Percentage: 81.2%)",
        years: "2017-2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Incture Technologies",
        role: "Software Developer Intern",
        years: "Feb 2025 to Current",
      },
      {
        company: "Hosla",
        role: "Software Developer Intern",
        years: "June 2024 to September 2024",
      },
      {
        company: "CodSoft",
        role: "Software Developer Intern Trainee",
        years: "May 2024 to June 2024",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Language",
    data: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Tools",
    data: [
      "Visual Studio Code (VS Code)",
      "IntelliJ IDEA",
      "Google Colab",
      "Postman",
      "MongoDB Compass",
      "MySQL Workbench",
      "Git & GitHub",
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Crafting Intelligent and Scalable Solutions
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in building full-stack applications using
                      modern technologies like React, Next.js, Spring Boot, and
                      Node.js, creating seamless and responsive user
                      experiences.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={20} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use everyday</h3>

                    {/* Side by side layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Programming Languages */}
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Programming Languages
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        <ul className="list-disc list-inside">
                          {getData(skillsData, "Language").data.map(
                            (skill, index) => (
                              <li key={index}>{skill}</li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Tools & Frameworks
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        <ul className="list-disc list-inside">
                          {getData(skillsData, "Tools").data.map(
                            (tool, index) => (
                              <li key={index}>{tool}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
