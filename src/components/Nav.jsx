import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Navbar.jsx'


export default function Nav() {

  const [color, setColor] = useState('nav-link text-light')
  const [lastClicked, setLastClicked] = useState('1')
  const location = useLocation();

  const changeColor = (event, key) => {
    console.log(event.target)
    setLastClicked(key)
  }


  let colorClass = 'nav-link text-light';

  if (color) {
    colorClass = 'nav-link text-dark';
  }




  return (
    <>
      <Navbar
        links={[
          <Link key={1} className={location.pathname === '/' ? 'nav-link text-dark' : 'nav-link text-light'} onClick={(event) => changeColor(event, 1)} to="/">
            About Me
          </Link>,
          <Link key={2} className={location.pathname === '/portfolio' ? 'nav-link text-dark' : 'nav-link text-light'} onClick={(event) => changeColor(event, 2)} to="/portfolio">
            Portfolio
          </Link>,
          <Link key={3} className={location.pathname === '/contact' ? 'nav-link text-dark' : 'nav-link text-light'} onClick={(event) => changeColor(event, 3)} to="/contact">
            Contact
          </Link>,
          <Link key={4} className={location.pathname === '/resume' ? 'nav-link text-dark' : 'nav-link text-light'} onClick={(event) => changeColor(event, 4)} to="/resume">
            Resume
          </Link>
        ]}
      />
    </>
  )
}







