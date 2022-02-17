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
		body: '',
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
		console.log(data);
		try {
			const res = await fetch('https://buildyobar.herokuapp.com/comments/', {
				method: 'POST',
				body: JSON.stringify(data),
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

	const deleteComment = async () => {
		try {
			const res = await fetch(
				`https://buildyobar.herokuapp.com/comments/${id}`,
				{
					method: 'DELETE',
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				}
			);
			console.log(res);
			if (res.status === 204) {
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
					<div className='mb-2'>
					<Link to={`/menu/${id}/edit`}>
						<Button className='btn-sm'>Update</Button>
					</Link>
					<Button variant='danger' onClick={handleShow} className='mx-3 btn-sm'>
						Delete
					</Button>
					</div>
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
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3 text-center' controlId='title'>
					<Form.Label className='text-warning'>Title</Form.Label>
					<Form.Control
						name='title'
						type='text'
						placeholder='Comment title'
						value={newComment.title}
						onChange={handleChange}
						className='mx-auto w-75'
					/>
				</Form.Group>
				<Form.Group className='mb-3 text-center' controlId='body'>
					<Form.Label className='text-warning'>Comment</Form.Label>
					<Form.Control
						name='body'
						as='textarea'
						rows={3}
						value={newComment.body}
						onChange={handleChange}
						className='mx-auto w-75'
						placeholder='What are you thinking?'
					/>
				</Form.Group>
				<div className='text-center mb-4'>
					<Button type='submit'>Comment</Button>
				</div>
			</Form>
			<div className='details-container'>
				<div>
					<h2 className='comment-title text-warning'>Comments</h2>
					{drink.comments.map((comment) => {
						return (
							<div key={comment.id} className='comment-container'>
								<div className='title-container'>
									<h3>
										<span className='text-danger'>Title:</span> {comment.title}
									</h3>
									<h4>
										<span className='text-danger'>Username:</span>{' '}
										{comment.owner}
									</h4>
								</div>
								<p className='comment-text'>
									<span className='text-danger'>Comment:</span> {comment.body}
								</p>
								<div className='btn-div'>
									<Button className='mx-3 btn-info'>Edit</Button>
									<Button
										onClick={deleteComment}
										variant='danger'
										className='btn-sm'>
										Delete
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default DrinkCardDetails;
