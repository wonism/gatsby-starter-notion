import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Title from './Common/Title';

interface Edge {
  node: {
    id: string;
    internal: {
      description: string;
    }
  }
}

interface Props {
  edges: Edge[];
}

const description = 'Gatsby starter for notion';

const Home = ({ edges }: Props) => (
  <section>
    <Title title="List of contents" />
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </Helmet>
    <ul css="padding: 0; font-size: 24px; list-style: none;">
      {edges.map(({ node: { id, internal: { description: title } } }) => (
        <li key={id} css="& + & { margin-top: 8px; }">
          <Link to={`/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Home;
