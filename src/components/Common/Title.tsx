import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string;
  css?: string;
}

const Title = ({ title, css = 'font-size: 32px;' }: Props) => (
  <>
    <Helmet>
      <title>
        {title}
      </title>
      <meta property="og:title" content={title} />
    </Helmet>
    <h1 css={css}>
      {title}
    </h1>
  </>
);

export default Title;
