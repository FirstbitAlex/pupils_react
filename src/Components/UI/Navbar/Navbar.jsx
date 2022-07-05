import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem("auth");
	};

	return (
		<div className="navbar">
			{isAuth ? (
				<div>
					<Link className="link-item" to="/">
						Home
					</Link>
					<Link className="link-item" to="/about">
						About
					</Link>
					<Link className="link-item" to="/cards">
						Cards
					</Link>
					<MyButton onClick={logout}>Log Out</MyButton>
				</div>
			) : (
				<div>
					<Link className="link-item" to="login">
						Login
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
