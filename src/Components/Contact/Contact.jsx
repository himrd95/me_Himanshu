import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';

const Contact = () => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<footer className={styles.footer}  style={{ background: `${newTheme.highlightBackground}` }}>
			<div className={styles.container}>
			<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
			<p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
				I'm currently actively looking for any new opportunities, in full-stack web development. If you are an
				employer looking for dedicated web developer, HIRE me before someone else does.
			</p>
			<div style={{ color: `${newTheme.title}` }} className={styles.contactOptions}>
				<a href="https://github.com/himrd95" aria-label="GitHub" target="_blank">
					<i class="fas fa-phone-alt" />
				</a>
				<a href="https://github.com/himrd95" aria-label="GitHub" target="_blank">
					<i class="fab fa-github" />
				</a>

				<a
					href="https://www.linkedin.com/in/himanshu-dwivedi-861205112/"
					aria-label="Linkedin"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fab fa-linkedin-in" />
				</a>
			</div>
		</div>
		</footer>
	);
};

export default Contact;
