import { useContext } from "react";
import { statesContext } from "../../statesContext";

// USING FOR FUTURE IMPLEMENTATION OF FAVORITE DRINKS LIST
function MyDrinks(props) {
	const { drinks, setDrinks, user, setUser } = useContext(statesContext);
	return <div></div>;
}

export default MyDrinks;
