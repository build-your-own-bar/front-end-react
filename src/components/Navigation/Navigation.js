import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<Navbar bg='light' expand='lg' collapseOnSelect={true}>
			<Container>
				<Navbar.Brand as={Link} to='/'>BYOBar</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link as={Link} to='/menu'>
							Menu
						</Nav.Link>
						<Nav.Link as={Link} to='/profile'>
							Profile
						</Nav.Link>
						<Nav.Link as={Link} to='/about'>
							About
						</Nav.Link>
						<Nav.Link as={Link} to='/login'>
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
