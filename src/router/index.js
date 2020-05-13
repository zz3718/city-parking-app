import React from 'react'
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Footer from '@/components/footer/footer'
// const Footer = asyncComponent(() => import("@/components/footer/footer"))
import Home from '@/pages/Home/home'
import Parking from '@/pages/Parking/parking'
import Navigation from '@/pages/Navigation/navigation'
import Person from '@/pages/Person/person'
import NotFount from '@/pages/NotFount/notFount'
import Login from '@/pages/Login/login'
import Register from '@/pages/Register/register'

export default class RouterConfig extends React.Component {
	render () {
		return (
			<Router>
				<Switch>
				{/* <Route path="/" component={Home} exact /> */}
				{/* <Route exact path="/home">
					<Home />
				</Route> */}
				<Route exact path="/home" component={ Home }/>
				<Route exact path="/parking" component={ Parking }/>
				<Route exact path="/navigation" component={ Navigation }/>
				<Route exact path="/person" component={ Person }/>
				<Route exact path="/login" component={ Login }/>
				<Route exact path="/register" component={ Register }/>
				<Redirect path="/" to="/home" />
				<Route component={NotFount}/>
				</Switch>
				<Footer/>
			</Router>
		)
	}
}
