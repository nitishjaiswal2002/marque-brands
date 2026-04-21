import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import TrackRecord from './components/TrackRecord';
import Technologies from './components/Technologies';
import Clients from './components/Clients';
import RevenueModel from './components/RevenueModel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <TrackRecord />
      <Technologies />
      <Clients />
      <RevenueModel />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
