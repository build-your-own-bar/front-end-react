import './App.css';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import DrinkCardDetails from './components/DrinkCardDetails/DrinkCardDetails';
import CreateDrink from './components/CreateDrink/CreateDrink';
import MyDrinks from './components/MyDrinks/MyDrinks';

import { statesContext } from './statesContext';

function App() {

	const drinkUrl = 'https://buildyobar.herokuapp.com/drinks/';
	const [user, setUser] = useState({});
	const [drinks, setDrinks] = useState([]);

	const getDrinks = async () => {
		try {
			const res = await axios.get(drinkUrl);
			setDrinks(res.data);
			console.log(drinks);

		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDrinks();
	}, []);

	return (
		<div className='App'>
			<statesContext.Provider value={{ drinks, setDrinks, user, setUser }}>
				<Navigation></Navigation>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/about' element={<About />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/menu' element={<Menu drinks={drinks} />} />
					<Route path='/menu/:id' element={<DrinkCardDetails />} />
					<Route path='/createdrink' element={<CreateDrink />} />
					<Route path='/mydrinks' element={<MyDrinks />} />
				</Routes>
			</statesContext.Provider>
		</div>
	);
}

export default App;
