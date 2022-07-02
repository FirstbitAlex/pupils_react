import React, { useState } from 'react';
import "./css/normalize.css"
import "./css/base.css"
import CardForm from './Components/CardForm';
import CardList from './Components/CardList';
import CardFilter from './Components/CardFilter';
import MyModal from './Components/UI/MyModal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { useCards } from './hooks/useCards';

function App() {

	const [cards, setCards] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedCards = useCards(cards, filter.sort, filter.query)

	const createCard = (newCard) => {
		setCards([...cards, newCard])
		setModal(false)
	}

	const removeCard = (card) => {
		setCards(cards.filter(c => c.id !== card.id))
	}

	return (
		<div className="App">
			<div className="base-wrap">

				<MyButton style={{ marginTop: '20px' }} onClick={() => setModal(true)}>
					Create Card
				</MyButton>

				<MyModal visible={modal} setVisible={setModal}>
					<CardForm create={createCard} />
				</MyModal>

				<h1 className="page-title">Card List</h1>

				<hr style={{ margin: '15px 0' }} />

				<CardFilter
					filter={filter}
					setFilter={setFilter}
				/>

				<hr style={{ margin: '15px 0' }} />

				<CardList remove={removeCard} cards={sortedAndSearchedCards} />

			</div>
		</div >
	);
}
export default App;