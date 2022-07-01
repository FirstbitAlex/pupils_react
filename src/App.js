import React, { useState } from 'react';
import "./css/normalize.css"
import "./css/base.css"
import CardForm from './Components/CardForm';
import CardList from './Components/CardList';
import MySelect from './Components/UI/select/MySelect';


function App() {

	const [cards, setCards] = useState([
		{ id: 1, img: "./img/01.jpg", name: "Alex1", position: "IT1" },
		{ id: 2, img: "./img/02.jpg", name: "Alex2", position: "IT2" },
		{ id: 3, img: "./img/03.jpg", name: "Alex3", position: "IT3" },
	])

	const [selectedSort, setSelectedSort] = useState('')

	const createCard = (newCard) => {
		setCards([...cards, newCard])
	}

	const removeCard = (card) => {
		setCards(cards.filter(c => c.id !== card.id))
	}

	const sortCards = (sort) => {
		setSelectedSort(sort)
		setCards([...cards].sort((a, b) => a[sort].localeCompare(b[sort])))
	}

	return (
		<div className="App">
			<div className="base-wrap">
				{/* <Counter /> */}

				<h1 className="page-title">Card List</h1>

				<CardForm create={createCard} />
				<div>
					<hr style={{ margin: '15px 0' }} />
					<MySelect
						value={selectedSort}
						onChange={sortCards}
						defaultValue="Sort by:"
						options={[
							{ value: 'name', name: 'name' },
							{ value: 'position', name: 'position' },
						]}
					/>
				</div>

				{cards.length
					? <CardList remove={removeCard} cards={cards} />
					: <div className="no-post-in-list">No posts in list</div>
				}

			</div>
		</div>
	);
}
export default App;