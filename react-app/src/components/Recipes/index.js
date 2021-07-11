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
    const [title, setTitle] = useState('hover:text-peach')
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
        <div className='flex flex-col' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            <i class="fas fa-house-user"></i>
        <div className='flex flex-col justify-between pt-5 pb-16 pl-16' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            {Object.values(recipes).map((recipe, i) => {
                return (
                    <a className={theme === 'light' ? 'hover:text-peach pb-16' : 'hover:text-avocado pb-16'} key={i} onClick={(e) => {
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