import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div>
			<h3 className="display-5 container">
				We always want you to feel like a regular!{" "}
			</h3>
			<div className="photo-div">
				<div>
					<a
						href="https://www.linkedin.com/in/chinsanlim/"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://media-exp1.licdn.com/dms/image/C4E03AQF93qc1J_iaog/profile-displayphoto-shrink_800_800/0/1516816789392?e=1650499200&v=beta&t=4D5gnCtkRs7Pc4Qanq6FIkrJXRbCl6C8VHOZHKVfK1E"
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
							src="https://media-exp1.licdn.com/dms/image/C4E03AQGx3GKYB9GhJA/profile-displayphoto-shrink_800_800/0/1642552890770?e=1650499200&v=beta&t=HQyElYLeHp5fFVYwj2M9xhVVFoPBRaZYlMeBwmBrtVc"
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
							src="https://media-exp1.licdn.com/dms/image/C4D03AQHmpbIYTytLBA/profile-displayphoto-shrink_800_800/0/1642438699152?e=1650499200&v=beta&t=AT9R39m_nuwCsqzkRNKL0Oh2UbHBnh300UPSKESbA8g"
							alt="justin"
							className="img-about"></img>
					</a>
				</div>
			</div>
			<form ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input
					type="text"
					name="from_name"
					placeholder="Enter your name"
					required
				/>
				<label>Email</label>
				<input
					type="email"
					name="reply_to"
					placeholder="Enter your email"
					required
				/>
				<label>Message</label>
				<textarea
					name="message"
					rows="5"
					cols="60"
					placeholder="Type your message here..."
					required></textarea>
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}

export default About;
