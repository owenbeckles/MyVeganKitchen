import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIndividualRecipe } from '../../store/recipe';
import { postComments } from '../../store/comment';
import { ThemeContext } from '../../context/ThemeContext';
import { useParams } from 'react-router-dom';
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

const IndividualRecipe = ({recipe, setIsLoading}) => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const [comment, setComment] = useState('');
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const recipes = useSelector((state) => state.recipes[id]);
    const [userId, setUserId] = useState(null);
    const [recipeId, setRecipeId] = useState(null);
    const [comments, setComments] = useState(null);
    const user = useSelector((state) => state.session.user ? state.session.user : null);
    const history = useHistory();
    const themeChoice = theme === 'light' ? light : dark;
    const instructions = recipe.ingredients.split(';')
    let image;
    console.log(instructions);

    if (recipe.title === 'Vegan Quesadillas') {
        image = veganquesadillas
    } else if (recipe.title === 'Spring Rolls') {
        image = springrolls
    } else if (recipe.title === 'Air Fried BBQ Oyster Mushrooms') {
       image = oystermushrooms 
    } else if (recipe.title === 'Homemade French Toast') {
        image = frenchtoast
    } else if (recipe.title === 'Vegan Lox') {
        image = veganlox
    } else if (recipe.title === 'Tofu Scramble') {
        image = tofuscramble
    } else if (recipe.title === 'Avocado Toast') {
        image = avocadotoast
    } else if (recipe.title === 'General Tso Portobello Mushrooms') {
        image = generaltso
    } else if (recipe.title === 'Cheesy Walnut Meat Gnocchi') {
        image = walnutmeat
    } else if (recipe.title === 'Homemade Vegetable Egg Rolls') {
        image = eggrolls
    } else if (recipe.title === 'Avocado Wontons') {
        image = wontons
    } else {
        image = nachos
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
        console.log('This is data', data)
        const { comments: cs } = await dispatch(postComments(data));
        setComments(cs);
        setIsLoading((prev) => !prev);
        setComment('')
    }

    

    return (
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            {/* <div>Hi</div>
            <div className='button'>Button</div> */}
            <div class='mt-8'>
                <h1 className='recipe-title' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.title}</h1>
                {}
            </div>
            <div class='flex justify-center pt-4'>
            <button className={theme === 'light' ? "text-peach bg-transparent border border-solid border-peach hover:bg-peach hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" : "text-avocado bg-transparent border border-solid border-avocado hover:bg-avocado hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"} type="button">Add to My Kitchen</button>
            </div>
            <div class='flex justify-center my-16'>
            <img src={image} style={{width:'300px', height:'300px'}}></img>
            </div>
            <div class="rounded h-full flex justify-start items-center float-left mx-8">
  <div class={theme === 'light' ? "rounded bg-white shadow-md h-max w-96 p-6 flex flex-col" : "rounded bg-dark-bg border-style:solid border-gray-50 shadow-md h-max w-96 p-6 flex flex-col"}>
  <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
                {instructions.map(instruction => {
                    return (
                        <li>{instruction}</li>
                    )
                })}
            </div>
            
    {/* <div>
      <p class="text-base text-gray-600">{recipe.type}</p>
    </div>
    <div>
      <p class="text-2xl text-gray-700 font-bold">Ingredients</p>
    </div>
    <div class="text-sm">
      <p class="text-green-500 mb-1 flex item-center">
        <i class="material-icons"></i> 
      </p>
      <p class="text-gray-600"></p>
    </div> */}
  </div>
</div>
<h3 className='recipe-instructions' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.instructions}</h3>
            {/* <div>
                <img src={image} style={{width:'300px', height:'300px'}}></img>
                <h3 className='recipe-instructions' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.instructions}</h3>
            </div> */}
            {/* <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
                {instructions.map(instruction => {
                    return (
                        <li>{instruction}</li>
                    )
                })}
            </div> */}
            {/* <div>
                <h3 className='recipe-instructions' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.instructions}</h3>
            </div> */}

            <div>
                {/* <form>
                    <label>
                        <textarea type='text' value={comment} placeholder='Comment...' onChange={(e) => setComment(e.target.value)}></textarea>
                    </label>
                </form> */}
                <div>
                    {/* <button onClick={handleClick}>Comment</button> */}
                </div>
                {/* <button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
  Click me
</button> */}

            </div>
            <div className={theme === 'light' ? "bg-light-bg sm:rounded-lg" : "bg-dark-bg sm:rounded-lg"}>
      <div className="px-4 py-5 sm:p-6">
        <h3 className={theme === 'light' ? "text-lg leading-6 font-medium text-gray-900" : "text-lg leading-6 font-medium text-gray-text"}>Leave a Comment</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500 flex justify-center">
          <p><em>Like this recipe? Leave a comment and let us know why!</em></p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Comment
            </label>
            <textarea
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}  
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Say something..."
            />
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className={theme === 'light' ? "mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-peach hover:bg-white hover:text-peach focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" : "mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-avocado hover:bg-white hover:text-avocado focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}
          >
            Comment
          </button>
        </form>
      </div>
    </div>
    <div>
                {comments ? comments.map(({comment}) => {
                    return (
                        <div>{comment}</div>
                    )
                }) : recipe.comment?.map(({comment}) => {
                    return (
                        <div>{comment}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default IndividualRecipe;