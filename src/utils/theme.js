import color from './colors';
import spacing from './spacing';
// import typography from './typography';

export default {
  ...color,
  typography: {
    size: {
      caption: 11,
      bodySmall: 14,
      bodyLarge: 16,
      section: 24,
      headline: 32,
    }
  },
  ...spacing,
};