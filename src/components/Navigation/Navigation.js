import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const activeStyle = {
  color: '#f5963d',
};

const Navigation = () => (
  <ul className={styles.pagesList}>
    <li>
      <NavLink to="/" exact activeStyle={activeStyle} className={styles.page}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/movies"
        exact
        activeStyle={activeStyle}
        className={styles.page}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
