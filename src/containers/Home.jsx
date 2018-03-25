import React, { createContext } from 'react';
import Prism from 'prismjs';
import { Link } from 'react-router-dom';
import { Flex } from '../components';

const { Provider, Consumer } = createContext();

class Home extends React.Component {
  state = {

  }
  componentDidMount() { Prism.highlightAll(); }
  componentDidUpdate() { Prism.highlightAll(); }
  actions = {

  }
  render() {
    return (
      <div className="home">
        <header>
          <h1>React Simple Starter</h1>
          <p>All the latest React features in one.</p>
          <button><Link to="/features" href="/features">Learn More</Link></button>
          <button><a href="https://github.com/patemeryfl/react-simple-starter/blob/master/src/assets/docs/index.md">Read The Docs</a></button>
        </header>
        <section>
          <Flex type="row">
            <div>
              <h2>Easy to Get Started</h2>
              <pre>
                <code className="language-bash">
                  {`npm install simple-react-starter
cd react-simple starter
npm install`}
                </code>
              </pre>
            </div>
            <div>
              <h2>Latest Features</h2>
              <p>React Context [With Examples!]</p>
              <p>Async Functions</p>
              <p>Custom Webpack Configuration</p>
              <p>Recent Babel Plug-Ins</p>
              <p>SCSS Styling</p>
              <p>Strict Linting</p>
              <Provider />
            </div>
            <div>
              <h2>Examples</h2>
              <ul>
                <li>Blogs/Comments [With Context!]</li>
                <li>Async Actions</li>
                <li>Navigation Menu</li>
              </ul>
            </div>
          </Flex>
        </section>
      </div>
    );
  }
}

export { Home, Consumer };
