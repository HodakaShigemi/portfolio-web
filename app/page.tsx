import Image from "next/image";
import Title from "@/app/_components/title";
import GlobalNavigation from "@/app/_components/global-navigation";
import Profile from "@/app/_components/profile";
import Skill from "@/app/_components/skill";
import Projects from "@/app/_components/projects";
import Contact from "@/app/_components/contact";
import Footer from "@/app/_components/footer";

export default function Home() {
  return (
    <main>
      <Title />
      <GlobalNavigation />
      <Profile />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
