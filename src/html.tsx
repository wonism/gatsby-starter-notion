import React, { Component } from 'react';

const title = 'Gatsby Starter Notion';
const author = '@wonism';
const keywords = [
  'Gatsby',
  'Notion',
  'Blog',
].join(', ');

export default class HTML extends Component<any> {
  public render() {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      body,
      postBodyComponents,
    } = this.props;

    return (
      <html {...htmlAttributes} lang="ko">
        <head>
          {headComponents}
          <title>
            {title}
          </title>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="Access-Control-Allow-Origin" content="*" />
          <meta httpEquiv="Access-Control-Allow-Headers" content="*" />
          <meta httpEquiv="Access-Control-Expose-Headers" content="*" />
          <meta httpEquiv="Access-Control-Allow-Credentials" content="true" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            id="viewport"
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
          />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <meta property="og:site_name" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
        </head>
        <body {...bodyAttributes} className="hidden">
          {preBodyComponents}
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}
