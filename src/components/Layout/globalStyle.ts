import styled, { createGlobalStyle , css } from 'styled-components';
import normalize from './normalize.css';

const reset = css`
  ${normalize}
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
  }

  label[for],
  [role=button] {
    cursor: pointer;
  }

  img {
    text-indent: -100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Lyon-Text, Georgia, KaiTi, STKaiTi, 华文楷体, KaiTi_GB2312, 楷体_GB2312, serif;
  }
`;

export default GlobalStyle;
