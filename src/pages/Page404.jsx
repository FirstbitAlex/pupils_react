import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			NOT FOUND (404){" "}
			<Link className="link-item" to="/">
				Home
			</Link>
		</div>
	);
};

export default Page404;
