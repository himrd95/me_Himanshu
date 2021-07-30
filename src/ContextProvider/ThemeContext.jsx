import React, { createContext } from 'react';

const ThemeContext = createContext();
const theme = {
	dark: {
		background: '#091425',
		imageBackground: '#19161d',
		title: ''
	},
	light: {
		background: '#fefaf6',
		imageBackground: '#fbe5ef',
		title: ''
	}
};

const ThemeContextProvider = ({ children }) => {
	const value = {};
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
