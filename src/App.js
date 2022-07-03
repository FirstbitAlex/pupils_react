import React, { useEffect, useState } from 'react';
import "./css/normalize.css"
import "./css/base.css"
import CardForm from './Components/CardForm';
import CardList from './Components/CardList';
import CardFilter from './Components/CardFilter';
import MyModal from './Components/UI/MyModal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { useCards } from './hooks/useCards';
import CardService from './API/CardService';
import Loader from './Components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';


function App() {

	const [cards, setCards] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedCards = useCards(cards, filter.sort, filter.query)

	const [fetchCards, isCardsLoading, cardError] = useFetching(async () => {
		const cards = await CardService.getAll()
		setCards(cards)
	});

	useEffect(() => {
		fetchCards()
	}, [filter])

	const createCard = (newCard) => {
		setCards([...cards, newCard])
		setModal(false)
	}

	const removeCard = (card) => {
		setCards(cards.filter(c => c.id !== card.id))
	}

	return (
		<div className="App">
			<MyButton onClick={fetchCards}>Get</MyButton>

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

				{cardError && <div className="error-wrap">Error: ${cardError}</div>}

				<hr style={{ margin: '15px 0' }} />


				{isCardsLoading
					? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
					: <CardList remove={removeCard} cards={sortedAndSearchedCards} />
				}

			</div>
		</div >
	);
}
export default App;