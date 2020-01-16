import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav
    css={`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      width: 100%;
      line-height: 1.5;
      background-color: #fff;
      font-size: 48px;
      z-index: 999;
    `}
  >
    <div css="margin: auto; max-width: 960px;">
      <Link to="/">
        🏠
      </Link>
    </div>
  </nav>
);

export default Nav;
