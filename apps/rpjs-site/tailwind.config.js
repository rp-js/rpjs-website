const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fcdc00',
        secondary: '#ec008c',
      },
      gridTemplateColumns: {
        speaker: 'repeat(auto-fit, minmax(0, 20%))',
      },
    },
  },
  plugins: [],
};
