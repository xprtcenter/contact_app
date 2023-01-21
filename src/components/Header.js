import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
	const [activeTab, setActiveTab] = useState("Home");
	const [search, setSearch] = useState("");
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (location.pathname === "/") {
			setActiveTab("Home");
		} else if (location.pathname === "/add") {
			setActiveTab("AddContact");
		} else if (location.pathname === "/about") {
			setActiveTab("About");
		}
	}, [location]);

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/search?name=${search}`);
		setSearch("");
	};

	return (
		<div className="header">
			<p className="logo">Contact App</p>
			<div className="header-right">
				<form style={{ display: "inline" }} onSubmit={handleSubmit}>
					<input
						type="text"
						className="inputField"
						placeholder="Search Name ...."
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</form>
				<Link to="/">
					<p
						className={`${activeTab === "Home" ? "active" : ""}`}
						onClick={() => setActiveTab("Home")}
					>
						Home
					</p>
				</Link>
				<Link to="/add">
					<p
						className={`${activeTab === "AddContact" ? "active" : ""}`}
						onClick={() => setActiveTab("AddContact")}
					>
						Add Contact
					</p>
				</Link>
				<Link to="/about">
					<p
						className={`${activeTab === "About" ? "active" : ""}`}
						onClick={() => setActiveTab("About")}
					>
						About
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Header;
