import { useContext } from 'react';
import { statesContext } from '../../statesContext';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Button, Row, Card} from 'react-bootstrap';

function DrinkCard({ drink }) {
	// const { drinks, setDrinks, user, setUser } = useContext(statesContext);

	return (
		<Container>
			<Row>
				<div className='card-container '>
					<Link to={`/menu/${drink.id}`}>
						<div className='card'>
							<img
								className='card-img-top'
								src={drink.photo}
								alt={drink.name}
							/>
							<div className='card-body'>
								<p className='card-text'>{drink.name}</p>
							</div>
						</div>
					</Link>
				</div>
			</Row>
		</Container>
	);
}

export default DrinkCard;
