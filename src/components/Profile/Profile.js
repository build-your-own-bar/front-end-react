import { useContext } from "react";
import { Link } from "react-router-dom";
import { statesContext } from "../../App";

import "./Profile.css";

function Profile(props) {
	const { userInfo, drinks, loggedIn } = useContext(statesContext);

	// map through the drinks to find userinfo name equal to drinks owner
	// return the drink name
	// return the link to that drinks details page
	return (
		<div>
			{loggedIn ? (
				drinks.map((drink, i) => {
					if (userInfo.username === drink.owner) {
						return (
							<Link to={`/menu/${drink.id}`}>
								<div>
									<div>{drink.name}</div>
									<img src={drink.photo} alt={drink.name}></img>
								</div>
							</Link>
						);
					}
				})
			) : (
				<div className="profile-div">
					<h2 className="text-warning ">
						You must be logged in to see your profile!{" "}
					</h2>
					<Link to="/login" className="display-5">
						Log in here!
					</Link>
				</div>
			)}
		</div>
	);
}

export default Profile;
