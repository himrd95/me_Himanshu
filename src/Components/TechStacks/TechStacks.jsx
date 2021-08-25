import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Proficiencies
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div className={styles.logoWrapper}>
					<i className='devicon-html5-plain colored' />
					<p style={{ color: `${newTheme.title}` }}>HTML</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-css3-plain colored' />
					<p style={{ color: `${newTheme.title}` }}>CSS</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-javascript-plain colored' />
					<p style={{ color: `${newTheme.title}` }}>Javascript</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-react-original colored' />
					<p style={{ color: `${newTheme.title}` }}>React</p>
				</div>
				<div className={styles.logoWrapper}>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<p style={{ color: `${newTheme.title}` }}>Redux</p>
				</div>
				<div className={styles.logoWrapper}>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<p style={{ color: `${newTheme.title}` }}>Node</p>
				</div>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<p>Express</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-mongodb-plain colored' />
					<p style={{ color: `${newTheme.title}` }}>MongoDB</p>
				</div>
			</div>
		</div>
	);
};

export default TechStacks;
