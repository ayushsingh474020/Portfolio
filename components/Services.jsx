import { Blocks, Gem, GanttChartSquare, Star, Lightbulb, Zap, Brain } from 'lucide-react'; // Ensure correct component names
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Frontend Development",
    description: "Javascript | HTML | CSS | JQuery | EmbeddedJS | React | NextJS | Tailwind | Responsive Web Design | Bootstrap | Wordpress | MaterialUI | ChakraUI | ShadcnUI"
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    description: "Spring | Spring Boot | Spring Security | Node.js | Express | WebSocket | REST APIs | Microservices | JWT | OAuth"
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Python Development",
    description : "Object Oriented Programming(OOP) | Graphical User Interface(GUI) | Turtle Graphics | Pandas | Tkinter | API | Web Scraping | Beautiful Soup | Selenium | Automation"
  },
  {
    icon: <Star size={72} strokeWidth={0.8} />,
    title: "Databse Managament",
    description : "MySQL | MongoDB | Mongoose | Spring JDBC | Hibernate | PostgreSQL | Firebase"
  },
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: "Deployment",
    description : "Git | GitHub | Netlify | Vercel | Render"
  },
  {
    icon: <Brain size={72} strokeWidth={0.8} />,
    title: "Machine Learning",
    description : "Regression | Classification | Clustering | Association Rule Learning | Reinforcement Learning"
  }
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>Tech Stack</h2>
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => (
            <Card key={index} className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative m-4">
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">{item.icon}</div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
