"use client";

import { motion } from 'framer-motion';
import IconCloud from "@/components/magicui/icon-cloud";

const SkillsList = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "Next.js",
    "GraphQL", "CSS", "HTML", "Git", "AWS"
  ];

  const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
    "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "sonarqube", "figma",
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black mb-8 block">
          My Skills
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-lg font-medium leading-none text-transparent dark:from-white dark:to-black">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 mx-auto">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
