import React from 'react';
import { Form, Button } from 'react-bootstrap';


function UpdateDrink(props) {
    return (
        <div>
            			<div className='w-75 p-3 mx-auto'>
				<Form encType='multipart/form-data'>
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
							></Form.Control>
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