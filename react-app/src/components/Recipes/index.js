import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';
import { getAllRecipes } from '../../store/recipe';
import { useHistory } from 'react-router-dom';
import IndividualRecipe from '../IndividualRecipe';
import TabsRender from '../Tabs';


const Recipes = () => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const recipes = useSelector((state) => state.recipes);
    const allRecipes = Object.values(recipes);
    const [activeRecipe, setactiveRecipe] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    console.log(recipes)
    const themeChoice = theme === 'light' ? light : dark;
    useEffect(() => {
        (async() => { 
            await dispatch(getAllRecipes());
            setLoaded(!loaded);
        })();
    }, [isLoading])

    if(!recipes) return null;

    return (
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            <TabsRender />
        <i class="fas fa-house-user"></i>
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            {Object.values(recipes).map((recipe, i) => {
                return (
                    <a style={{border: '1px solid red'}} key={i} onClick={(e) => {
                        e.preventDefault()
                        setactiveRecipe(recipe)
                    }}>{recipe.title}</a>
                )
            })}
        </div>
            {activeRecipe && <IndividualRecipe recipe={activeRecipe} setIsLoading={setIsLoading}/>}
        </div>
    )
}

export default Recipes;