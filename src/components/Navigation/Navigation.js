import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation(props) {
	return (
		<Navbar bg="dark" expand="lg" collapseOnSelect={true}>
			<Container>
				<Navbar.Brand as={Link} to="/" className="nav-title">
					BYOBar
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/menu" className="text-light">
							Menu
						</Nav.Link>
						<Nav.Link as={Link} to="/profile" className="text-light">
							Profile
						</Nav.Link>
						<Nav.Link as={Link} to="/about" className="text-light">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/login" className="text-light">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
