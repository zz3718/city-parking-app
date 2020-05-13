import React from 'react'
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Footer from '../components/footer/footer'
import Home from '../pages/Home/home'
import Parking from '../pages/Parking/parking'
import Navigation from '../pages/Navigation/navigation'
import Person from '../pages/Person/person'
import NotFount from '../pages/NotFount/notFount'
import Login from '../pages/Login/login'
import Register from '../pages/Register/register'

export default class RouterConfig extends React.Component {
	render () {
		return (
			<Router>
				<Switch>
				{/* <Route path="/" component={Home} exact /> */}
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact strict path="/parking">
					<Parking />
				</Route>
				<Route exact strict path="/navigation">
					<Navigation />
				</Route>
				<Route exact strict path="/person">
					<Person />
				</Route>
				<Route exact strict path="/login">
					<Login />
				</Route>
				<Route exact strict path="/register">
					<Register />
				</Route>
				<Redirect path="/" to="/home" />
				<Route component={NotFount}/>
				</Switch>
				<Footer/>
			</Router>
		)
	}
}
