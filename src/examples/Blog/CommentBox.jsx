import React, { Fragment } from 'react';
import { Consumer } from './Blog';

const CommentBox = (id) => (
  <Consumer>
    {({ state, actions }) => {
      return (
        <Fragment>
          <button onClick={actions.showCommentBox}>{state.showCommentBox ? 'Hide' : 'Reply'}</button>
          { state.showCommentBox ?
          <div className="CommentBox">
            <input placeholder={state.commentInput} onChange={actions.handleInput} /><br />
            <button onClick={() => actions.insertNewComment(id)}>Submit</button>
          </div> : <Fragment /> }
        </Fragment>
      )
    }}
  </Consumer>
);
export default CommentBox;
