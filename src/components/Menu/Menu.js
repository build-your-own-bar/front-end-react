import { useEffect, useContext } from 'react';
import { Grid, Container } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DrinkCard from '../DrinkCard/DrinkCard';
import { statesContext } from '../../App';
import { Button, Row } from 'react-bootstrap';
import './Menu.css';

function Menu() {
	const { drinks, loggedIn } = useContext(statesContext);

	const image = require('../../assets/shaker.png');
	return (
		<div className='text-center'>
			<br />
			<img src={image} alt='shaker' classname='shaker' />
			{/* credit to winnievinzence from flaticon.com */}
			<br />
			<br />
			<h2 className='text-warning text-center'>Menu</h2>
			<div className='text-center mt-3'>
				<Link to='/createdrink/new'>
					<Button className='btn btn-primary btn-md btn-block create-drink'>
						Create a drink
					</Button>
				</Link>
			</div>
			<br />
			<br />
			<Container className='d-flex align-items-center justify-content-center'>
				<Grid className='gridContainer' container spacing={0}>
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
				</Grid>
			</Container>
		</div>
	);
}

export default Menu;
