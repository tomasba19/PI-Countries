import React from "react";
import Cards from "../../components/Cards/Cards.jsx"
import styles from "./Home.module.css";

const Home = () => {
    return(
        <div className={styles.cardCont}>
            <Cards />
        </div>
    );
};
export default Home;
