import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Cards from "../pages/Cards";
import CardSingle from "../pages/CardSingle";
import Page404 from "../pages/Page404";

const AppRouter = () => {
	return (
		<Routes>
			{/* <Route path="/" element={<App />} /> */}
			<Route path="about" element={<About />} />
			<Route path="posts" element={<Cards />} />
			<Route path="post/:id" element={<CardSingle />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};

export default AppRouter;
