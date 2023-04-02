import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import DataProvider from "./components/Pages/DataProvider";
import Admin from "./components/Pages/Admin";
import Financial from "./components/Pages/Financial";
import Reseacher from "./components/Pages/Researcher";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/dataprovider" element={<DataProvider/>}/>
			<Route path="/financial" element={<Financial/>}/>
			<Route path="/admin" element={<Admin/>}/>
			<Route path="/researcher" element={<Reseacher/>}/>
		</Routes>
	);
}

export default App;
