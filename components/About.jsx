import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Ayush Singh" },
  { icon: <PhoneCall size={20} />, text: "+91-7887078303" },
  { icon: <MailIcon size={20} />, text: "ayushsingh474020@gmail.com" },
  { icon: <Calendar size={20} />, text: "26 March 2003" },
  { icon: <GraduationCap size={20} />, text: "BTech in Computer Science" },
  { icon: <HomeIcon size={20} />, text: "Prayagraj, Uttar Pradesh, India" },
];

const qualificationData = {
  education: [
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

  experience: [
    {
      company: "Incture Technologies",
      role: "Associate Software Developer",
      years: "November 2025 to current"
    },
    {
      company: "Incture Technologies",
      role: "Software Developer Intern",
      years: "August 2025 to November 2025",
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
};

const About = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        {/* Added lg:divide-x lg:divide-border to draw a vertical line between the two columns */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 lg:divide-x lg:divide-border">
          {/* ================= PERSONAL ================= */}
          <div className="text-center lg:text-left">
            <h3 className="h3 mb-4">
              Crafting Intelligent and Scalable Solutions
            </h3>

            <p className="subtitle max-w-xl mx-auto lg:mx-0 mb-10">
              I specialize in building full-stack applications using modern
              technologies like React, Next.js, Spring Boot, and Node.js,
              creating seamless and responsive user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {infoData.map((item, index) => (
                <div
                  className="flex items-center gap-x-4 justify-center lg:justify-start"
                  key={index}
                >
                  <div className="text-primary shrink-0">
                    {item.icon}
                  </div>

                  <div className="text-sm xl:text-base">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="text-primary font-medium">
                Languages
              </div>

              <div className="border-b border-border"></div>

              <div>English, Hindi</div>
            </div>
          </div>

          {/* ================= QUALIFICATION ================= */}
          {/* Added lg:pl-12 xl:pl-16 so content has breathing room from the new divider line */}
          <div className="w-full lg:pl-12 xl:pl-16">

            {/* My Journey — now always centered, so it sits centered above Experience + Education */}
            <h3 className="h3 mb-10 text-center">
              My Journey
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14">

              {/* ================= EXPERIENCE ================= */}
              <div className="flex flex-col gap-y-6">

                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                  <Briefcase size={22} />

                  <h4 className="capitalize font-medium">
                    Experience
                  </h4>
                </div>

                <div className="flex flex-col gap-y-8">
                  {qualificationData.experience.map((item, index) => {
                    const { company, role, years } = item;

                    return (
                      <div
                        className="flex gap-x-6 group"
                        key={index}
                      >
                        <div className="h-[84px] w-[1px] bg-border relative ml-2 shrink-0">
                          <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                        </div>

                        <div>
                          <div className="font-semibold text-lg xl:text-xl leading-tight mb-2">
                            {company}
                          </div>

                          <div className="text-base xl:text-lg leading-tight text-muted-foreground mb-3">
                            {role}
                          </div>

                          <div className="text-sm xl:text-base font-medium">
                            {years}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ================= EDUCATION ================= */}
              <div className="flex flex-col gap-y-6">

                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                  <GraduationCap size={26} />

                  <h4 className="capitalize font-medium">
                    Education
                  </h4>
                </div>

                <div className="flex flex-col gap-y-8">
                  {qualificationData.education.map((item, index) => {
                    const {
                      university,
                      qualification,
                      years,
                    } = item;

                    return (
                      <div
                        className="flex gap-x-6 group"
                        key={index}
                      >
                        <div className="h-[84px] w-[1px] bg-border relative ml-2 shrink-0">
                          <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                        </div>

                        <div>
                          <div className="font-semibold text-lg xl:text-xl leading-tight mb-2">
                            {university}
                          </div>

                          <div className="text-base xl:text-lg leading-tight text-muted-foreground mb-3">
                            {qualification}
                          </div>

                          <div className="text-sm xl:text-base font-medium">
                            {years}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;