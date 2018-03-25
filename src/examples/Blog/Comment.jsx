import React, { Fragment } from 'react';
import CommentBox from './CommentBox';

const Comment = ({ comment }) => (
  <Fragment>
    <div className="Comment">
      <strong>{comment.user}</strong>
      {comment.body}
    </div>
  </Fragment>
);

export default Comment;

