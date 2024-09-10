import Image from 'next/image';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function Feature() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center p-6">
      <Image
        src="/king.png"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full z-10"
      />
      <h2 className="mt-4 text-2xl font-bold text-white">Ndumiso Banda</h2>
      <p className="mt-2 text-lg text-gray-300">Web Developer & UI/UX Enthusiast</p>
    </NeonGradientCard>
  );
}

export default Feature;