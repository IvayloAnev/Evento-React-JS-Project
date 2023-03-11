import {useEffect} from 'react';

import * as eventService from './services/eventService';

import Header from "./componets/Header";
import Home from "./componets/Home";
import Explore from "./componets/Explore";
import Event from "./componets/Events";
import About from "./componets/About";
import Twiter from "./componets/Twiter";
import Sponsor from "./componets/Sponsor";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

function App() {
  useEffect(() => {
    eventService.getAll()
       .then(events => {
        console.log(events);
       })
       .catch(err =>{
        console.log('Error' + err);
       });
  },[]);

  return (
    <>

      <Header />

      <Home />

      <Explore />

      <Event />

      <About />

      <Twiter />

      <Sponsor />

      <Contact />

      <Footer />

    </>

  );
}

export default App;
