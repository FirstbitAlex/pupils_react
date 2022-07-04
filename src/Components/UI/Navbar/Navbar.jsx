import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link className="link-item" to="/">
				Home
			</Link>
			<Link className="link-item" to="/about">
				About
			</Link>
			<Link className="link-item" to="/posts">
				Posts
			</Link>
		</div>
	);
};

export default Navbar;
