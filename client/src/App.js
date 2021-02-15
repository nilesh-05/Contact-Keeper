import React, { Fragment } from 'react'
import './App.css';
import Navbar from './Components/Layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
const App = () => {
	return (
		<Router>
			<Fragment >
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
}

export default App;
