import { useContext } from 'react';
import { statesContext } from '../../statesContext';

function Menu(props) {
	const { drinks, setDrinks, user, setUser } = useContext(statesContext);
	console.log(drinks[0]);
	return <div>
		{props.drinks[0].spirit}
	</div>;
}

export default Menu;
