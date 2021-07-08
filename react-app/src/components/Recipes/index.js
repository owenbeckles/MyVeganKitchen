import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';
import { getAllRecipes } from '../../store/recipe';
import { useHistory } from 'react-router-dom';


const Recipes = () => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const recipes = useSelector((state) => state.recipes);
    const allRecipes = Object.values(recipes);

    const themeChoice = theme === 'light' ? light : dark;

    useEffect(() => {
        dispatch(getAllRecipes());
    })

    if(!recipes) return null;

    return (
        <div>
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}><mark>Hello, this is a test.</mark></div>
        <i class="fas fa-house-user"></i>
        <div>
            {allRecipes.map(recipe => {
                return (
                    <h1>{recipe.title}</h1>
                )
            })}
        </div>

        </div>
    )
}

export default Recipes;