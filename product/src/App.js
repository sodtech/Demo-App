import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, Fragment } from 'react'
import Home from './components/home'
import Product from './components/product'
import Login from './components/login'
import Signup from './components/signup'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


  export default function BasicExample() {

	return (
	  <Router>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Demo App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
		<Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
	  <Link class="nav-link" to="/product">product</Link>      </li>
      <li class="nav-item">
	  <Link class="nav-link" to="/dashboard">Dashboard</Link>      </li>
    </ul>
    <span class="navbar-text">
      <Link class="nav-link" to="/login">login</Link>  
    </span>
	<span class="navbar-text">
      <Link class="nav-link" to="/signup">signup</Link>  
    </span>
	
  </div>
</nav>
		  <hr />
  
		  {/*
			A <Switch> looks through all its children <Route>
			elements and renders the first one whose path
			matches the current URL. Use a <Switch> any time
			you have multiple routes, but you want only one
			of them to render at a time
		  */}

<div className="auth-wrapper">
        <div className="auth-inner">
		  <Switch>
			<Route exact path="/">
			  <Home />
			</Route>
			<Route path="/product">
			  <Product />
			</Route>
			<Route path="/signup">
			  <Signup />
			</Route>
			<Route path="/login">
			  <Login />
			</Route>
		  </Switch>
		  </div>
      </div>
	  </Router>
	);
  }
  
  // You can think of these components as "pages"
  // in your app.
  
 
