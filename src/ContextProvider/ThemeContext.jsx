import React, { createContext, useEffect } from 'react';
import { theme } from '../constants/themes';
// import { currentTime } from '../Utils/Time';

// const getTheme = () => {
// 	const time = currentTime();
// 	let mode = '';
// 	if (time > 18 && time < 6.01) {
// 		mode = 'light';
// 	} else {
// 		mode = 'dark';
// 	}
// 	return mode;
// };
const getMode = JSON.parse(localStorage.getItem('theme')) || 'dark';
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = React.useState(getMode);

	const handleMode = () => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(mode));
	}, [mode]);

	const newTheme = theme[mode];

	const value = { mode, newTheme, handleMode };
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContextProvider };
