import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { ThemeContext } from '../context/ThemeContext';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import { light, dark } from '../data/theme'

const NavBar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      <Switch 
        color="green"
        onChange={(() => theme === 'light' ? setTheme('dark') : setTheme('light'))} />
    </nav>
  );
}

export default NavBar;
