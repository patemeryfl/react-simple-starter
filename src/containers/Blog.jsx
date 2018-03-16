import React from 'react';
import Post from '../components/Post';
import store from '../store/actions';

const { Provider, Consumer } = React.createContext();

const PostContext = () => (
  <Consumer>
    {({ state, actions }) => (
      <Post />
    )}
  </Consumer>
);

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    const { state, actions } = store;
    return (
      <div className="blog">
        <p>{ this.state.user }</p>
        <Provider value={{ state, actions }} >
          <PostContext />
        </Provider>
      </div>
    );
  }
}

export default Blog;
