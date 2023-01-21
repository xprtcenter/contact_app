import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Search from "./pages/Search";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<ToastContainer position="top-center" />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/add" component={AddEdit} />
					<Route path="/update/:id" component={AddEdit} />
					<Route path="/view/:id" component={View} />
					<Route path="/about" component={About} />
					<Route path="/search" component={Search} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
