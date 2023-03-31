import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { eventServiceFactory } from './services/eventService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';


import Header from "./componets/Header";
import Home from "./componets/Home";
import Explore from "./componets/Explore";
import About from "./componets/About";
import Twitter from "./componets/Twitter";
import Sponsor from "./componets/Sponsor";
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
	const [auth, setAuth] = useState({});
	const eventService = eventServiceFactory(auth.accessToken);
	const authService = authServiceFactory(auth.accessToken);

	useEffect(() => {
		eventService.getAll()
			.then(result => {
				console.log(result);
				setEvents(result)
			})
	}, []);

	const onCreateEventSubmit = async (data) => {
		const newEvent = await eventService.create(data);
		//to do update state with the new event
		setEvents(state => [...state, newEvent]);
		// todo redirect to event
		navigate('/events');
	};

	const onLoginSubmit = async (data) => {
		try {
			const result = await authService.login(data);
			//console.log(result);
			setAuth(result);
			navigate('/events')
		} catch {
			console.log('Tehre is a problem');
		}
		//console.log(data);
	}


	const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/events');
        } catch (error) {
            console.log('There is a problem');
        }
    };

	const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

	const onEventEditSubmit = async (values) => {
        const result = await eventService.edit(values._id, values);

        setEvents(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    }

	const contextValues = {
		onLoginSubmit,
		onRegisterSubmit,
		onLogout,
		userId: auth._id,
		token: auth.accesToken,
		userEmail: auth.email,
		isAuthenticated: !!auth.accesToken,
	};
    
	return (


		<AuthContext.Provider value={contextValues}>
			<>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/explore' element={<Explore />} />
					<Route path='/events' element={<Events events={events} />} />
					<Route path='/about' element={<About />} />
					<Route path='/twitter' element={<Twitter />} />
					<Route path='/sponsor' element={<Sponsor />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/login' element={<Login />} />
					<Route path='/logout' element={<Logout />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create' element={<Create onCreateEventSubmit={onCreateEventSubmit} />} />
					<Route path='/events/:eventId' element={<Details />} />
					<Route path='/events/:eventId/edit' element={<Edit onEventEditSubmit={onEventEditSubmit} />} />
				</Routes>
				<Footer />
			</>
		</AuthContext.Provider>
	);
}

export default App;
