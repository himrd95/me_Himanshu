import React from 'react';
import styles from './About.module.css';

const About = () => {
	return (
		<div
			data-aos="fade-down"
			data-aos-offset="200"
			data-aos-easing="ease-in-sine"
			data-aos-duration="800"
			className={styles.container}
		>
			<div className={styles.first}>
				<img src="https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true" alt="" />
			</div>
			<div className={styles.second}>
				<h1 className={styles.heading}>About Me</h1>
				<div className={styles.borderBottom} />
				<p className={styles.aboutMe} style={{ color: '#8993b1' }}>
					Hello! My name is Himanshu and I enjoy creating things that live on the internet. My interest in web
					development started back in last year when I was tryng to edit things on web — taught me a lot about
					HTML & CSS!. <br /> Fast Forwarding to today, I built a number of web applications and 4 major
					projects. Learned a great deal about teamwork, leadership, and communication. After months of
					rigorous training, here I am
					<span style={{ color: 'pink' }}> looking for an opportunity as a full stack web developer</span>.
				</p>
			</div>
		</div>
	);
};

export default About;
