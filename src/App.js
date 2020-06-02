import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import routeConfig from './config/routeConfig';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Switch>
            {
				routeConfig.map(item => (
					<Route
						path={item.path}
						key={item.path}
						component={item.component}
						exact
					/>
				))
            }
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
