import React, { createContext, useState, useRef } from 'react';
import { light, dark } from '../data/theme';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light')
    const rootEl = useRef(document.getElementById('root'))
    return (
        <ThemeContext.Provider value={{theme, setTheme, light, dark, rootEl}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

