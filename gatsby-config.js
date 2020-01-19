const isProduction = process.env.NODE_ENV === 'production';

const siteQuery = `
  site {
    siteMetadata {
      siteUrl
    }
  }
`;
const notionQuery = `
  allSitePage: allNotionContent (filter: { contentType: { eq: "NotionContent" } }) {
    edges {
      node {
        id
        # for avoiding error with gatsby-plugin-sitemap
        path: id
        internal {
          description
          content
          type
        }
      }
    }
  }
`;

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
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-80620216-2',
    },
  },
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      query: `
        {
          ${siteQuery}
          ${notionQuery}
        }
      `,
      serialize: ({ site, allSitePage }) => {
        return allSitePage.edges.map(edge => {
          return {
            url: site.siteMetadata.siteUrl + edge.node.id,
            changefreq: 'daily',
            priority: 0.7,
          }
        });
      },
    },
  },
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
        {
          ${siteQuery}
          ${notionQuery}
        }
      `,
      exclude: [],
      feeds: [
        {
          serialize: ({ query: { site, allSitePage } }) => {
            return allSitePage.edges.map((edge) => {
                return Object.assign({}, {
                  title: edge.node.internal.description,
                  url: site.siteMetadata.siteUrl + edge.node.id,
                  guid: site.siteMetadata.siteUrl + edge.node.id,
                  custom_elements: [{ "content:encoded": edge.node.internal.content.replace(/<\/?[^>]+(>|$)/g, '') }],
                });
              });
          },
          query: `
            {
              ${notionQuery}
            }
          `,
          title: 'Gatsby Starter Notion\'s RSS Feed',
          output: '/rss.xml',
        },
      ],
    },
  },
].filter(plugin => plugin != null);

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Notion',
    description: 'Gatsby starter for notion.',
    author: '@wonism',
    siteUrl: 'https://gatsby-starter-notion.netlify.com/',
  },
  plugins,
};
