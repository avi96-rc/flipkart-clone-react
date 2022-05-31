import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { act } from "react-dom/test-utils";
import './Header.css'
function Header(props) {

    const [navActive,setNavActive] = useState('nav-menu');
    const [navToggle,setNavToggle] = useState('nav-toggle');
    
    

    const toggle=()=>{
        navActive === 'nav-menu'?setNavActive('nav-menu nav-active'):setNavActive('nav-menu');
        navToggle === 'nav-toggle'?setNavToggle('nav-toggle toggle'):setNavToggle('nav-toggle');

        console.log(navActive);

    }

  return (



    <header className='header'>
      <nav className="nav">
       <div className="brand"><h2>Noob amit</h2></div>
        <ul className={navActive}>
          <li className='nav-menu-item'>
            <a href="#" >home</a>
          </li>
          <li className="nav-menu-item">
            <a href="#">About</a>
          </li>
          <li className='nav-menu-item'>
            <a href="#">Contact</a>
          </li>
          <li className="nav-menu-item">
            <a href="#">Cart</a>
          </li>
        </ul>
        <div onClick={toggle} className={navToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
