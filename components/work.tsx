import * as React from 'react';

import Image from 'next/image';

import Grid from '@mui/material/Grid'; 
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';


type WorkProps = {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
};

const Work = (props: WorkProps) => {
  const { imageSrc, imageAlt } = props;
  return (
    <Stack direction="column" alignItems="center" justifyContent="flex-start" spacing={2} px="2.5em">
      {/* <Image src={imageSrc} alt={imageAlt}  width={100} height={100} className="work-image" /> */}
      <Avatar alt={imageAlt} src={imageSrc} sx={{ width: {xs:70, sm:120}, height: {xs: 70, sm:120}, backgroundColor: "primary.light"}} />
      {props.children}
    </Stack>
  );
};

export default Work;
