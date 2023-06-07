import React from 'react';
import propTypes from 'prop-types';


export default function Navbar(props) {
  return (

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    
    <a className="navbar-brand"to="/"> {props.title} </a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         
          <a className="nav-link " aria-current="page" to="/">Home</a>

        </li>
        <li className="nav-item">
         
          <a className="nav-link" to="/about"> {props.about} </a>
 </li>
        
    
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input"onClick={props.ToggleMode} type="checkbox"role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode1} htmlFor="flexSwitchCheckDefault"`}>Enable Dark Mode</label>
</div>
   
    </div>
  </div>
</nav>

    
   
  )
}

// To check wheter the value put satisfies your commands or not
  Navbar.propTypes = {
    title:  propTypes.string.isRequired,
    about: propTypes.string
  }

 // To set default value when no value is given
 Navbar.defaultProps = {
  title:"Title Here",
   about:'About Here'
 };
