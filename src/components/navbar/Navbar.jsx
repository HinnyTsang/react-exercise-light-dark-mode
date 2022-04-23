import React from 'react'
import './navbar.css'

const Navbar = ({Mode, SetMode}) => {
  

  return (
    <div className={Mode ? 'navbar--container': 'navbar--container-dark'}>
      <div className='navbar--logo'>
        <img src="images/react-icon-small.png" />
        <h1>ReactFacts</h1>
      </div>
      <div className='navbar--mode-toggler'>
        <p className='navbar--mode-toggler--light'>Light</p>
        <div 
          className="navbar--mode-toggler--slider"
          onClick={()=>SetMode(prev => !prev)}>
          <div className="navbar--mode-toggler--slider--circle"></div>
        </div>
        <p className='navbar--mode-toggler--dark'>Dark</p>
      </div>
    </div>
  )
}

export default Navbar