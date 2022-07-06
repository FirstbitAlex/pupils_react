import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem("auth");
	};

	return (
		<div>
			{isAuth ? (
				<div className="navbar">
					<div className="left-wrap">
						<NavLink className="link-item" to="/">
							Home
						</NavLink>
						<NavLink className="link-item" to="/about">
							About
						</NavLink>
						<NavLink className="link-item" to="/cards">
							Cards
						</NavLink>
					</div>
					<div className="right-wrap">
						<MyButton onClick={logout}>Log Out</MyButton>
					</div>
				</div>
			) : (
				<div className="navbar">
					<div className="right-wrap">
						<NavLink className="link-item" to="login">
							Login
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
