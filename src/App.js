import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Router>
					<header>
						<Header/>
					</header>
					<main>
						<Main />
					</main>
					<footer>
						<Footer/>
					</footer>
				</Router>
			</div>
		);
	}
}

export default App;
