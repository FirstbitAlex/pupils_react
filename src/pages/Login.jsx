import React, { useContext } from "react";
import MyButton from "../Components/UI/button/MyButton";
import MyInput from "../Components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const login = (event) => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem("auth", "true");
	};

	return (
		<div onSubmit={login}>
			<h1>Sign In</h1>
			<form>
				<MyInput type="text" placeholder="Login" />
				<MyInput type="password" placeholder="Password" />
				<MyButton>Sign In</MyButton>
			</form>
		</div>
	);
};

export default Login;
