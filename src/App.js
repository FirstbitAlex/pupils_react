// import React, { useEffect, useState } from 'react';
// import "./css/normalize.css"
// import "./css/base.css"
// import CardForm from './Components/CardForm';
// import CardList from './Components/CardList';
// import CardFilter from './Components/CardFilter';
// import MyModal from './Components/UI/MyModal/MyModal';
// import MyButton from './Components/UI/button/MyButton';
// import { useCards } from './hooks/useCards';
// import CardService from './API/CardService';
// import Loader from './Components/UI/Loader/Loader';
// import { useFetching } from './hooks/useFetching';
// import { getPageCount } from './utils/pages';
// import Pagination from './Components/UI/Pagination/Pagination';

import React from "react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./Components/UI/Navbar/Navbar"
import AppRouter from "./Components/AppRouter"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	)
}
export default App;