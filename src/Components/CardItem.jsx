import React from "react";
import "../css/card.css";
import MyButton from "./UI/button/MyButton";

const CardItem = function (props) {
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

			<MyButton onClick={() => props.remove(props.card)}>Remove</MyButton>
		</div>
	);
};

export default CardItem;
