import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About } from './containers';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Fragment>
                    <Header />
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Footer />
                </Fragment>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();