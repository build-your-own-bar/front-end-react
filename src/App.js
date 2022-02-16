import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import  Navigation  from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import DrinkCardDetails from './components/DrinkCardDetails/DrinkCardDetails';
import CreateDrink from './components/CreateDrink/CreateDrink';
import MyDrinks from './components/MyDrinks/MyDrinks';

function App() {
	const [user, setUser] = useState({});
	const [drinks, setDrinks] = useState([]);

	return (
		<div className='App'>
			<Navigation></Navigation>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/about' element={<About />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/menu/:id' element={<DrinkCardDetails />} />
				<Route path='/createdrink' element={<CreateDrink />} />
				<Route path='/mydrinks' element={<MyDrinks />} />
			</Routes>
		</div>
	);
}

export default App;
