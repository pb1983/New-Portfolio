import { useState } from 'react'
import {Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Nav />
       
         <Outlet />
        <Footer />
    </>
  );
}

export default App;


