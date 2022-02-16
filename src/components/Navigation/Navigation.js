import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap';

function Navigation(props) {
	return (
		<Navbar bg='light' expand='lg' collapseOnSelect={true}>
			<Container>
				<LinkContainer>
					<Navbar.Brand href='#home'>BYOBar</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<LinkContainer to='/'>
							<Nav.Link>Menu</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/profile'>
							<Nav.Link>Profile</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/login'>
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
