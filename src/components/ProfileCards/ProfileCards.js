import { Link } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';
import './ProfileCards.css';

function DrinkCard({ drink }) {
	// const { drinks, setDrinks, user, setUser } = useContext(statesContext);

	return (
		<Card elevation={3}>
			<CardContent className='card-container'>
				<Link to={`/menu/${drink.id}`}>
					<div className='card'>
						<img className='card-img-top' src={drink.photo} alt={drink.name} />
						<div className='card-body'>
							<p className='card-text'>{drink.name}</p>
						</div>
					</div>
				</Link>
			</CardContent>
		</Card>
	);
}

export default DrinkCard;
