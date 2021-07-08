import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';
import { getIndividualRecipe, getAllRecipes } from '../../store/recipe';


const Recipes = () => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);

    const themeChoice = theme === 'light' ? light : dark;
    return (
        <div>
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>Hello, this is a text.</div>
        {/* <i class="fas fa-sun"></i>
        <div class="fas fa-sun">Hi</div>
        <button class="... focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">
  Button
</button> */}
        </div>
    )
}

export default Recipes;