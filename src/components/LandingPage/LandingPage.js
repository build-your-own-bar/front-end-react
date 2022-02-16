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

				<h3 className="animate__animated animate__fadeInUp animate__delay-2s">
					Where you always feel like a regular
				</h3>
				<Link to="/menu">Enter if you're 21 or older here!</Link>
			</div>
		</div>
	);
}

export default LandingPage;
