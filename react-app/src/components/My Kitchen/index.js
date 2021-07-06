import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { ThemeContext } from '../../context/ThemeContext';
import { light, dark, Theme } from '../../data/theme';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Page = styled.body`
    background-color: black;
`

function MyKitchen () {
    const { setTheme, light, dark, theme, rootEl } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;
    rootEl.current.style= dark
    return (
        <div>
        <body style={{backgroundColor: 'black'}}></body>
        </div>
    )
}

export default MyKitchen;