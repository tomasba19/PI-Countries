import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import HomeImage from '../../Images/home-page.png';
import Plus from '../../Images/add.png';
//import Exit from '../../Images/exit.png';

//AGREGAR BOTON PARA VOLVER AL LANDING

const NavBar = () => {
    return (
    
        <div className={styles.sidenav} >
            <NavLink to="/home">
            <img src={HomeImage} alt="" className={styles.image} />
            </NavLink>
            <NavLink to="/form">
            <img src={Plus} alt="" className={styles.image} />
            </NavLink>
        </div>
    
    )
}

export default NavBar;



/*

<div className={styles.sidenav2}>
        <NavLink to="/">
            <img src={Exit} alt="" className={styles.image2} />
        </NavLink>

*/