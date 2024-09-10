'use client'

import { useTheme } from "next-themes";
import ShineBorder from "@/components/magicui/shine-border";
import { MagicCard } from "@/components/magicui/magic-card";

const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    "JavaScript", "React", "Next.js", "TypeScript", "Node.js", "CSS", "HTML", "Git"
  ];

  return (
    <div className="py-16">
      <ShineBorder
        className="text-center text-4xl font-bold mb-12"
        color={theme === "dark" ? "white" : "black"}
      >
        My Skills
      </ShineBorder>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <MagicCard
            key={index}
            className="cursor-pointer flex items-center justify-center shadow-2xl h-32"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <span className="text-2xl font-semibold">{skill}</span>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
