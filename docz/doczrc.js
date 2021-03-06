import { css } from 'docz-plugin-css';

export default {
	title: 'React Morph - Docs',
	base: '/react-morph/',
  typescript: true,
  files: './**/*.{md,markdown,mdx}',
  public: './public',
  menu: [
    { name: 'Getting Started' },
    { name: 'Styling' },
    { name: 'Api' },
  ],
  codeSandbox: false,
  plugins: [css({ preprocessor: 'postcss' })],
  themeConfig: {
    styles: {
      container: {
        width: ['100%', '100%', 1920],
        padding: ['20px', '0 40px 40px'],
      },
    },
    ordering: 'ascending',
    colors: {
      primary: '#00C0FF',
    },
  },
};
