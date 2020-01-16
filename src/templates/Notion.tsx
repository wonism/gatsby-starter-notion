import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const visuallyHidden = `
  position: absolute;
  padding: 0;
  width: 1px;
  height: 1px;
  border: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;

const Notion = ({
  data: {
    notion: {
      id,
      internal: {
        description: title,
        content,
      },
    },
  },
  data,
  location: { origin, pathname },
}) => {
  useEffect(() => {
    global.disqus_config = function disqusCallback() {
      this.page.identifier = id;
      this.page.url = origin + pathname;
      this.page.title = title;
    };
  }, [title, id, origin, pathname]);

  return (
    <Layout>
      <h1 css={visuallyHidden}>
        {title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div id="disqus_thread" />
      <noscript>
        Please enable JavaScript to view the
        &nbsp;
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </Layout>
  );
};

export default Notion;

export const pageQuery = graphql`
  query NotionByPath($id: String!) {
    notion: notionContent (id: { eq: $id }) {
      id
      internal {
        content
        description
      }
    }
  }
`;
