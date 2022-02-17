import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { statesContext } from '../../App';
import './SignUp.css';

function SignUp(props) {
	const { handleSetLoggedIn } = useContext(statesContext);
	const signUpData = {
		username: '',
		email: '',
		password: '',
		re_password: '',
	};

	const navigate = useNavigate();
	const [signUp, setSignUp] = useState(signUpData);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [loginData, setLoginData] = useState(false);

	function handleChange(event) {
		setSignUp((register) => {
			return { ...register, [event.target.name]: event.target.value };
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (!error) {
			const tempLogin = {
				email: signUp.email,
				password: signUp.password,
			};
			try {
				const res = await fetch('https://buildyobar.herokuapp.com/users/', {
					method: 'POST',
					body: JSON.stringify(signUp),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				if (res.status === 201) {
					setSuccess(true);
					const API_ENDPOINT = `https://buildyobar.herokuapp.com/token/login`;
					const response = await fetch(API_ENDPOINT, {
						method: 'POST',
						body: JSON.stringify(tempLogin),
						headers: {
							'Content-Type': 'application/json',
						},
					});
					console.log(response);
					if (response.status === 200) {
						const data = await response.json();
						console.log(data);
						handleSetLoggedIn(data.auth_token);
						navigate('/menu');
					} else {
						setError(true);
					}
				}
			} catch (error) {
				console.error(error);
			}
		}
	}

	const passwordMatch = (event) => {
		if (signUp.password !== signUp.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div>
			<Form
				className='d-flex flex-column align-items-center mt-5'
				onSubmit={handleSubmit}>
				<Form.Group controlId='username' className='mb-3 w-50 main-form'>
					<Form.Label>Username: </Form.Label>
					<Form.Control
						required
						type='text'
						name='username'
						placeholder='Enter username'
						value={signUp.username}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group
					className='mb-3 w-50 mx-auto main-form'
					controlId='formBasicEmail'>
					<Form.Label>Email address: </Form.Label>
					<Form.Control
						type='email'
						name='email'
						placeholder='Enter email'
						value={signUp.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group
					className='mb-3 w-50 mx-auto main-form'
					controlId='formBasicPassword'>
					<Form.Label>Password: </Form.Label>
					<Form.Control
						type='password'
						name='password'
						placeholder='Password'
						value={signUp.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='re_password' className='mb-3 w-50 main-form'>
					<Form.Label>Confirm Password: </Form.Label>
					<Form.Control
						required
						type='password'
						name='re_password'
						placeholder='Confirm password'
						value={signUp.confirm_password}
						onChange={handleChange}
						onBlur={passwordMatch}
					/>
				</Form.Group>
				<div className='text-center'>
					<Button variant='primary' type='submit'>
						Sign Up
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default SignUp;
