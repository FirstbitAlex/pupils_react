import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const CardForm = function ({ create }) {
	const [card, setCard] = useState({
		name: "",
		username: "",
		email: "",
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
			name: "",
			username: "",
			email: "",
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
				value={card.username}
				onChange={(e) => setCard({ ...card, username: e.target.value })}
				type="text"
				placeholder="Spirit Name"
			/>

			<MyInput
				value={card.email}
				onChange={(e) => setCard({ ...card, email: e.target.value })}
				type="text"
				placeholder="Email"
			/>

			<MyButton onClick={addNewCard}>Add Card</MyButton>
		</form>
	);
};
export default CardForm;
