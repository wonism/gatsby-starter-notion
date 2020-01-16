const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  'gatsby-plugin-typescript',
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-force-trailing-slashes',
  isProduction ? 'gatsby-plugin-webpack-bundle-analyzer' : null,
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-notion-contents',
    options: {
      token: process.env.NOTION_TOKEN,
    },
  },
].filter(plugin => plugin != null);

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Notion',
    description: 'Gatsby starter for notion.',
    author: '@wonism',
  },
  plugins,
};
