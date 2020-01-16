import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => (
  <>
    <Helmet>
      <title>
        {title}
      </title>
    </Helmet>
    <h1 css="font-size: 32px;">
      {title}
    </h1>
  </>
);

export default Title;
