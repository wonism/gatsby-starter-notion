const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const component = path.resolve('./src/templates/Notion.tsx');

    resolve(
      graphql(`
        {
          allNotionContent(limit: 10000) {
            edges {
              node {
                id
                contentType
                internal {
                  description
                  type
                }
              }
            }
          }
        }
      `).then(({ errors, data: { allNotionContent: { edges: notions } } }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        notions
          .filter(({ node: { internal: { type } } }) => type === 'NotionContent')
          .forEach(({ node: { id, contentType, internal: { description: type } } }) => {
            createPage({
              path: `/${id}`,
              component,
              context: {
                id,
                contentType,
                type,
              },
            });
          });
      })
    );
  });
};
