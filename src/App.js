
import { Routes, Route } from 'react-router-dom'


import { AuthProvider } from './contexts/AuthContext';
import { EventProvider } from './contexts/EventContext';

import Header from "./componets/Header";
import Home from "./componets/Home";
import Explore from "./componets/Explore";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Login from './componets/Login/Login';
import Create from './componets/Create/Create';
import Events from './componets/Events/Events';
import Details from './componets/Details/Details';
import Register from './componets/Register/Register'
import { Logout } from './componets/Logout/Logout';
import Edit from './componets/Edit/Edit'
import { RouteGuard } from './componets/Guards/RouthGard';

function App() {

	return (

		<AuthProvider>
			<EventProvider>
				<>
					<Header />
					<Routes>

						<Route path='/' element={<Home />} />
						<Route path='/explore' element={<Explore />} />
						<Route path='/events' element={<Events />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/events/:eventId' element={<Details />} />

						<Route element={<RouteGuard />}>
							<Route path='/events/:eventId/edit' element={<Edit/>} />
							<Route path='/create' element={<Create />} />
							<Route path='/logout' element={<Logout />} />
						</Route>

					</Routes>
					<Footer />
				</>
			</EventProvider>
		</AuthProvider>
	);
}

export default App;
