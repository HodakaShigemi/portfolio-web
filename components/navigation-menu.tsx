'use client';

import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';

import { scrollInto } from './navigation-actions';


const NavigationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };


  return (
    <>
    <Box component="div" sx={{display: {xs: "block", sm: "none" }}}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: "primary.contrastText"}}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={(event) => {handleClose(event); scrollInto("career")}}>Career</MenuItem>
        <MenuItem onClick={(event) => {handleClose(event); scrollInto("skills")}}>Skills</MenuItem>
        <MenuItem onClick={(event) => {handleClose(event); scrollInto("projects")}}>Projects</MenuItem>
        <MenuItem onClick={(event) => {handleClose(event); scrollInto("contact")}}>Contact</MenuItem>
      </Menu>
    </Box>
    <Stack
     direction="row"
     component="div"
     alignContent="center"
     spacing="1vw" 
     px="1vw"
     sx={{display: {xs: "none", sm: "block"}}}>
      <Link className="text-xl" href="#career">Career</Link>
      <Link className="text-xl" href="#skills">Skills</Link>
      <Link className="text-xl" href="#projects">Projects</Link>
      <Link className="text-xl" href="#contact">Contact</Link>
    </Stack>
    </>
  );
}

export default NavigationMenu;
