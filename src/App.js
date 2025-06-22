import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ThemeContext } from './ContextProvider/ThemeContext';
import { projects } from './constants/Projects';

function App() {
	const { newTheme } = useContext(ThemeContext);

	useEffect(() => {
		// Preload project images
		projects.forEach((project) => {
			const img = new Image();
			img.src = project.img;
		});
	}, []);

	return (
		<React.Fragment>
			<div
				className='components'
				style={{
					background: newTheme.background,
					color: newTheme.para,
					'--bg-default': newTheme.background,
					'--bg-highlight': newTheme.highlightBackground,
				}}
			>
				<Navbar />
				<Home />
			</div>
		</React.Fragment>
	);
}

export default App;
