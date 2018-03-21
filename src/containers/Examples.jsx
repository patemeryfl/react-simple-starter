import React, { createContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Post, SideNav } from '../components';

const { Provider, Consumer } = createContext();

class Examples extends React.Component {
  state = {
    user: null,
    currentExample: 'Blog',
    examples: [
      'Blog',
      'Async',
      'Navigation',
    ],
  }
  actions = {
    getUser: async () => {
      const response = await fetch('https://api.github.com/users/patemeryfl');
      const body = await response.json();
      return this.setState({ user: body.login });
    },
    handleNavigation: (currentExample) => {
      this.setState({ currentExample });
    },
  }

  render() {
    return (
      <div className="examples">
        <Provider value={{ state: this.state, actions: this.actions }} >
          <aside>
            <h2>Examples</h2>
            <SideNav items={this.state.examples} />
          </aside>
          <article>
            <ReactMarkdown source="# content" />
          </article>
        </Provider>
      </div>
    );
  }
}

export { Examples, Consumer };
