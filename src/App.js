import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { eventServiceFactory } from './services/eventService';
import { AuthProvider } from './contexts/AuthContext';

import { RouteGuard } from './componets/Guards/RouthGard';
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
import {Logout}  from './componets/Logout/Logout';
import Edit from './componets/Edit/Edit'


function App() {
	const navigate = useNavigate();
	const [events, setEvents] = useState([]);
	//const [auth, setAuth] = useState({});
	const eventService = eventServiceFactory();//auth.accessToken


	useEffect(() => {
		eventService.getAll()
			.then(result => {
				console.log(result);
				setEvents(result)
			})
	}, []);

	const onCreateEventSubmit = async (data) => {
		const newEvent = await eventService.create(data);
		// update state with the new event
		setEvents(state => [...state, newEvent]);
		// redirect to event
		navigate('/events');
	};



	const onEventEditSubmit = async (values) => {
        const result = await eventService.edit(values._id, values);

        setEvents(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/events/${values._id}`);
    }
  
	return (


		<AuthProvider>
			<>
				<Header />
				<Routes>
					
					<Route path='/' element={<Home />} />
					<Route path='/explore' element={<Explore />} />
					<Route path='/events' element={<Events events={events} />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/events/:eventId' element={<Details />} />

					<Route element={<RouteGuard/>}>
					<Route path='/events/:eventId/edit' element={<Edit onEventEditSubmit={onEventEditSubmit} />} />
					<Route path='/create' element={<Create onCreateEventSubmit={onCreateEventSubmit} />} />
					<Route path='/logout' element={<Logout />} />
					</Route>

				</Routes>
				<Footer />
			</>
		</AuthProvider>
	);
}

export default App;
