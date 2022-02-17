import "./App.css";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import DrinkCardDetails from "./components/DrinkCardDetails/DrinkCardDetails";
import CreateDrink from "./components/CreateDrink/CreateDrink";
import MyDrinks from "./components/MyDrinks/MyDrinks";
import UpdateDrink from "./components/UpdateDrink/UpdateDrink";

// import { statesContext } from './statesContext';
export const statesContext = createContext("");

function App() {
	const baseUrl = "https://buildyobar.herokuapp.com/";
	const drinkUrl = "https://buildyobar.herokuapp.com/drinks/";
	const [user, setUser] = useState(false);
	const [drinks, setDrinks] = useState(false);
	const [userId, setUserId] = useState(false);
	const { pathname } = useLocation();

	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("token") ? true : false
	);
	const [userInfo, setUserInfo] = useState(null);
	const handleSetLoggedIn = (token) => {
		localStorage.setItem("token", token);
		getUserInfo();
		console.log(localStorage.getItem("token"));
		setLoggedIn(true);
	};

	const getUserInfo = async () => {
		try {
			const response = await fetch(baseUrl + "users/me/", {
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			});
			const data = await response.json();
			console.log(data);
			if (data.detail === "Invalid token.") {
				setUserInfo(null);
				setLoggedIn(false);
				return;
			} else {
				setUserInfo(data);
				setUserId(data.id);
				setLoggedIn(true);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		console.log(localStorage.getItem("token"));
		try {
			const response = await fetch(baseUrl + "token/logout/", {
				method: "POST",
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			});
			if (response.status === 204) {
				alert("You have been logged out!");
				setLoggedIn(false);
				setUserInfo(null);
				localStorage.removeItem("token");
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (loggedIn) {
			getUserInfo();
		}
	}, []);

	const getDrinks = async () => {
		try {
			const res = await axios.get(drinkUrl);
			setDrinks(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDrinks();
	}, []);

	return (
		<div className="App">
			<statesContext.Provider
				value={{
					drinks,
					setDrinks,
					user,
					setUser,
					loggedIn,
					userInfo,
					handleSetLoggedIn,
					baseUrl,
					handleLogout,
					userId,
				}}>
				{pathname !== "/" && <Navigation></Navigation>}
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/menu/:id" element={<DrinkCardDetails />} />
					<Route path="/profile/menu/:id" element={<DrinkCardDetails />} />
					<Route path="/createdrink/new" element={<CreateDrink />} />
					<Route path="/mydrinks" element={<MyDrinks />} />
					<Route path="/menu/:id/edit" element={<UpdateDrink /> } />
				</Routes>
			</statesContext.Provider>
		</div>
	);
}

export default App;
