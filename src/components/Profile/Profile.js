import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { statesContext } from '../../App';
import { Container } from '@mui/material';
import ProfileCards from '../ProfileCards/ProfileCards';
import './Profile.css';

function Profile(props) {
	const { userInfo, drinks, loggedIn } = useContext(statesContext);

	return (
		<div>
			<div
				className='d-flex align-items-center justify-content-center'
				style={{
					padding: '20px',
					display: 'flex',
					flexdirection: 'row',
					justifycontent: 'center',
					flexwrap: 'wrap',
					margin: '10px 5px 0px 5px',
					borderradius: '5px',
					paddingbottom: '100px',
				}}
				sx={{ display: 'inline', whiteSpace: 'normal' }}>
				{loggedIn ? (
					drinks.map((drink, i) => {
						if (userInfo.username === drink.owner) {
							return (
								<Container className='d-flex align-items-center justify-content-center'>
									<ProfileCards drink={drink} />
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
		</div>
	);
}

export default Profile;
