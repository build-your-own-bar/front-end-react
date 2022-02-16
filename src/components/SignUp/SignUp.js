import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { statesContext } from "../../statesContext";

function SignUp(props) {
	const { drinks, setDrinks, user, setUser } = useContext(statesContext);
	const signUpData = {
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	};
	const { navigate } = useNavigate();
	const [signUp, setSignUp] = useState(signUpData);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	function handleChange(event) {
		setSignUp((register) => {
			return { ...register, [event.target.name]: event.target.value };
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const res = await fetch("https://buildyobar.herokuapp.com/users/", {
				method: "POST",
				body: JSON.stringify(signUp),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (res.status === 201) {
				setSuccess(true);
				navigate("/login");
			}
		} catch (error) {
			console.error(error);
		}
	}

	const passwordMatch = (event) => {
		if (signUp.password !== signUp.confirm_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div>
			<Form
				className="d-flex flex-column align-items-center mt-5"
				onSubmit={handleSubmit}>
				<Form.Group controlId='username' className='mb-3 w-50'>
					<Form.Label>Username: </Form.Label>
					<Form.Control
						required
						type="text"
						name="username"
						value={signUp.username}
						handleChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='mb-3 w-50 mx-auto' controlId='formBasicEmail'>
					<Form.Label>Email address: </Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						value={signUp.email}
						handleChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='mb-3 w-50 mx-auto' controlId='formBasicPassword'>
					<Form.Label>Password: </Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						value={signUp.password}
						handleChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='confirm_password' className='mb-3 w-50'>
					<Form.Label>Confirm Password: </Form.Label>
					<Form.Control
						required
						type="password"
						name="confirm_password"
						value={signUp.confirm_password}
						handleChange={handleChange}
						onBlur={passwordMatch}
					/>
				</Form.Group>
				<div className="text-center">
					<Button variant="primary" type="submit">
						Sign Up
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default SignUp;
