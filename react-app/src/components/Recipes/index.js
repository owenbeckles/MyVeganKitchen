import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';


const Recipes = () => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);

    const themeChoice = theme === 'light' ? light : dark;
    return (
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>Hello</div>
    )
}

export default Recipes;