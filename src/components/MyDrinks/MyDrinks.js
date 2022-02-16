import { useContext } from 'react';
import { statesContext } from '../../statesContext';

function MyDrinks(props) {
	const { drinks, setDrinks, user, setUser } = useContext(statesContext);
	return <div></div>;
}

export default MyDrinks;
