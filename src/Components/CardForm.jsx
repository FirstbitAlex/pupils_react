import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const CardForm = function ({ create }) {
	const [card, setCard] = useState({
		img: "./img/01.jpg",
		name: "",
		position: "",
	});

	const addNewCard = (e) => {
		e.preventDefault();
		// setCards([...cards, { ...card, id: Date.now() }])

		const newCard = {
			...card,
			id: Date.now(),
		};

		create(newCard);

		setCard({
			img: "./img/01.jpg",
			name: "",
			position: "",
		});
	};
	return (
		<form className="card-list">
			<MyInput
				value={card.name}
				onChange={(e) => setCard({ ...card, name: e.target.value })}
				type="text"
				placeholder="Name"
			/>

			<MyInput
				value={card.position}
				onChange={(e) => setCard({ ...card, position: e.target.value })}
				type="text"
				placeholder="Position"
			/>

			<MyButton onClick={addNewCard}>Save</MyButton>
		</form>
	);
};
export default CardForm;
