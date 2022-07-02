import React from "react";
import "../css/card.css";
import CardItem from "./CardItem";

const CardList = function ({ cards, remove }) {
	if (!cards.length) {
		return <div className="no-post-in-list">No posts in list</div>;
	}

	return (
		<div className="card-wrap">
			{cards.map((card, index) => (
				<CardItem
					remove={remove}
					number={index + 1}
					card={card}
					key={card.id}
				/>
			))}
		</div>
	);
};

export default CardList;
