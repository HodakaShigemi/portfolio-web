import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from "@/components/header";
import FirstView from "@/components/first-view";
import Profile from "@/components/profile";
import Career from "@/components/career";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


const navigationTabValues = [
  { label: 'Profile', href: '#profile' },
  { label: 'Skill', href: '#skill' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];


export default function Home() {
  return (
    <Box sx={{ p: 0, bgcolor:'primary.main'}}>
      <Header />
      <FirstView />
      <Profile />
      <Career />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}
