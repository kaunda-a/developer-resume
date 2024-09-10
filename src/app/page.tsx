
"use client";
import Particles from "../components/particles";
import Cosmic from "../components/cosmic";
import Hero from "../components/pages/hero";

export default function Home() {
  return (
    <> 
      < Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
       <Cosmic
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Hero />
    </>
  );
}

