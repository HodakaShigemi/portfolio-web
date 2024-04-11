import Box from '@mui/material/Box';

import { SocialMediaLinks } from './header';
import { Stack } from '@mui/material';

const Footer = () => {
  return (
    <footer>
    <Box sx={{ py: "2em", bgcolor:'primary.light'}}>
      <Stack direction="row" justifyContent="center" pb={2}>
      <SocialMediaLinks />
      </Stack>
      <p className="text-center">© 2024 Hodaka Shigemi</p>
    </Box>
    </footer>   
  )
}

export default Footer;
