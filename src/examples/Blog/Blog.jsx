import React, { createContext } from 'react';
import Post from './Post';

const { Provider, Consumer } = createContext();

class Blog extends React.Component {
  state = {
    blogs: [
      {
        id: 0,
        title: 'How To Use Context',
        body: `I just read this great tutorial on Context in this new 
               React starter called react-simple-starter. Its so great!`,
        comments: [
          {
            id: 'whio3o',
            parentId: 0,
            user: 'Anonymous',
            body: 'So helpful!',
          },
        ],
      },
      {
        id: 1,
        title: 'First Blog Post',
        body: 'Hello World',
        comments: [
          {
            id: 'sgh2',
            parentId: 1,
            user: 'Pat Emery',
            body: 'Great Post',
          },
          {
            id: 'dwhu2',
            parentId: 1,
            user: 'John Smith',
            body: '',
          },
        ],
      },
    ],
  }
  actions = {
    insertNewComment: ({ id }) => {
      const newComment = {
        id: Math.random(),
        parentId: id,
        user: this.state.userName,
        body: this.state.commentBody,
      };
      const blog = this.state.blogs.find(post => post.id === id);
      blog.comments.push(newComment);
      this.setState(prevState => ([...prevState, ...prevState.blogs]));
    },
    handleInput: (event) => {
      this.setState({ [event.target.name]: event.target.value });
    },
  }
  render() {
    return (
      <Provider value={{ state: this.state, actions: this.actions }}>
        <div className="BlogExample">
          {this.state.blogs.map(post => <Post key={post.id} post={post} />)}
        </div>
      </Provider>
    );
  }
}

export { Blog, Consumer };
