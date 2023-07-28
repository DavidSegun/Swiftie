import {extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      400: '#5E2BFF',
    },

    secondary: {
      400: '#00C67E',
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});

export default theme;
