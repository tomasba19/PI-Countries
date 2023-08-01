import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Card.module.css';

const Card = (props) => {
    return(
        <NavLink className={styles.NavLink} to={`/countries/${props.id}`}>
            <div className={styles.card}>
                <div className={styles.cardinfo}>
                    <div>
                    <img src={props.image} alt="" className={styles.image}/>
                    <h1 className={styles.title}>{props.name}</h1>
                    <h2 className={styles.title}>{props.continents}</h2>
                    </div> 
                </div>
            </div>
        </NavLink>
    )
}
export default Card;