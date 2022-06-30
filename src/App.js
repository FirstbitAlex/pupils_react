import React, { useState } from 'react';
import "./css/normalize.css"
import "./css/base.css"
import CardForm from './Components/CardForm';
import CardList from './Components/CardList';


function App() {

	const [cards, setCards] = useState([
		{ id: 1, img: "./img/01.jpg", name: "Alex1", position: "IT1" },
		{ id: 2, img: "./img/02.jpg", name: "Alex2", position: "IT2" },
		{ id: 3, img: "./img/03.jpg", name: "Alex3", position: "IT3" },
	])

	const createCard = (newCard) => {
		setCards([...cards, newCard])
	}

	const removeCard = (card) => {
		setCards(cards.filter(c => c.id !== card.id))
	}

	return (
		<div className="App">
			<div className="base-wrap">
				{/* <Counter /> */}

				<h1 className="page-title">Card List</h1>

				<CardForm create={createCard} />
				<CardList remove={removeCard} cards={cards} />
			</div>
		</div>
	);
}
export default App;