import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const IndividualPlan =({plan}) => {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const themeChoice = theme === 'light' ? light : dark;
    const user = useSelector((state) => state.session.user ? state.session.user : null);

    // useEffect(() => {
    //     if(user) {
    //         setUserId(user.id)
    //     }
    // }, []);

    return (
        <div></div>
    )
}

export default IndividualPlan;