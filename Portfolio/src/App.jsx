// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/Home/Home';
import Portfolio from './components/Porfolio/Portfolio';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';


const App = () => {
  return (
    <>
    <Sidebar /> 
    <main className='main' >
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
    </>
  )
}

export default App
