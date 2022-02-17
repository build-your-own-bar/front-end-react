import { useContext } from "react";
import { Link } from "react-router-dom";
import { statesContext } from "../../App";

function Profile(props) {
	const { userInfo, drinks } = useContext(statesContext);

	if (!userInfo) {
		return <div>loading...</div>;
	}
	// map through the drinks to find userinfo name equal to drinks owner
	// return the drink name
	// return the link to that drinks details page
	return (
		<div>
			{drinks.map((drink, i) => {
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
			})}
		</div>
	);
}

export default Profile;
