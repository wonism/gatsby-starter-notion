import React, { Children, cloneElement } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import GithubCorner from 'react-github-corners';
import 'react-github-corners/dist/GithubCorner.css';

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

  return (
    <>
      <GlobalStyle />
      <GithubCorner
        url="https://github.com/wonism/gatsby-starter-notion"
        backgroundColor="orange"
        target="_blank"
      />
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
