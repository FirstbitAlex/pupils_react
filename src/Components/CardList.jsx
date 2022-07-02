import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../css/card.css";
import CardItem from "./CardItem";

const CardList = function ({ cards, remove }) {
	if (!cards.length) {
		return <div className="no-card-in-list">No cards in list</div>;
	}

	return (
		<div className="card-wrap">
			<TransitionGroup component={null}>
				{cards.map((card, index) => (
					<CSSTransition
						key={card.id}
						timeout={500}
						classNames="card"
					>
						<CardItem
							remove={remove}
							number={index + 1}
							card={card}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default CardList;
