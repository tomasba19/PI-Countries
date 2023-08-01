import { getCountryByName } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './SearchBar.module.css';
import Exit from '../../Images/exit.png';
import { NavLink } from "react-router-dom"

export const SearchBar = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value;
        setName(value);
        dispatch(getCountryByName(name));
    };

    return (
      <div className={styles.sidenave}>
        <NavLink to="/">
            <img src={Exit} alt="" className={styles.image2} />
        </NavLink> 
        
        <div>
          <input
            className={styles.input}
            placeholder="Search a country..."
            type="search"
            onChange={handleChange}
            value={name}
          />
        </div>
        </div>
    );
};