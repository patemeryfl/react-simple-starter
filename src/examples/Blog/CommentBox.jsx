import React, { Fragment } from 'react';
import { Consumer } from './Blog';

const CommentBox = id => (
  <Consumer>
    {({ state, actions }) => (
      <div className="CommentBox">
        <input placeholder="Name" name="userName" onChange={actions.handleInput} /><br />
        <input placeholder="Insert a new comment" name="commentBody" onChange={actions.handleInput} /><br />
        <button onClick={() => actions.insertNewComment(id)}>Submit</button>
      </div>
      )}
  </Consumer>
);
export default CommentBox;
