import React, { createContext, useState } from 'react';
import { theme } from '../Utils/themes';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [
		mode,
		setMode
	] = React.useState('dark');

	const handleMode = () => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	};

	const newTheme = theme[mode];

	const value = { mode, newTheme, handleMode };
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContextProvider };
