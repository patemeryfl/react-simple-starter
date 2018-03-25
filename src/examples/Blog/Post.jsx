import React from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';

const Post = ({ post }) => (
  <div className="Post">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <CommentBox id={post.id} />
    <h3>Comments</h3>
    {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
  </div>
);
export default Post;
