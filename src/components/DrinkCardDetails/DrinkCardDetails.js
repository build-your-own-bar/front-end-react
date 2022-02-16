import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./DrinkCardDetails.css";

function DrinkCardDetails(props) {
	const [drink, setDrink] = useState(null);
	const { id } = useParams();
	const getDrinkDetail = async () => {
		try {
			const res = await fetch(`https://buildyobar.herokuapp.com/drinks/${id}`);
			const data = await res.json();
			console.log(data);
			if (res.status === 200) {
				setDrink(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getDrinkDetail();
	}, []);

	function handleImageError(event) {
		event.currentTarget.src = "https://i.imgur.com/JNKyLlj.jpg";
	}

	if (!drink) {
		return <p>Loading Drink...</p>;
	}

	return (
		<>
			<div className="details-container">
				<img
					src={drink.photo}
					alt={drink.name}
					className="info-drink"
					onError={handleImageError}
				/>
				<div className="details">
					<h2 className="text-area">Name: {drink.name}</h2>
					<h3 className="text-area">Ice: {drink.ice}</h3>
					<h4 className="text-area">Spirit: {drink.spirit}</h4>
					<h4 className="text-area">Liqueur: {drink.liqueur}</h4>
					<h4 className="text-area">Juice: {drink.juice}</h4>
					<h4 className="text-area">Garnish: {drink.garnish}</h4>
					<h4 className="text-area">Citrus: {drink.citrus}</h4>
					<h4 className="text-area">Soda: {drink.soda}</h4>
					<h4 className="text-area">
						Special Request: {drink.special_request}
					</h4>
				</div>
			</div>
			<div className="details-container">
				<div>
					<h3 className="comment-title">Comments</h3>
					{drink.comments.map((comment) => {
						return (
							<div key={comment.id} className="comment-container">
								<h3>{comment.title}</h3>
								<h4>{comment.owner}</h4>
								<p>{comment.body}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default DrinkCardDetails;
