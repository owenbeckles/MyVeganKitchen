import React, { createContext, useState } from 'react';
import { light, dark } from '../data/theme';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={{theme, setTheme, light, dark}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

