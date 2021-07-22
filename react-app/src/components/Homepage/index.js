import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useHistory } from 'react-router-dom';
import SplashPage from '../SplashPage';
import veganquesadillas from '../../images/1.png';
import springrolls from '../../images/2.png';
import oystermushrooms from '../../images/3.png';
import frenchtoast from '../../images/4.png';
import veganlox from '../../images/5.png';
import tofuscramble from '../../images/6.png';
import avocadotoast from '../../images/7.png';
import generaltso from '../../images/8.png';
import walnutmeat from '../../images/9.png';
import eggrolls from '../../images/10.png';
import wontons from '../../images/11.png';
import nachos from '../../images/12.png';



const Homepage = () => {
    const history = useHistory();
    let featured = Math.floor(Math.random() * 12)
    console.log(featured)

    let image;

    const [activeRecipe, setactiveRecipe] = useState(false);

    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const recipes = useSelector((state) => state.recipes);
    const user = useSelector((state) => state.session.user)

    const themeChoice = theme === 'light' ? light : dark;

    if (featured === 1) {
        image = veganquesadillas
        recipes.title = 'Vegan Quesadillas'
    } else if (featured === 2) {
        image = springrolls
        recipes.title = 'Spring Rolls'
    } else if (featured === 3) {
       image = oystermushrooms
       recipes.title = 'Air Fried BBQ Oyster Mushrooms' 
    } else if (featured === 4) {
        image = frenchtoast
        recipes.title = 'Homemade French Toast'
    } else if (featured === 5) {
        image = veganlox
        recipes.title = 'Vegan Lox'
    } else if (featured === 6) {
        image = tofuscramble
        recipes.title = 'Tofu Scramble'
    } else if (featured === 7) {
        image = avocadotoast
        recipes.title = 'Avocado Toast'
    } else if (featured === 8) {
        image = generaltso
        recipes.title = 'General Tso Portobello Mushrooms'
    } else if (featured === 9) {
        image = walnutmeat
        recipes.title = 'Cheesy Walnut Meat Gnocchi'
    } else if (featured === 10) {
        image = eggrolls
        recipes.title = 'Homemade Vegetable Egg Rolls'
    } else if (featured === 11) {
        image = wontons
        recipes.title = 'Avocado Wontons'
    } else {
        image = nachos
        recipes.title = 'Loaded Nachos'
    }

    const handleClick = () => {
        history.push('/recipes')
        setactiveRecipe(recipes.title)
    }
    
    return (
        <div class={theme === 'light' ? 'bg-light-bg' : 'bg-dark-bg text-grey-text'}>
            {/* <div class='ml-48 pt-8 flex flex-col'>
                <h1 class='text-4xl'>Welcome Back, {user.username}!</h1>
                <br></br>
                <br></br>
                <div class=''><h1 >Looking to share your knowledge on the newest superfood? <em class={theme === 'light' ? 'hover:text-peach' : 'hover:text-avocado'}><NavLink to='/create'>Create a new post.</NavLink></em></h1></div>
                <br></br>
                <br></br>
                <div class=''><h1>Need a new go-to meal? Make sure to stay updated on our <em class={theme === 'light' ? 'hover:text-peach' : 'hover:text-avocado'}><NavLink to='/recipes'>latest recipes.</NavLink></em></h1></div>
                <br></br>
                <br></br>
                <div class=''><h1>Trying to view all the recipes you've saved? Head over to <em class={theme === 'light' ? 'hover:text-peach' : 'hover:text-avocado'}>My Kitchen.</em></h1></div>
            </div>
            <div class='mr-16'>
            <div class='mb-64'>
            <h1 class='flex justify-end mr-40 pb-4'><em><strong><NavLink to='/recipes'>Featured Recipe</NavLink></strong></em></h1>
            <div class='flex justify-end mr-16'>
                <img src={image} class='w-3/12 h-3/12'></img>
            </div>
            <div class='mr-40 pt-8'>
                <h1 onClick={handleClick} class={theme === 'light' ? 'hover:text-peach flex justify-end' : 'hover:text-avocado flex justify-end'}><NavLink to='/recipes' exact={true}>{recipes.title}</NavLink></h1>
            </div>
            </div>
            </div> */}
            <SplashPage />
        </div>
    )
}

export default Homepage;