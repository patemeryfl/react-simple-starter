import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Fragment>
    <header className="header">
      <nav>
        <Link to="/" href="/">Home</Link>
        <Link to="/about" href="/about">About</Link>
        <Link to="/blog" href="/blog">Blog</Link>
      </nav>
    </header>
  </Fragment>
);

export default Header;
