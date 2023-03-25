import { Routes, Route , useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import * as eventService from './services/eventService';

import Header from "./componets/Header";
import Home from "./componets/Home";
import Explore from "./componets/Explore";
import Event from "./componets/Events";
import About from "./componets/About";
import Twitter from "./componets/Twitter";
import Sponsor from "./componets/Sponsor";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Login from './componets/Login';
import Create from './componets/Create/Create';

function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventService.getAll()
      .then(result => {
        console.log(result);
        setEvents(result)
      })
      .catch(err => {
        console.log('Error' + err);
      });
  }, []);

  return (
    <>


      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/event' element={<Event />} />
        <Route path='/about' element={<About />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/sponsor' element={<Sponsor />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />

      </Routes>
      <Footer />


    </>

  );
}

export default App;
