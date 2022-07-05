import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import Cards from "../pages/Cards";
import CardSingle from "../pages/CardSingle";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

const AppRouter = () => {
	const { isAuth } = useContext(AuthContext);

	return (
		<div>
			{isAuth ? (
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route
						path="about-us"
						element={<Navigate to="/about" replace />}
					/>
					<Route path="cards" element={<Cards />} />
					<Route path="card/:id" element={<CardSingle />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			) : (
				<Routes>
					<Route path="login" element={<Login />} />
					<Route
						path="*"
						element={<Navigate to="/login" replace />}
					/>
				</Routes>
			)}
		</div>
	);
};

export default AppRouter;
