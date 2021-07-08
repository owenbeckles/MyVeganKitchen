import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIndividualRecipe } from '../../store/recipe';
import { ThemeContext } from '../../context/ThemeContext';
import { useParams } from 'react-router-dom';

const IndividualRecipe = ({recipe}) => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const { id } = useParams();
    const recipes = useSelector((state) => state.recipes[id]);
    const history = useHistory();
    const themeChoice = theme === 'light' ? light : dark;


    useEffect(() => {
        dispatch(getIndividualRecipe());
    }, [])

    return (
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            {/* <div>Hi</div>
            <div className='button'>Button</div> */}
            <div>
                <h1 style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.title}</h1>
            </div>
            <div>
                <h2 style={{backgroundColor: themeChoice.background, color: themeChoice.text}}><mark>{recipe.type}</mark></h2>
            </div>
            <div>
                <h3 style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{recipe.instructions}</h3>
            </div>
        </div>
    )
}

export default IndividualRecipe;