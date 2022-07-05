import About from "../pages/About";
import Cards from "../pages/Cards";
import CardSingle from "../pages/CardSingle";
import Page404 from "../pages/Page404";
import Login from "../pages/Login";

export const privateRoutes = [
	{ path: 'about', element: About },
	{ path: 'cartds', element: Cards },
	{ path: 'card/:id', element: CardSingle },
	{ path: '*', element: Page404 },
]

export const publicRoutes = [
	{ path: 'login', component: Login },
]