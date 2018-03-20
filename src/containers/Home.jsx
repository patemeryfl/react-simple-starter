import React, { createContext } from 'react';
import hljs from 'highlight.js';
import { Link } from 'react-router-dom';
import { Flex, CodeBlock } from '../components';

const { Provider, Consumer } = createContext();

class Home extends React.Component {
  state = {

  }
  componentWillMount() {
    hljs.initHighlightingOnLoad();
  }
  actions = {

  }
  render() {
    return (
      <div className="home">
        <header>
          <h1>React Simple Starter</h1>
          <p>All the latest React features in one.</p>
          <button><Link to="/examples" href="/examples">Learn More</Link></button>
          <button><a href="https://www.github.com/patemeryfl/blob/master/docs/index.md">Read The Docs</a></button>
        </header>
        <section>
          <Flex type="row">
            <div>
              <h2>Easy to Get Started</h2>
              <ul>
                <li>
                  <CodeBlock lang="js">
                    <code>
                      {`export default class TodoList extends Component {
                          state = { todos: [], text: '' };
                          setText = e => {
                          this.setState({ text: e.target.value });
                      };`}
                    </code>
                  </CodeBlock>
                </li>
                <li><pre className="highlight"><code>cd react-simple starter</code></pre></li>
                <li><pre><code>npm install</code></pre></li>
              </ul>
            </div>
            <div>
              <h2>Latest Features</h2>
              <p>Text here</p>
              <Provider />
            </div>
            <div>
              <h2>Custom Configuration</h2>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </Flex>
        </section>
      </div>
    );
  }
}

export { Home, Consumer };
