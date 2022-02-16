import { useEffect, useContext } from 'react';
import { Grid, Container } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';
import { statesContext } from '../../App';

function Menu() {
	const { drinks, setDrinks, user, setUser } = useContext(statesContext);

	return (
		<div>
			<Container className='drinkContainer'>
				<Grid className='gridContainer' container spacing={3}>
					{drinks &&
						drinks.map((drink, i) => (
							<Grid
								item
								className='gridItem'
								key={drink.id}
								xs={12}
								sm={12}
								md={12}
								style={{
									padding: '20px',
									textDecoration: 'none',
								}}>
								<DrinkCard drink={drink} />
							</Grid>
						))}
				</Grid>
			</Container>
		</div>
	);
}

export default Menu;
