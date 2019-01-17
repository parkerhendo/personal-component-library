import { createGlobalStyle } from 'styled-components';

const TiemposHeadlineBlack = '/fonts/TiemposHeadline-Black';
const TiemposHeadlineBlackItalic = '/fonts/TiemposHeadline-BlackItalic';
const TiemposHeadlineLightItalic = '/fonts/TiemposHeadline-LightItalic';
const AdelleSansRegular = '/fonts/adellesans-regular-webfont';

export default createGlobalStyle`
  body {
    @font-face {
      font-family: Tiempos Headline Black;
      src: url(${TiemposHeadlineBlack}.eot),
           url(${TiemposHeadlineBlack}.otf),
           url(${TiemposHeadlineBlack}.woff);
      font-style: regular;
      font-weight: 800;
    }
    @font-face {
      font-family: Tiempos Headline Black Italic;
      src: url(${TiemposHeadlineBlackItalic}.otf);
      font-style: italic;
      font-weight: 800;
    }
    @font-face {
      font-family: Tiempos Headline Light Italic;
      src: url(${TiemposHeadlineLightItalic}.eot),
           url(${TiemposHeadlineLightItalic}.otf),
           url(${TiemposHeadlineLightItalic}.woff);
      font-style: italic;
      font-weight: 300;
    }
    @font-face {
      font-family: Adelle Sans Regular;
      src: url(${AdelleSansRegular}.eot),
           url(${AdelleSansRegular}.ttf),
           url(${AdelleSansRegular}.woff2),
           url(${AdelleSansRegular}.woff);
      font-style: regular;
      font-weight: 400;
    }
  }
`;