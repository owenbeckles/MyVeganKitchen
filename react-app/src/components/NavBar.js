import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { ThemeContext } from '../context/ThemeContext';
import Switch from '@material-ui/core/Switch';
import { createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { light, dark } from '../data/theme'

const NavBar = () => {
  const { setTheme, light, dark, theme } = useContext(ThemeContext);

  const themeChoice = theme === 'light' ? light : dark;
  
  const button = createTheme({
    palette: {
      primary: {
        main: '#388e3c'
      }
    }
  })

  return (
    <nav style={{backgroundColor: themeChoice.background}}>
      <div>
        <div className='navbar-container'>
          <NavLink to='/' exact={true} style={{color: themeChoice.title}} className='mvk-title'>
            My Vegan Kitchen
          </NavLink>
        </div>
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
          color="primary"
          onChange={(() => theme === 'light' ? setTheme('dark') : setTheme('light'))}
          button={button} />
        </div>
    </nav>
  );
}

export default NavBar;
