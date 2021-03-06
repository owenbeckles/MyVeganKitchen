import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { ThemeContext } from '../../context/ThemeContext';


const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  const { setTheme, light, dark, theme } = useContext(ThemeContext);

  const themeChoice = theme === 'light' ? light : dark;

  return (
    <div class='pl-4'>
    <button onClick={onLogout}>Logout</button>
    </div>
  )
};

export default LogoutButton;
