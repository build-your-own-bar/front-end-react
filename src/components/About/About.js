import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import "./About.css";

function About(props) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"contact_service",
				"template_rb90ig4",
				form.current,
				"user_PofRZkLPXasmqhS4pA0zj"
			)
			.then(
				(result) => {
					// console.log(result.text);
				},
				(error) => {
					// console.log(error.text);
				}
			);
	};
	return (
		<div className="about-container text-warning">
			<h3 className="text-warning">
				We always want you to feel like a regular!{" "}
			</h3>
			<div className="photo-div">
				<div>
					<a
						href="https://www.linkedin.com/in/chinsanlim/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/2YSsYCf.jpg"
							alt="chinsan"
							className="img-about"></img>
					</a>
				</div>
				<div>
					<a
						href="https://www.linkedin.com/in/joesphchang/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/CJi6arY.jpg"
							alt="joey"
							className="img-about"></img>
					</a>
				</div>
				<div>
					<a
						href="https://www.linkedin.com/in/justin-lombardi/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://i.imgur.com/qT5xs6W.jpg"
							alt="justin"
							className="img-about"></img>
					</a>
				</div>
			</div>
			<div className="about-details text-warning">
				<p className="about-p">
					BYOBar was designed by three developers who have a passion for
					connecting with others and making people feel like they're part of the
					family. With our app, we are able to give that experience to you, the
					user, and you are always able to show off your style and preferences
					in cocktail form!
				</p>
				<p className="about-p">
					Simply go to our 'Menu' tab and search through a collection of classic
					and custom made drinks. Does a recipe fit your liking? Add it to your
					drink list. Do you need to make modifications? Create your own version
					and add it to your drink list. You can then share all of your best
					cocktail ideas with your friends!
				</p>
				<p className="about-p">
					Want to connect? Click on our pictures above OR click below to send us
					a message!{" "}
				</p>
			</div>
			<hr className="about-line"></hr>
			<form ref={form} onSubmit={sendEmail} className="contact-form">
				<label>Name</label>
				<input
					type="text"
					name="from_name"
					placeholder="Enter your name"
					required
					className="form-elements"
				/>
				<label>Email</label>
				<input
					type="email"
					name="reply_to"
					placeholder="Enter your email"
					required
					className="form-elements"
				/>
				<label>Message</label>
				<textarea
					name="message"
					rows="10"
					cols="30"
					placeholder="Type your message here..."
					required
					className="form-elements"></textarea>
				<Button
					type="submit"
					value="Send"
					className="form-elements btn-secondary text-warning">
					Send
				</Button>
			</form>
		</div>
	);
}

export default About;
