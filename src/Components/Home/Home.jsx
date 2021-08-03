import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import Card from '../Card/Card';
import Typewriter from 'typewriter-effect';
import SideIcons from '../SideIcons/SideIcons';
import TechStacks from '../TechStacks/TechStacks';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button } from '../Button/Button';
import About from '../About/About';
import { projects } from '../../Utils/Projects';
import Contact from '../Contact/Contact';
import { ThemeContext } from '../../ContextProvider/ThemeContext';

const Home = ({ scrollRef }) => {
	const { newTheme } = React.useContext(ThemeContext);
	useEffect(() => {
		AOS.init();
	});

	useEffect(
		() => {
			document.body.style.backgroundColor = newTheme.background;
		},
		[
			newTheme
		]
	);
	return (
		<div ref={scrollRef}>
			<SideIcons />
			<div id="top" className={styles.profile}>
				<img
					className={styles.profileImage}
					src="https://github.com/himrd95/portfolio/blob/main/src/assets/profile.png?raw=true"
					alt=""
				/>
				<div data-aos="fade-zoom-out" className={styles.intro}>
					<h1>
						<span>Hi, My name is</span> <span className={styles.name}>Himanshu Dwivedi.</span>
					</h1>
					<h1>
						<Typewriter
							options={{
								strings: [
									'I am a Full Stack Deveoper.',
									'I build things for web.'
								],
								autoStart: true,
								loop: true,
								delay: 'natural',
								deleteSpeed: 25,
								pauseFor: 1000
							}}
						/>
					</h1>
					<div className={styles.btn}>
						<Button text={'Get in Touch'} />
					</div>
				</div>
			</div>

			<TechStacks />

			<div id="about" style={{ background: `${newTheme.line}` }} className={styles.line} />

			<About />

			<div id="projects" style={{ background: `${newTheme.line}` }} className={styles.line} />
			<div className={styles.projects}>
				<h1  style={{ color: `${newTheme.title}` }} className={styles.heading}>Few Things I've Build</h1>
				<div className={styles.borderBottom} />
			</div>
			<div>{projects.map((item) => <Card {...item} />)}</div>

			<div style={{ background: `${newTheme.line}` }} className={styles.line} />

			<div
				data-aos="fade-right"
				data-aos-offset="200"
				data-aos-easing="ease-in-sine"
				data-aos-duration="800"
				className={styles.extraIntro}
				style={{ color: `${newTheme.para}` }}
			>
				"Himanshu is not only great for development, he is a problem solver who always delivers an exceptional
				quality of work. Highly recommended."
			</div>
			<div id="contact" style={{ background: `${newTheme.line}` }} className={styles.line} />
			<Contact />
		</div>
	);
};

export default Home;
