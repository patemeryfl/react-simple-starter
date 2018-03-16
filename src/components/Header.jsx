import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import icons from '../assets/svgs';
import Container from './Container';

const Header = () => (
  <Fragment>
    <header className="header">
      <Container>
        <div className="brand">
          <a href="https://www.github.com/patemeryfl/react-simple-starter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d={icons.social.rocket} />
            </svg>
            <span>
              Simple Starter
            </span>
          </a>
          <nav>
            <Link to="/" href="/">Home</Link>
            <Link to="/about" href="/about">About</Link>
            <Link to="/examples" href="/examples">Examples</Link>
            <a /> <a /><a />
          </nav>
        </div>
      </Container>
    </header>
  </Fragment>
);

export default Header;
