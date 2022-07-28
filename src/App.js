import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ASSETS } from './constants/links';
import { ThemeContext } from './ContextProvider/ThemeContext';
import { assetsPromise } from './Utils/helpers';

function App() {
	const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		React.useContext(ThemeContext);
	const scrollRef = useRef();

	const fetchAllAssets = useCallback((assets) => {
		let flag = false;
		setTimeout(() => {
			flag = true;
		}, 2200);

		Promise.all(assetsPromise(assets))
			.then((res) => {
				// console.log(res, 'res');
				flag
					? setState(true)
					: setTimeout(() => {
							setState(true);
					  }, 1000);
			})
			.catch(() => setState(false));
	}, []);

	useEffect(() => {
		fetchAllAssets();
		setTimeout(() => {
			setState(true);
		}, 2200);
	}, [fetchAllAssets]);

	return (
		<React.Fragment>
			{!state ? (
				<div
					style={{
						background: `${newTheme.background}`,
					}}
					className='logoStart'
				>
					<img src={ASSETS.LOGO} alt='logo' />
				</div>
			) : (
				<div className='components'>
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<a onClick={handleMenu} href='#home'>
							Home
						</a>
						<a onClick={handleMenu} href='#about'>
							About
						</a>
						<a onClick={handleMenu} href='#experience'>
							Experience
						</a>

						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						<a onClick={handleMenu} href='#techStacks'>
							Profeciencies
						</a>
						<a onClick={handleMenu} href='#contact'>
							Contact
						</a>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			)}
		</React.Fragment>
	);
}

export default App;
