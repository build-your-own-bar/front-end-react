import React, { useState, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { statesContext } from "../../App";
import './Login.css';

function Login() {
	const { handleSetLoggedIn } = useContext(statesContext);

	const initialFormData = {
		email: "",
		password: "",
	};
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};
	
	const _handleLogin = async (event) => {
		event.preventDefault();
		setError(false);
		try {
			const API_ENDPOINT = `https://buildyobar.herokuapp.com/token/login`;
			const response = await fetch(API_ENDPOINT, {
				method: "POST",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.status === 200) {
				const data = await response.json();
				handleSetLoggedIn(data.auth_token);
				navigate("/menu");
			} else {
				setError(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='login-container'>
			<Form
				className="d-flex flex-column align-items-center mt-5"
				onSubmit={_handleLogin}>
				<Form.Group className="mb-3 w-50 mx-auto" controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3 w-50 mx-auto" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<div className="text-center">
					<Button variant="primary" type="submit">
						Login
					</Button>
				</div>
			</Form>
			{error && (
				<Alert variant="warning" className="mt-4">
					No valid user found with the credentials entered. Please try logging
					in again or <Link to="/signup">sign up</Link> for an account.
				</Alert>
			)}
			<h5 className="text-center mt-5">
				Don't have an account? <Link to="/signup">Register here!</Link>
			</h5>
		</div>
	);
}

export default Login;
