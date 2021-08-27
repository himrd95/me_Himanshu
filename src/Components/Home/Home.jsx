import React, { useEffect, useState } from 'react';
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
import Experiences from '../Experiences/Experiences';

const Home = ({ scrollRef }) => {
	const [projectArray, setProjectArray] = useState(
		projects.slice(0, 3),
	);
	const { newTheme } = React.useContext(ThemeContext);
	useEffect(() => {
		AOS.init();
	});

	useEffect(() => {
		document.body.style.backgroundColor = newTheme.background;
	}, [newTheme]);

	const handleButton = () => {};

	const handleShowMoreBtn = () => {
		if (projects.length === projectArray.length) {
			setProjectArray(projects.slice(0, 3));
		} else {
			setProjectArray(projects);
		}
	};
	return (
		<div ref={scrollRef}>
			<SideIcons />
			<div
				id='top'
				className={styles.profile}
				style={{ backgroundColor: `${newTheme.imgBackground}` }}
			>
				<img
					className={styles.profileImage}
					src='../../assets/profile_pic_without_background.png'
					alt='Profile pic'
				/>
				<div
					id='home'
					data-aos='fade-zoom-out'
					className={styles.intro}
					style={{ color: `${newTheme.para}` }}
				>
					<h1>
						<span>Hi, My name is</span>
						<div
							className={styles.name}
							style={{ color: `${newTheme.title}` }}
						>
							Himanshu Dwivedi.
						</div>
					</h1>
					<h1>
						<Typewriter
							options={{
								strings: [
									'I am a Full Stack Developer.',
									'I build things for web.',
								],
								autoStart: true,
								loop: true,
								delay: 'natural',
								deleteSpeed: 25,
								pauseFor: 1000,
							}}
						/>
					</h1>
					<div className={styles.btn}>
						<a href='https://raw.githubusercontent.com/himrd95/me_Himanshu/main/src/assets/Resume.pdf'>
							<Button
								text={
									<span className={styles.resumeBtn}>
										<span>Resume</span>{' '}
										<i className='fas fa-file-download'></i>
									</span>
								}
								handleButton={handleButton}
							/>
						</a>
					</div>
				</div>
			</div>

			<div id='about' className={styles.tagline}>
				<About />
			</div>

			<div
				id='experience'
				className={styles.tagline}
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<div
					data-aos='fade-right'
					data-aos-offset='150'
					data-aos-easing='ease-in-sine'
					data-aos-duration='700'
					style={{ color: `${newTheme.para}` }}
				>
					<Experiences />
					{/* "Himanshu is not only great for development, he is a problem
					solver who always delivers an exceptional quality of work.
					Highly recommended." */}
				</div>
			</div>

			{/* project section from here => */}
			<div id='projects' className={styles.projects}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					Few Things I've Build
				</h1>
				<div className={styles.borderBottom} />
				<div>
					{projectArray.map((item, index) => (
						<Card key={index} {...item} />
					))}
				</div>
				<Button
					text={
						projects.length !== projectArray.length
							? 'Show More'
							: 'Show Less'
					}
					handleButton={handleShowMoreBtn}
				/>
			</div>

			<div
				id='techStacks'
				className={styles.techStacks}
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<TechStacks />
			</div>
			<Contact />
		</div>
	);
};

export default Home;
