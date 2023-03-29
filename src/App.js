import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import * as eventService from './services/eventService';

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


function App() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [auth , setAuth] = useState({});

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
    try{
        const result = await authService.login(data);
        setAuth(result);
        navigate('/events')
    }catch{
        console.log('Tehre is a problem');
    }
  }

  return (
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
        <Route path='/create' element={<Create onCreateEventSubmit={onCreateEventSubmit} />} />
        <Route path='/events/:eventId' element={<Details/>}/>
      </Routes>
      <Footer />


    </>

  );
}

export default App;
