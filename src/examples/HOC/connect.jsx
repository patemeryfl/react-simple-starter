import React, { createContext } from 'react';

const { Provider } = createContext();

const state = {
  loggedIn: false,
};
const actions = {
  logIn: () => ([...state, { loggedIn: true }]),
  logOut: () => ([...state, { loggedIn: false }]),
};

export default Component => (
  <Provider values={{ state, actions }}>
    <Component context={{ state, actions }} />
  </Provider>
);
