import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2.5,
  overrideThemeStyles: ({ rhythm } /* , options, styles */) => ({
    'h2,h3,h4': {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1.5),
    },
  }),
  headerFontFamily: [
    // 'Source Sans Pro',
    // 'PT Sans',
    // 'Roboto',
    // 'Merriweather',
    'Poppins',
    'Open Sans',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Open Sans', 'Arial', 'sans-serif'],
  // Google FOnts are disabled as they are now self hosted in src/fonts
  // googleFonts: [
  //   { name: 'Merriweather', styles: ['400', '500', '700'] },
  //   {
  //     name: 'Poppins',
  //     styles: ['400', '500', '600'],
  //   },
  //   // { name: 'PT Sans', styles: ['700'] },
  //   // {
  //   //   name: 'Roboto',
  //   //   styles: ['700'],
  //   // },
  //   // {
  //   //   name: 'Roboto Condensed',
  //   //   styles: ['700'],
  //   // },
  //   // {
  //   //   name: 'Source Sans Pro',
  //   //   styles: ['700'],
  //   // },
  //   {
  //     name: 'Open Sans',
  //     styles: ['400&display=swap'],
  //   },
  // ],
});

export default typography;
