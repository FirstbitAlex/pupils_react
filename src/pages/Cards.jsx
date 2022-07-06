import React, { useEffect, useRef, useState } from "react";
import "../css/normalize.css";
import "../css/base.css";
import CardForm from "../Components/CardForm";
import CardList from "../Components/CardList";
import CardFilter from "../Components/CardFilter";
import MyModal from "../Components/UI/MyModal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import { useCards } from "../hooks/useCards";
import CardService from "../API/CardService";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../Components/UI/Pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../Components/UI/select/MySelect";

function Cards() {
	const [cards, setCards] = useState([]);
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedCards = useCards(cards, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(3);
	const [page, setPage] = useState(1);
	const lastElement = useRef();

	const [fetchCards, isCardsLoading, cardError] = useFetching(
		async (limit, page) => {
			const response = await CardService.getAll(limit, page);
			setCards([...cards, ...response.data]);
			const totalCount = response.headers["x-total-count"];
			setTotalPages(getPageCount(totalCount, limit));
		}
	);

	useObserver(lastElement, page < totalPages, isCardsLoading, () => {
		setPage(page + 1);
	});

	useEffect(() => {
		fetchCards(limit, page);
	}, [page, limit]);

	const createCard = (newCard) => {
		setCards([...cards, newCard]);
		setModal(false);
	};

	const removeCard = (card) => {
		setCards(cards.filter((c) => c.id !== card.id));
	};

	const changePage = (page) => {
		setPage(page);
	};

	return (
		<div className="App">
			<div className="base-wrap">
				<MyButton
					style={{ marginTop: "20px" }}
					onClick={() => setModal(true)}
				>
					Create Card
				</MyButton>

				<MyModal visible={modal} setVisible={setModal}>
					<CardForm create={createCard} />
				</MyModal>

				<h1 className="page-title">Card List</h1>

				<hr style={{ margin: "15px 0" }} />

				<CardFilter filter={filter} setFilter={setFilter} />

				<MySelect
					value={limit}
					onChange={(value) => setLimit(value)}
					defaultValue="Count on page"
					options={[
						{ value: 2, name: "2" },
						{ value: 3, name: "3" },
						{ value: 5, name: "5" },
						{ value: -1, name: "All" },
					]}
				/>

				{cardError && (
					<div className="error-wrap">Error: ${cardError}</div>
				)}

				<hr style={{ margin: "15px 0" }} />

				{isCardsLoading && (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: 50,
						}}
					>
						<Loader />
					</div>
				)}

				<CardList remove={removeCard} cards={sortedAndSearchedCards} />

				<div
					ref={lastElement}
					style={{ height: 20, background: "red" }}
				/>
				<Pagination
					page={page}
					changePage={changePage}
					totalPages={totalPages}
				/>
			</div>
		</div>
	);
}
export default Cards;
