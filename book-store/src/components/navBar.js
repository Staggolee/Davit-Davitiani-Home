import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';


const NavBar = () => (
    <div className="nav">
        <NavLink className="link" to="/" activeClassName="is-active"> Home</NavLink>
        <NavLink className="link" to="/Details" activeClassName="is-active"> Details</NavLink>
        <NavLink className="link" to="/Favorites" activeClassName="is-active"> Favorites</NavLink>
       </div>  
)

 
 


export default NavBar