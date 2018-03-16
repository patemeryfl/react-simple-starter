import React, { createContext } from 'react';
import Post from '../components/Post';

const { Provider, Consumer } = createContext();

class Blog extends React.Component {

  state = {
    user: null,
  }
  actions = {
    getUser: async () => {
      const response = await fetch('https://api.github.com/users/patemeryfl');
      const body = await response.json();
      return this.setState({ user: body.login })
    },
  }

  render() {
    return (
      <div className="blog">
        <Provider value={{ state: this.state, actions: this.actions }} >
          <Post />
        </Provider>
      </div>
    );
  }
}

export { Blog, Consumer };
