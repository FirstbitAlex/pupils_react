import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardService from "../API/CardService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../Components/UI/Loader/Loader";
import CardDetails from "../Components/CardDetails";
import CardComments from "../Components/CardComments";

const CardSingle = () => {
	const params = useParams();
	const [card, setCard] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchCardDetails, cardLoading] = useFetching(async (id) => {
		const response = await CardService.getCardDetails(id);
		setCard(response.data);
	});

	const [fetchCardComments, commLoading] = useFetching(async (id, limit) => {
		const response = await CardService.getCardComments(id, limit);
		setComments(response.data);
	});

	useEffect(() => {
		fetchCardDetails(params.id);
		fetchCardComments(params.id, 2);
	}, []);

	return (
		<div className="single-card-wrap">
			{cardLoading ? <Loader /> : <CardDetails card={card} />}
			<h1>Comments:</h1>
			{commLoading ? <Loader /> : <CardComments comments={comments} />}
		</div>
	);
};

export default CardSingle;
