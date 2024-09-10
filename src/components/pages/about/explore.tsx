import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import { FaCode, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

export function Explore() {
  return (
    <div className="h-full w-full max-w-[48rem] items-center justify-center overflow-hidden pt-8 px-4">
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Ndumiso Banda<span className="text-blue-500">.</span>
          </h1>
        </div>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Full Stack Web Developer
          </h2>
        </div>
      </BoxReveal>

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <div>
          <div className="flex items-center mb-6">
            <FaCode className="text-blue-500 mr-2" size={24} />
            <h3 className="text-xl font-semibold">Skills</h3>
          </div>
          <p className="mb-4">
            JavaScript, React, Node.js, TypeScript, Next.js, GraphQL, CSS, HTML, Git, AWS
          </p>
        </div>
      </BoxReveal>

      {/* Continue wrapping other sections similarly */}

      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <div className="flex space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600">Download CV</Button>
          <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">Contact Me</Button>
        </div>
      </BoxReveal>
    </div>
  );
}

export default Explore;
