import React from "react";

const CardComments = ({ comments }) => {
	console.log(comments);
	return (
		<div className="card-comments-wrap">
			{comments.map((comm) => (
				<div className="comment-item-wrap" id={comm.id}>
					<div className="card-comment-name">{comm.name}</div>
					<hr />
					<div className="card-comment-email">{comm.email}</div>
					<hr />
					<div className="card-comment-body">{comm.body}</div>
				</div>
			))}
		</div>
	);
};

export default CardComments;
