import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { ThemeContext } from '../../context/ThemeContext';
import { light, dark, Theme } from '../../data/theme';
import { creatingRecipes } from '../../store/mykitchen';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import TabsRender from '../Tabs';

const Page = styled.body`
    background-color: black;
`

function MyKitchen () {
    const { setTheme, light, dark, theme, rootEl } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;
    const [title, setTitle] = useState('');
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [instructions, setInstructions] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [userId, setUserId] = useState(null);
    rootEl.current.style= dark

    const user = useSelector((state) => state.session.user)

    useEffect(() => {
        if (user) {
            setUserId(user.id);
        }
    }, [user])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            title,
            name,
            type,
            description,
            instructions,
            ingredients,
        }
        await dispatchEvent(creatingRecipes(data))
    }

    
    return (
        <div>
            <TabsRender />
            <form>
                <input type='text' placeholder='title' onClick={(e) => setTitle(e.target.value)}></input>
            </form>
            <button type='submit' onSubmit={handleSubmit}>Button</button>
        </div>
    )
}

export default MyKitchen;