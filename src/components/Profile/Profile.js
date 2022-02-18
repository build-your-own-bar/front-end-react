import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { statesContext } from '../../App';
import { Container, Grid } from '@mui/material';
import ProfileCards from '../ProfileCards/ProfileCards';
import './Profile.css';

function Profile(props) {
	const { userInfo, drinks, loggedIn } = useContext(statesContext);

	return (
		<div>
			{loggedIn ? (
				drinks.map((drink, i) => {
					if (userInfo.username === drink.owner) {
						return (
							<Container className='d-flex align-items-center justify-content-center'>
								<Grid className='gridContainer' container spacing={0}>
									<ProfileCards drink={drink} />
								</Grid>
							</Container>
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
	);
}

export default Profile;
