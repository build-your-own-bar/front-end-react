import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CommentForm(props) {
    const editCommentData = {
        title: '',
        body: '',
    };
	const [comment, setComment] = useState(editCommentData);
	const { id } = useParams();
	const navigate = useNavigate();

	const getComment = async () => {
		try {
			const res = await fetch(
				`https://buildyobar.herokuapp.com/comments/${id}`
			);
			const data = await res.json();
			if (res.status === 200) {
				setComment(data);
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
				navigate(`/menu`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	async function commentEdit(event) {
		event.preventDefault();
        const commentData = { ...comment, drink_id: id };
        console.log(commentData);
		try {
			const res = await fetch(
				`https://buildyobar.herokuapp.com/comments/${id}`,
				{
					method: 'PATCH',
                    body: JSON.stringify(commentData),
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
                    
				});
            console.log(res)
			if (res.status === 200) {
                const commentData = await res.json();
                console.log(commentData);
				navigate(`/menu`);
			}
		} catch (error) {
			console.error(error);
		}
	}

    function handleChange(event) {
        setComment({ ...comment, [event.target.name]: event.target.value });
    };

	useEffect(() => {
		getComment();
	}, []);

	if (!comment) {
		return null;
	}

	return (
		<div>
			<Form
				encType='multipart/form-data'
				className='mt-5'
				onSubmit={commentEdit}>
				<Form.Group className='mb-3 text-center' controlId='title'>
					<Form.Label className='text-warning'>Title</Form.Label>
					<Form.Control
						name='title'
						type='text'
						placeholder='Comment title'
						className='mx-auto w-75'
						value={comment.title}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='mb-3 text-center' controlId='body'>
					<Form.Label className='text-warning'>Comment</Form.Label>
					<Form.Control
						name='body'
						as='textarea'
						rows={3}
						value={comment.body}
						className='mx-auto w-75'
						placeholder='What are you thinking?'
						onChange={handleChange}
					/>
				</Form.Group>
				<div className='text-center mb-4'>
					{' '}
					<Button className='mx-3 btn-info' type='submit'>
						Edit
					</Button>
					<Button onClick={deleteComment} variant='danger'>
						Delete
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default CommentForm;
