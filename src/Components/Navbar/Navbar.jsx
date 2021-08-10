import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Navbar.module.css";

const barStyle = {
	bar1: {
		position: "absolute",
		width: "15px",
		transform: "rotate(45deg)",
	},
	bar2: {
		position: "absolute",
		left: "-2px",
	},
	bar3: {
		position: "absolute",
		width: "15px",
		transform: "rotate(-45deg)",
	},
};

const Navbar = () => {
	const [preScrollPos, setPreScrollPos] = useState(
		window.pageYOffset,
	);
	// const [state, setState] = useState(true);
	const navRef = useRef();
	
	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (preScrollPos > currentScrollPos) {
			navRef.current.style.top = "0";
		} else {
			navRef.current.style.top = "-80px";
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
				<div className={styles.logo}><img src="https://www.alamy.com/stock-photo-letter-h-logo-icon-design-template-elements-vector-102726571.html?pv=1&stamp=2&imageid=CA8A050E-41DE-4A15-8432-2E11A03AA0AE&p=304864&n=0&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3dbar%26st%3d0%26pn%3d1%26ps%3d100%26sortby%3d2%26resultview%3dsortbyPopular%26npgs%3d0%26qt%3dh%2520logo%26qt_raw%3dh%2520logo%26lic%3d3%26mr%3d0%26pr%3d0%26ot%3d0%26creative%3d%26ag%3d0%26hc%3d0%26pc%3d%26blackwhite%3d%26cutout%3d%26tbar%3d1%26et%3d0x000000000000000000000%26vp%3d0%26loc%3d0%26imgt%3d0%26dtfr%3d%26dtto%3d%26size%3d0xFF%26archive%3d1%26groupid%3d%26pseudoid%3d%26a%3d%26cdid%3d%26cdsrt%3d%26name%3d%26qn%3d%26apalib%3d%26apalic%3d%26lightbox%3d%26gname%3d%26gtype%3d%26xstx%3d0%26simid%3d%26saveQry%3d%26editorial%3d1%26nu%3d%26t%3d%26edoptin%3d%26customgeoip%3d%26cap%3d1%26cbstore%3d1%26vd%3d0%26lb%3d%26fi%3d2%26edrf%3d%26ispremium%3d1%26flip%3d0%26pl%3d" alt="" /></div>

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#techStacks">Profeciencies</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</div>
				<button
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					{mode === "light" ? (
						<i className="fas fa-moon" />
					) : (
						<i className="fas fa-sun" />
					)}
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={ open ? {background: `${newTheme.title}`} : barStyle.bar1}
					></div>
					<div
						style={open ? {background: `${newTheme.title}`} : barStyle.bar2}
					></div>
					<div
						style={open ? {background: `${newTheme.title}`} : barStyle.bar3}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
