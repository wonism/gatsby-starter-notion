import React, { useEffect, Children, cloneElement } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Nav from './Nav';
import Footer from './Footer';
import GlobalStyle from './globalStyle';

interface Props {
  children: React.ReactNode;
  main?: boolean;
}

const Layout = ({ children, main = false }: Props) => {
  const { allNotionContent: { edges } } = useStaticQuery(graphql`
    query NotionContents {
      allNotionContent (filter: { contentType: { eq: "NotionContent" } }) {
        edges {
          node {
            id
            internal {
              description
            }
          }
        }
      }
    }
  `);

  const childrenWithProps = Children.map(
    children,
    (child) => {
      if (!main) {
        return child;
      }

      return cloneElement(child, { edges })
    }
  );

  useEffect(() => {
    const d = document;

    if (!d.getElementById('disqus-sdk')) {
      const s = d.createElement('script');

      s.src = 'https://jaewonism.disqus.com/embed.js';
      s.setAttribute('data-timestamp', Date.now());
      d.body.appendChild(s);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <div
        css={`
          margin: 0 auto;
          padding: 0 1.0875rem 1.45rem;
          max-width: 960px;
        `}
      >
        <Nav />
        <main css="padding: 100px 0 24px;">
          {childrenWithProps}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
