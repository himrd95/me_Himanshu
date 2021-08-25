import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(-45deg)',
	},
};

const Navbar = () => {
	const [preScrollPos, setPreScrollPos] = useState(
		window.pageYOffset,
	);
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (preScrollPos > currentScrollPos) {
			navRef.current.style.top = '0';
		} else {
			navRef.current.style.top = '-80px';
		}
		setPreScrollPos(currentScrollPos);
	};

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
		>
			<div className={styles.navbar}>
				<a href='https://himrd95.github.io/me_Himanshu/'>
					<div className={styles.logo}>
						<img
							src='https://github.com/himrd95/portfolio/blob/main/src/assets/logo_new.png?raw=true'
							alt='Logo'
						/>
					</div>
				</a>

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<a href='#home'>Home</a>
					<a href='#about'>About</a>
					<a href='#experience'>Experience</a>
					<a href='#projects'>Projects</a>

					<a href='#contact'>Contact</a>
				</div>
				<button
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					{mode === 'light' ? (
						<i className='fas fa-moon' />
					) : (
						<i className='fas fa-sun' />
					)}
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
