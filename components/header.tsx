import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Xicon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import NavigationMenu from './navigation-menu';

const socialMedias = [
  { icon: <Xicon fontSize="large" />, href: 'https://twitter.com/HodakaShigemi'},
  { icon: <LinkedInIcon fontSize="large" />, href: 'https://www.linkedin.com/in/hodaka-shigemi/' },
  { icon: <GitHubIcon fontSize="large" />, href: 'https://github.com/HodakaShigemi' },
];

const SocialMediaLinks = () => {
  return (
    <Stack direction="row" spacing="1vw" alignItems="center">
      {socialMedias.map((socialMedia, index) => (
        <Link href={socialMedia.href} key={index}>
          {socialMedia.icon}
        </Link>
      ))}
    </Stack>
  );
}


const Header = () => {
  return (
    <header>
      <Stack 
        direction="row"
        width="100%" 
        height="64px" 
        justifyContent="space-between" 
        alignItems="center" 
        paddingLeft="5%" 
        paddingRight={{xs:0, sm:"5%"}}
      >
      <Link href="/">
      <Image
        src="/logo-sh.svg"
        alt="Logo"
        width={42}
        height={42}
      />
      </Link>
      <Stack direction={{xs: "row-reverse", sm: "row"}} >
      <NavigationMenu />
      <SocialMediaLinks />
      </Stack>
      </Stack>
    </header>
  );
}

export default Header;

export { SocialMediaLinks };