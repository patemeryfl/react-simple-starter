import React, { createContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Post, SideNav } from '../components';

const { Provider, Consumer } = createContext();

const Blog = `
# Blog Tutorial

One of the most common websites are blogs or will have a comments section. You often
will have a series of html components like this:

### Container

### Components

* **Post**

* **Comment**

### Working Example


`;

class Features extends React.Component {
  state = {
    user: null,
    examples: [
      'Blog',
      'Async',
      'Navigation',
    ],
    content: 'Blog',
  }
  componentWillMount() {
    // this.actions.getMarkdown(this.state.content);
  }
  actions = {
    getUser: async () => {
      const response = await fetch('https://api.github.com/users/patemeryfl');
      const body = await response.json();
      return this.setState({ user: body.login });
    },
    getMarkdown: async (example) => {
      const response = await fetch(`
        https://raw.githubusercontent.com/patemeryfl/react-simple-starter/master/src/assets/docs/examples/${example}.md
      `);
      const body = await response.text();
      return this.setState({ content: body });
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
            <ReactMarkdown source={Blog} />
          </article>
        </Provider>
      </div>
    );
  }
}

export { Features, Consumer };
