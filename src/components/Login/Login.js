import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { statesContext } from '../../statesContext';

function Login(props) {
const { drinks, setDrinks, user, setUser } = useContext(statesContext);

	return (
		<div>
			<Form className='d-flex flex-column align-items-center mt-5' >
				<Form.Group className='mb-3 w-50 mx-auto' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group className='mb-3 w-50 mx-auto' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<div className='text-center'>
					<Button variant='primary' type='submit'>
						Login
					</Button>
				</div>
			</Form>
            <h5 className='text-center mt-5'>Don't have an account? <Link to='/signup'>Register here!</Link></h5>
		</div>
	);

}

export default Login;
