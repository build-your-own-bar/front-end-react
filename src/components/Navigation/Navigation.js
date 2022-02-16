import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { statesContext } from "../../App";

function Navigation(props) {
	const { loggedIn, handleLogout, userInfo } = useContext(statesContext);
	return (
		<Navbar bg="dark" expand="lg" collapseOnSelect={true}>
			<Container>
				<Navbar.Brand as={Link} to="/" className="nav-title text-warning">
					BYOBar
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/menu" className="text-warning">
							Menu
						</Nav.Link>
						<Nav.Link as={Link} to="/profile" className="text-warning">
							Profile
						</Nav.Link>
						<Nav.Link as={Link} to="/about" className="text-warning">
							About
						</Nav.Link>
					</Nav>
					<Nav>
						{userInfo && (
							<Navbar.Text className="justify-content-end text-warning fw-bold">
								You are signed in as: {userInfo.username}
							</Navbar.Text>
						)}
						{loggedIn ? (
							<>
								<LinkContainer to="/">
									<Nav.Link
										onClick={handleLogout}
										className="text-danger fw-bold">
										Log Out
									</Nav.Link>
								</LinkContainer>
							</>
						) : (
							<>
								<LinkContainer to="/signup" className="text-warning">
									<Nav.Link>Sign Up</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/login" className="text-warning">
									<Nav.Link>Log In</Nav.Link>
								</LinkContainer>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
