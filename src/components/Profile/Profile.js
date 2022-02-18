import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { statesContext } from '../../App';
import { Container } from '@mui/material';
import { Button } from 'react-bootstrap';
import ProfileCards from '../ProfileCards/ProfileCards';

import './Profile.css';

function Profile(props) {
	const { userInfo, drinks, loggedIn } = useContext(statesContext);
	const [noDrinks, setNoDrinks] = useState(false);
	let counter = 0;

	const emptyProfile = () => {
		if (loggedIn) {
			drinks.map((drink) => {
				if (userInfo.username === drink.owner) {
					return (counter += 1);
				}
			})
		} else {
			return <div> No Drinks! </div>
		}
	};

	useEffect(() => {
		emptyProfile();
	}, [drinks]);

	return (
		<div>
			<h3 className='text-center text-warning mt-5 fw-bold display-5 profile-title'>
				{userInfo.username}'s Drinks
			</h3>
			<div className='text-center mt-5'>
				{counter <= 0 && (
					<Link to='/createdrink/new'>
						<Button className='profile-create-btn'>Add Drink</Button>
					</Link>
				)}
			</div>
			<div className='profile-container mt-3 animate__animated animate__slideInRight'>
				{loggedIn ? (
					drinks.map((drink, i) => {
						if (userInfo.username === drink.owner) {
							return (
								<div className='mb-3 mt-5'>
									<Container className='d-flex align-items-center justify-content-center'>
										<ProfileCards drink={drink} />
									</Container>
								</div>
							);
						}
					})
				) : (
					<div className='profile-div'>
						<h2 className='text-warning '>
							You must be logged in to see your profile!{' '}
						</h2>
						<Link to='/login' className='display-5'>
							Log in here!
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default Profile;
