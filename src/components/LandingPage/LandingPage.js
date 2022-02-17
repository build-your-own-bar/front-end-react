import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./LandingPage.css";

function LandingPage(props) {
	const [overAge, setOverAge] = useState(15);
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const handleYes = () => {
		setButtonDisabled(true);
		setOverAge(21);
	};
	const handleNo = () => {
		setButtonDisabled(true);
		setOverAge(10);
	};
	return (
		<div className="text-warning landing-container">
			<div className="landing-div">
				<h2 className="landing-title  animate__animated animate__lightSpeedInLeft">
					BYOBar
				</h2>

				<h3 className="animate__animated animate__fadeInUp animate__delay-1s landing-moto">
					Where you always feel like a regular
				</h3>
				<h3 className="animate__animated animate__fadeInUp animate__delay-2s landing-moto">
					Are you over the age of 21?
				</h3>
				<div className="btn-landing animate__animated animate__fadeInUp animate__delay-2s">
					<Button
						onClick={handleYes}
						disabled={buttonDisabled}
						className="solo-buttons">
						Yes
					</Button>
					<Button
						onClick={handleNo}
						disabled={buttonDisabled}
						className="solo-buttons"
						variant="danger">
						No
					</Button>
				</div>

				<div>
					{overAge > 20 && (
						<Link
							to="/menu"
							className="landing-enter text-warning animate__animated animate__fadeInUp">
							Enter Here!
						</Link>
					)}
					{overAge < 11 && <p>Sorry! You must be 21 or older to enter!</p>}
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
