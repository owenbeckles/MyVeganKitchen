import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIndividualRecipe } from '../../store/recipe';
import { useParams } from 'react-router-dom';

const IndividualRecipe = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const recipe = useSelector((state) => state.recipes[id]);
    const history = useHistory();

    useEffect(() => {
        dispatch(getIndividualRecipe());
    }, [])

    return (
        <div>
            <div>Hi</div>
            <div className='button'>Button</div>
            <div>
                {/* <h1>{recipe.title}</h1> */}
            </div>
        </div>
    )
}

export default IndividualRecipe;