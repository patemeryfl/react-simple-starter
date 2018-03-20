import React, { Fragment } from 'react';
import { Consumer } from '../containers/Examples';

const Comment = () => (
  <Consumer>
    {({ state, actions }) => (
      <Fragment>
        <button onClick={actions.getUser}>Get GitHub</button>
        <span>{state.user}</span>
      </Fragment>
    )}
  </Consumer>
);

export default Comment;
