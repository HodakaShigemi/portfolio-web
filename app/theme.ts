'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#f6f6f0',
      main: '#eeecd4',
      dark: '#827081',
      contrastText: '#000',
    },
    secondary: {
      light: '#81cabb',
      main: '#2ca58d',
      dark: '#0c886e',
      contrastText: '#000',
    },
  },
  typography: {
    // fontFamily: 'Inter,Roboto,sans-serif',
    h2: {},
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#2ca58d',
          },
          '& label': {
            color: '#0c886e',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#f6f6f0',
        },
      },
    },
  }
}
);

export default theme;
