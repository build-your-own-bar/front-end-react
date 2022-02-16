import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

function LandingPage(props) {
	return (
		<div className="text-warning landing-container">
			<div className="landing-div">
				<h2 className="landing-title  animate__animated animate__lightSpeedInLeft">
					BYOBar
				</h2>

				<h3 className="animate__animated animate__fadeInUp animate__delay-2s landing-moto">
					Where you always feel like a regular
				</h3>
				<div>
					<Link
						to="/menu"
						className="landing-enter text-warning animate__animated animate__fadeInUp animate__delay-4s">
						Enter Here!
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
