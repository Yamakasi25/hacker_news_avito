import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    
    return (
      <header className="header">
        <Link to="/">
          <img width={50} height={50} src="img/hacker.png" alt='Logo'/>
        </Link>
        <h1 className="name">Hacker News</h1>
      </header>
    );
  }
  
  export default Header;