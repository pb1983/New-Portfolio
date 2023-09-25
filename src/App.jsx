import { useState } from 'react'
import {Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Portfolio from './pages/portfolio';
import './App.css'

function App() {
  return (
    <>
      <Nav />

         <Outlet />
    </>
  );
}

export default App;


