import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';

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

function App() {
  useEffect(() => {
    eventService.getAll()
      .then(events => {
        console.log(events);
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

      </Routes>
      <Footer />


    </>

  );
}

export default App;
