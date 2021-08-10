import React, { createContext, useState } from 'react';
import { theme } from '../Utils/themes';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [
		mode,
		setMode
	] = React.useState('dark');

	const [open, setOpen] = React.useState(true);

	const handleMode = () => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	};

	const handleMenu = ()=>{
		setOpen(!open)
	}

	const newTheme = theme[mode];

	const value = { mode, newTheme, handleMode, open, handleMenu };
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContextProvider };
