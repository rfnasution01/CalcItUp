import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Open Sans"',
      ].join(','),
    fontWeightBold: 700,
    fontWeightSemiBold: 600,
    fontWeightMedium: 500,
    fontWeightSmall: 400,
    fontSizeLarge: 24,
    fontSizeMedium: 20,
    fontSizeSmall: 16,
  },
  palette: {
    primary: {
      main: '#3B97CB',
      light: '#E7F5FD',
      contrastText: '#fff',
      black: '#171717',
      grey: '#C4C4C4',
      lightGrey: '#fafafa',
      delete: '#F36868',
    },
    secondary: {
      main: '#3B97CB',
      light: '#C4C4C4',
    },
    ternary: {
      main: '#0099EE',
    },
    error: {
      main: '#56E4A0',
      contrastText: '#fff',
    },
    success: {
      main: '#56E4A0',
    },
  },
});

export default theme;
