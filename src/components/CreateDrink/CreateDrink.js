import { useContext } from 'react';
import { statesContext } from '../../App';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function CreateDrink(props) {
	const { drinks, setDrinks, user, setUser, userInfo, loggedIn } = useContext(statesContext);
	const drinkData = {
		name: '',
		ice: '',
		spirit: '',
		liqueur: '',
		juice: '',
		garnish: '',
		citrus: '',
		soda: '',
		special_request: '',
		photo: '',
	};
	
	const navigate = useNavigate();
	const [newDrink, setNewDrink] = useState(drinkData);

	function handleChange(event) {
		setNewDrink((newDrinks) => {
			return { ...newDrinks, [event.target.id]: event.target.value };
		});
	}

	function handlePhotoUpload(event) {
		setNewDrink((newPhoto) => {
			return { ...newPhoto, photo: event.target.files[0] };
		});
	}

	async function createDrink(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		try {
			const res = await fetch('hhttps://buildyourbar.herokuapp.com/drinks/', {
				method: 'POST',
				body: data,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (res.status === 201) {
				navigate('/menu');
			}
		} catch (error) {
			console.error(error);
		}
	}

	if (!loggedIn) {
		return <Navigate to='/login'/>
	}
	
	return (
		<div>
			<h2 className='text-center text-warning mt-3'>New Cocktail</h2>
			<div className='w-75 p-3 mx-auto'>
				<Form onSubmit={createDrink} encType='multipart/form-data'>
					<Form.Group controlId='name'>
						<Form.Label className='text-warning'>Name</Form.Label>
						<Form.Control required autoFocus type='text' name='name' />
					</Form.Group>
					<Form.Group controlId='ice'>
						<Form.Label className='text-warning'>Ice</Form.Label>
						<Form.Control type='text' name='ice' />
					</Form.Group>
					<Form.Group controlId='spirit'>
						<Form.Label className='text-warning'>Spirit</Form.Label>
						<Form.Control type='text' name='spirit' />
					</Form.Group>
					<Form.Group controlId='liqueur'>
						<Form.Label className='text-warning'>Liqueur</Form.Label>
						<Form.Control type='text' name='liqueur' />
					</Form.Group>
					<Form.Group controlId='juice'>
						<Form.Label className='text-warning'>Juice</Form.Label>
						<Form.Control type='text' name='juice' />
					</Form.Group>
					<Form.Group controlId='garnish'>
						<Form.Label className='text-warning'>Garnish</Form.Label>
						<Form.Control type='text' name='garnish' />
					</Form.Group>
					<Form.Group controlId='citrus'>
						<Form.Label className='text-warning'>Citrus</Form.Label>
						<Form.Control type='text' name='citrus' />
					</Form.Group>
					<Form.Group controlId='soda'>
						<Form.Label className='text-warning'>Soda</Form.Label>
						<Form.Control type='text' name='soda' />
					</Form.Group>
					<Form.Group controlId='special_request'>
						<Form.Label className='text-warning'>Special Request</Form.Label>
						<Form.Control type='text' name='special_request' />
					</Form.Group>
					<Form.Group controlId='photo'>
						<Form.Label className='text-warning'>Photo</Form.Label>
						<Form.Control
							type='file'
							name='photo'
							accept='image/*'
							onChange={handlePhotoUpload}></Form.Control>
					</Form.Group>
					<div className='text-center'>
						<Button className='mt-4' type='submit'>
							Submit
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default CreateDrink;
