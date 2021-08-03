import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
	const [
		preScrollPos,
		setPreScrollPos
	] = useState(window.pageYOffset);
	const [
		state,
		setState
	] = useState(true);
	const navRef = useRef();
	const { newTheme, mode, handleMode } = useContext(ThemeContext);

	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (preScrollPos > currentScrollPos) {
			navRef.current.style.top = '0';
		} else {
			navRef.current.style.top = '-80px';
		}
		setPreScrollPos(currentScrollPos);
	};
	console.log(mode);
	return (
		<nav ref={navRef} className={styles.navContainer} style={{ background: `${newTheme.background}` }}>
			<div className={styles.navbar}>
				<div className={styles.logo}>Logo</div>

				<div style={{ color: `${newTheme.title}` }} className={styles.links}>
					<a href="#about">About</a>
					<a href="#techStacks">Profeciencies</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</div>
				<button style={{ color: `${newTheme.title}` }} className={styles.modeButton} onClick={handleMode}>
					{mode === 'light' ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

// export default class Navbar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       prevScrollpos: window.pageYOffset,
//       visible: true
//     };
//   }

//   // Adds an event listener when the component is mount.
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   // Remove the event listener when the component is unmount.
//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   // Hide or show the menu.
//   handleScroll = () => {
//     const { prevScrollpos } = this.state;

//     const currentScrollPos = window.pageYOffset;
//     const visible = prevScrollpos > currentScrollPos;

//     this.setState({
//       prevScrollpos: currentScrollPos,
//       visible
//     });
//   };

//   render() {
//     return (
//       <nav
//         className={classnames("navbar", {
//           "navbar--hidden": !this.state
//         })}
//       >
//         <a href="#">Item 1</a>
//         <a href="#">Item 2</a>
//         <a href="#">Item 3</a>
//       </nav>
//     );
//   }
// }
