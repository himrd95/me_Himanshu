import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Card from '../Card/Card';
import SideIcons from '../SideIcons/SideIcons';
import TechStacks from '../TechStacks/TechStacks';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button } from '../Button/Button';
import About from '../About/About';
import { projects } from '../../constants/Projects';
import Contact from '../Contact/Contact';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import Experiences from '../Experiences/Experiences';
import { greeting, intro, myName } from '../../constants/constants';
import { ASSETS } from '../../constants/links';

const Home = ({ scrollRef }) => {
	const [projectArray, setProjectArray] = useState(
		projects.slice(0, 4),
	);
	const { newTheme } = React.useContext(ThemeContext);
	const [offset, setOffset] = useState(0);
	const [location, setLocation] = useState(0);

	useEffect(() => {
		AOS.init();
	});

	const handleOffset = () => {
		setOffset(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleOffset);
		return () => window.removeEventListener('scroll', handleOffset);
	}, []);

	useEffect(() => {
		document.body.style.backgroundColor = newTheme.background;
	}, [newTheme]);

	const handleButton = () => {};

	// console.log(offset);
	const handleShowMoreBtn = () => {
		if (projects.length === projectArray.length) {
			setProjectArray(projects.slice(0, 4));
			window.scrollTo(0, location);
		} else {
			setProjectArray(projects);
			setLocation(offset);
		}
	};

	const introStyle = {
		color: `${newTheme.para}`,
		// transform: `translateX(-${offset * 2.5}px)`,
		transform: `scale(${1 - offset / 1000})`,
		opacity: `${offset > 200 ? '0' : offset > 160 ? '.5' : '1'}`,
	};

	return (
		<div ref={scrollRef}>
			<SideIcons />
			<div
				id='home'
				className={styles.profile}
				style={{
					backgroundColor: `${newTheme.imgBackground}`,
					transition: '.3s',
					// transform: `scale(${1 - offset / 1000})`,
					opacity: `${
						offset > 300 ? '0' : offset > 160 ? '.5' : '1'
					}`,
				}}
			>
				<div
					data-aos='fade-zoom-out'
					className={styles.intro}
					style={introStyle}
				>
					<h1>
						<span>{greeting}</span>
						<div
							className={styles.name}
							style={{ color: `${newTheme.title}` }}
						>
							{myName}
						</div>
					</h1>
					<h1>{intro}</h1>
					<div className={styles.btn}>
						<a
							href='https://github.com/himrd95/me_Himanshu/blob/main/public/him_resume.pdf'
							target='_blank'
							rel='noreferrer'
						>
							<Button
								text={
									<span className={styles.resumeBtn}>
										<span>Resume</span>
										<i className='fas fa-file-download'></i>
									</span>
								}
								handleButton={handleButton}
							/>
						</a>
					</div>
				</div>

				<div
					style={{
						// transform: `translateX(${offset * 2.5}px)`,
						transform: `scale(${1 - offset / 1000})`,
						opacity: `${
							offset > 300 ? '0' : offset > 160 ? '.5' : '1'
						}`,
					}}
					className={styles.profileImage}
				>
					<img src={ASSETS.PROFILE} alt='Profile pic' />
				</div>
			</div>

			<div
				id='about'
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
				className={styles.experience}
			>
				<About />
			</div>

			<div id='techStacks' className={styles.techStacks}>
				<TechStacks />
			</div>

			<div
				id='experience'
				className={styles.experience}
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
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<Contact />
			</div>
		</div>
	);
};

export default Home;
