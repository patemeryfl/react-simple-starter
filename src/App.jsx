import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About } from './containers';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Header />
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Footer />
            </Router>
        )
    }
}

export default hot(module)(App);