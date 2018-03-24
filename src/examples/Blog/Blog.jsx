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
               React starter called simple-react-starter. Its so great!`,
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
    commentInput:'Leave your comment here!',
    showCommentBox: false,
  }
  actions = {
    insertNewComment: ({id}) => { 
      let newComment = {
        id: Math.random(),
        parentId: id,
        user: null,
        body: this.state.commentInput,
      }
      let blog = this.state.blogs.find(post => { return post.id === id});
      blog.comments.push(newComment);
      this.setState(prevState => ([ ...prevState, ...prevState.blogs ]))
    },
    handleInput: (event) => {
      this.setState({ commentInput: event.target.value });
    },
    showCommentBox: () => {
      this.setState({showCommentBox: !this.state.showCommentBox})
    }
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