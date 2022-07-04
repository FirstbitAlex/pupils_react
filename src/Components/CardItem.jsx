import React from "react";
import "../css/card.css";
import MyButton from "./UI/button/MyButton";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CardItem = function (props) {
	// const router = useNavigate();
	return (
		<div className="card-item">
			<div className="card-inner-wrap">
				{/* <div className="card-id">{props.number}</div> */}
				{/* <img className="card-img" src="{props.card.img}" alt="" /> */}

				<div className="card-name">
					{props.card.id} {props.card.name}
				</div>
				<div className="card-spirit">{props.card.username}</div>
				<div className="card-email">{props.card.email}</div>
				<div className="card-email">{props.card.position}</div>
			</div>

			<Link className="link-card-detail" to={"/post/" + props.card.id}>
				Show details
			</Link>

			<MyButton onClick={() => props.remove(props.card)}>
				Delete Card
			</MyButton>
		</div>
	);
};

export default CardItem;
