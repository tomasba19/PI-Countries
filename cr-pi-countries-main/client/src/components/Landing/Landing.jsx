import React from 'react';
import styles from './Landing.module.css';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className={styles.landingCont}>
        <h1 className={styles.landingH1}>Henry Countries</h1>
        <h2 className={styles.landingH2}>Discover, Explore and Connect.</h2>
        <Link to="./home">
          <button className={styles.landingButton}>Get started</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;