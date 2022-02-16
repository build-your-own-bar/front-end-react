import { useContext } from 'react';
import { statesContext } from '../../statesContext';
import { Link } from 'react-router-dom';

function DrinkCard({ drink }) {
	// const { drinks, setDrinks, user, setUser } = useContext(statesContext);

	return (
		<div className='row'>
			<div className='col-xs-12 d-flex'>
				<Link to={`/menu/${drink.id}`}>
					<div className='card'>
						<img className='card-img-top' src={drink.photo} alt={drink.name} />
						<div className='card-body'>
							<p className='card-text'>{drink.name}</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default DrinkCard;
