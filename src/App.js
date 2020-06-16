import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import routeConfig from './config/routeConfig';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<header>
					<Header/>
				</header>
				<main>
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
				</main>
				<footer>
					<Footer/>
				</footer>
			</div>
		);
	}
}

export default App;
