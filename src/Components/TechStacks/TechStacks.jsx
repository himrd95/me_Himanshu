import React from 'react';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	return (
		<div
			data-aos="fade-zoom-in"
			data-aos-offset="200"
			data-aos-easing="ease-in-sine"
			data-aos-duration="800"
			className={styles.techStacks}
		>
			<h2 className={styles.heading}>Proficiencies</h2>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div className={styles.logoWrapper}>
					<i className="devicon-html5-plain colored" />
					<p>HTML</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className="devicon-css3-plain colored" />
					<p>CSS</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className="devicon-javascript-plain colored" />
					<p>Javascript</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className="devicon-react-original colored" />
					<p>React</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className="devicon-redux-original" />
					<p>Redux</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className="devicon-nodejs-plain" />
					<p>Node</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className="devicon-express-original" />
					<p>Express</p>
				</div>
				<div className={styles.logoWrapper}>
					<i className="devicon-mongodb-plain colored" />
					<p>MongoDB</p>
				</div>
				{/* <div className={styles.logoWrapper}>
					<i className="devicon-redis-plain colored" />
					<p>Redis</p>
				</div> */}
			</div>
		</div>
	);
};

export default TechStacks;
