import { type ReactNode } from 'react';
import Box from '@mui/material/Box';

export default function Section(props: { children: ReactNode, id: string }) {
  const { children, id } = props;
  return (
    <Box component="section" id={id} sx={{ px: "10%", py: {xs: "4vh", sm: "3em"} }}>
      {children}
    </Box>
  );
}
