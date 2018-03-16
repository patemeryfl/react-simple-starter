import React, { createContext } from 'react';
import { Flex } from '../components';

const { Provider, Consumer } = createContext();

class Home extends React.Component {
  state = {

  }
  actions = {

  }
  render() {
    return (
      <div className="home">
        <header>
          <h1>React Simple Starter</h1>
          <p>All the latest React features in one.</p>
        </header>
        <section>
          <Flex type={'row'}>
            <div>
              <h2>Easy to Get Started</h2>
              <p>Text here</p>
            </div>
            <div>
              <h2>Latest Features</h2>
              <p>Text here</p>
              <Provider>
              </Provider>
            </div>
            <div>
              <h2>Custom Configuration</h2>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </Flex>
        </section>
      </div>
    );
  }
}

export { Home, Consumer };
