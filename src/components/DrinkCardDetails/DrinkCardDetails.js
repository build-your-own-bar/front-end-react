import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './DrinkCardDetails.css';

function DrinkCardDetails(props) {
	const [drink, setDrink] = useState(null);
	const [show, setShow] = useState(false);
	const { id } = useParams();
	const newCommentData = {
		title: '',
		comment: '',
	};
	const [newComment, setNewComment] = useState(newCommentData);
	const navigate = useNavigate();

	const getDrinkDetail = async () => {
		try {
			const res = await fetch(`https://buildyobar.herokuapp.com/drinks/${id}`);
			const data = await res.json();
			console.log(data);
			if (res.status === 200) {
				setDrink(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const deleteDrink = async () => {
		try {
			const res = await fetch(`https://buildyobar.herokuapp.com/drinks/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (res.status === 204) {
				navigate('/menu');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = { ...newComment, drink_id: id };
		console.log(id);
		try {
			const res = await fetch('https://buildyobar.herokuapp.com/comments', {
				method: 'POST',
				body: data,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
			});
			console.log(res);
			if (res.status === 200) {
				const data = await res.json();
				console.log(data);
				navigate(`/menu/${id}`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		setNewComment({ ...newComment, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		getDrinkDetail();
	}, []);

	function handleImageError(event) {
		event.currentTarget.src = 'https://i.imgur.com/JNKyLlj.jpg';
	}

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	if (!drink) {
		return <p>Loading Drink...</p>;
	}

	return (
		<>
			<div className='details-container'>
				<img
					src={drink.photo}
					alt={drink.name}
					className='info-drink'
					onError={handleImageError}
				/>
				<div className='details'>
					<h2 className='text-area'>Name: {drink.name}</h2>
					<h3 className='text-area'>Ice: {drink.ice}</h3>
					<h4 className='text-area'>Spirit: {drink.spirit}</h4>
					<h4 className='text-area'>Liqueur: {drink.liqueur}</h4>
					<h4 className='text-area'>Juice: {drink.juice}</h4>
					<h4 className='text-area'>Garnish: {drink.garnish}</h4>
					<h4 className='text-area'>Citrus: {drink.citrus}</h4>
					<h4 className='text-area'>Soda: {drink.soda}</h4>
					<h4 className='text-area'>
						Special Request: {drink.special_request}
					</h4>
					<Link to='/updatedrink/:id'>
						<Button>Update</Button>
					</Link>
					<Button variant='danger' onClick={handleShow}>
						Delete
					</Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Are you sure you want to delete?</Modal.Title>
						</Modal.Header>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Cancel
							</Button>
							<Button variant='danger' onClick={deleteDrink}>
								Delete
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
			<div className='details-container'>
				<div>
					<h3 className='comment-title'>Comments</h3>
					{drink.comments.map((comment) => {
						return (
							<div key={comment.id} className='comment-container'>
								<h3>{comment.title}</h3>
								<h4>{comment.owner}</h4>
								<p>{comment.body}</p>
							</div>
						);
					})}
					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-3' controlId='title'>
							<Form.Label>Title</Form.Label>
							<Form.Control
								name='title'
								type='text'
								placeholder='Comment title'
								value={newComment.title}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='comment'>
							<Form.Label>Comment</Form.Label>
							<Form.Control
								name='comment'
								as='textarea'
								rows={3}
								value={newComment.comment}
								onChange={handleChange}
							/>
						</Form.Group>
						<Button type='submit'>Comment</Button>
					</Form>
				</div>
			</div>
		</>
	);
}

export default DrinkCardDetails;
