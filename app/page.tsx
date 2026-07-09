import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Formation } from "@/components/Formation";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Profile />
      <Skills />
      <Projects />
      <Formation />
      <Contact />
    </>
  );
}
