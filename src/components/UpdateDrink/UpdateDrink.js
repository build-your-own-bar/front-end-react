import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UpdateDrink(props) {
	const [drink, setDrink] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();

	const getDrinkDetail = async () => {
		try {
			const res = await fetch(`https://buildyobar.herokuapp.com/drinks/${id}`);
			const data = await res.json();
			if (res.status === 200) {
				setDrink(data);
			}
		} catch (error) {
			console.error(error)
		}
	}

	function handleChange(event) {
		setDrink({ ...drink, [event.target.name]: event.target.value });
	};

	async function drinkEdit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		try {
			const res = await fetch(`https://buildyobar.herokuapp.com/drinks/${id}`, {
				method: 'PUT',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
				body: data,
			});
			if (res.status === 200) {
				navigate(`/menu/${id}`);
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getDrinkDetail();
	}, [])

	if (!drink) {
		return null;
	}

    return (
			<div>
				<h2 className='text-center text-warning mt-3'>Update a Drink</h2>
				<div className='w-75 p-3 mx-auto'>
					<Form encType='multipart/form-data' onSubmit={drinkEdit}>
						<Form.Group controlId='name'>
							<Form.Label className='text-warning'>Name</Form.Label>
							<Form.Control
								required
								autoFocus
								type='text'
								name='name'
								onChange={handleChange}
								value={drink.name}
							/>
						</Form.Group>
						<Form.Group controlId='ice'>
							<Form.Label className='text-warning'>Ice</Form.Label>
							<Form.Control
								type='text'
								name='ice'
								onChange={handleChange}
								value={drink.ice}
							/>
						</Form.Group>
						<Form.Group controlId='spirit'>
							<Form.Label className='text-warning'>Spirit</Form.Label>
							<Form.Control
								type='text'
								name='spirit'
								onChange={handleChange}
								value={drink.spirit}
							/>
						</Form.Group>
						<Form.Group controlId='liqueur'>
							<Form.Label className='text-warning'>Liqueur</Form.Label>s
							<Form.Control
								type='text'
								name='liqueur'
								onChange={handleChange}
								value={drink.liqueur}
							/>
						</Form.Group>
						<Form.Group controlId='juice'>
							<Form.Label className='text-warning'>Juice</Form.Label>
							<Form.Control
								type='text'
								name='juice'
								onChange={handleChange}
								value={drink.juice}
							/>
						</Form.Group>
						<Form.Group controlId='garnish'>
							<Form.Label className='text-warning'>Garnish</Form.Label>
							<Form.Control
								type='text'
								name='garnish'
								onChange={handleChange}
								value={drink.garnish}
							/>
						</Form.Group>
						<Form.Group controlId='citrus'>
							<Form.Label className='text-warning'>Citrus</Form.Label>
							<Form.Control
								type='text'
								name='citrus'
								onChange={handleChange}
								value={drink.citrus}
							/>
						</Form.Group>
						<Form.Group controlId='soda'>
							<Form.Label className='text-warning'>Soda</Form.Label>
							<Form.Control
								type='text'
								name='soda'
								onChange={handleChange}
								value={drink.soda}
							/>
						</Form.Group>
						<Form.Group controlId='special_request'>
							<Form.Label className='text-warning'>Special Request</Form.Label>
							<Form.Control
								type='text'
								name='special_request'
								onChange={handleChange}
								value={drink.special_request}
							/>
						</Form.Group>
						<Form.Group controlId='photo'>
							<Form.Label className='text-warning'>Photo</Form.Label>
							<Form.Control
								type='file'
								name='photo'
								accept='image/*'></Form.Control>
						</Form.Group>
						<div className='text-center'>
							<Button className='mt-4' type='submit'>
								Update
							</Button>
						</div>
					</Form>
				</div>
			</div>
		);
}

export default UpdateDrink;