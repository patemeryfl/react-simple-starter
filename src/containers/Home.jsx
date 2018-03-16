import React, { Fragment, createContext } from 'react';

const { Provider, Consumer } = createContext();

class Home extends React.Component {
  state = {

  }
  actions = {

  }
  render() {
    return (
      <div className="home">
        <Provider>
          Home Works
        </Provider>
      </div>
    );
  }
}

export { Home, Consumer };
