import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIndividualRecipe } from '../../store/recipe';
import { postComments } from '../../store/comment';
import { ThemeContext } from '../../context/ThemeContext';
import { useParams } from 'react-router-dom';

const IndividualRecipe = ({recipe}) => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const { id } = useParams();
    const recipes = useSelector((state) => state.recipes[id]);
    const [userId, setUserId] = useState(null);
    const [recipeId, setRecipeId] = useState(null);
    const user = useSelector((state) => state.session.user ? state.session.user : null);
    const history = useHistory();
    const themeChoice = theme === 'light' ? light : dark;
    const instructions = recipe.ingredients.split(';')
    let image;
    console.log(instructions);

    if (recipe.title === 'Vegan Quesadillas') {
        image = 1
    } else if (recipe.title === 'Spring Rolls') {
        image = 2
    } else if (recipe.title === 'Air Fried BBQ Oyster Mushrooms') {
       image = 3 
    } else if (recipe.title === 'Homemade French Toast') {
        image = 4
    } else if (recipe.title === 'Vegan Lox') {
        image = 5
    } else if (recipe.title === 'Tofu Scramble') {
        image = 6
    } else if (recipe.title === 'Avocado Toast') {
        image = 7
    } else if (recipe.title === 'General Tso Portobello Mushrooms') {
        image = 8
    } else if (recipe.title === 'Cheesy Walnut Meat Gnocchi') {
        image = 9
    } else if (recipe.title === 'Homemade Vegetable Egg Rolls') {
        image = 10
    } else if (recipe.title === 'Avocado Wontons') {
        image = 11
    } else {
        image = 12
    }

    useEffect(() => {
        if(user) {
            setUserId(user.id)
        }
    })

    useEffect(() => {
        dispatch(getIndividualRecipe());
    }, [])

    const handleClick = async(e) => {
        e.preventDefault()
        const data = {comment, recipeId: recipe.id}
        debugger
        console.log('This is data', data)
        await dispatch(postComments(data));
    }

    

    return (
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            {/* <div>Hi</div>
            <div className='button'>Button</div> */}
            <div>
                <h1 className='recipe-title' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.title}</h1>
                {}
            </div>
            <div>
                <h5 className='recipe-type' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}><mark>{recipe.type}</mark></h5>
            </div>
            <div>
                <img href={`${image}.png`}></img>
            </div>
            <div>
                <h4 style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.ingredients}</h4>
            </div>
            <div>
                <h3 className='recipe-instructions' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.instructions}</h3>
            </div>
            <div>
                <form>
                    <label>
                        <textarea type='text' value={comment} placeholder='Comment...' onChange={(e) => setComment(e.target.value)}></textarea>
                    </label>
                </form>
                <div>
                    <button onClick={handleClick}>Comment</button>
                </div>
                {/* <button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
  Click me
</button> */}
<button className="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
  <i className="fas fa-heart"></i> Add to My Kitchen
</button>
            </div>
        </div>
    )
}

export default IndividualRecipe;