import { useContext } from "react";
import { statesContext } from '../../statesContext';

function CreateDrink(props) {
	const { drinks, setDrinks, user, setUser } = useContext(statesContext);
	return <div></div>;
}

export default CreateDrink;
