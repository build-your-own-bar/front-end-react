import { useEffect, useContext } from 'react';
// import { Grid, Container } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';
import { statesContext } from '../../App';
import { Button, Row } from 'react-bootstrap';

function Menu() {
	const { drinks, setDrinks, user, setUser } = useContext(statesContext);

	return (
		<div>
			<div className='drinkContainer'>
				<div className='text-center mt-3'>
				<Link to='/createdrink/new'>
					<Button className='primary text-center'>Create a drink</Button>
				</Link>
				</div>
				<Row>
					{drinks &&
						drinks.map((drink, i) => (
							<div
								item
								className='gridItem'
								key={drink.id}
								style={{
									padding: '20px',
									textDecoration: 'none',
								}}>
								<DrinkCard drink={drink} />
							</div>
						))}
				</Row>
			</div>
		</div>
	);
}

export default Menu;
