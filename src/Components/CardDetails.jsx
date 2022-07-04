import React from "react";

const CardDetails = ({ card }) => {
	console.log(card);
	return (
		<div className="single-card-info">
			<div className="single-card-title">{card.name}</div>
			<div className="single-card-phone">{card.phone}</div>

			{/* <div className="single-card-company">{card.company.name}</div>
			<div className="single-card-address">{card.address.street}</div> */}
		</div>
	);
};

export default CardDetails;
