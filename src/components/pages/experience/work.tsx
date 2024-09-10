'use client'

import { BorderBeam } from "@/components/magicui/border-beam";

const Work = () => {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      duration: "2020 - Present",
      description: "Led development of scalable web applications using React and Node.js."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2018 - 2020",
      description: "Developed and maintained full-stack applications with JavaScript and Python."
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      duration: "2016 - 2018",
      description: "Assisted in building responsive websites and e-commerce platforms."
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="relative flex flex-col items-start justify-center overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
              <BorderBeam size={150} duration={8} delay={index * 3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
