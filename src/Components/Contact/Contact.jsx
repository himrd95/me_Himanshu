import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';
import { Phone, Mail, Twitter, Github, Linkedin } from 'lucide-react';

const Contact = () => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<footer
			className={styles.footer}
			id='contact'
			// style={{ background: `${newTheme.highlightBackground}` }}
		>
			<div className={styles.container}>
				<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}
				>
					I'm actively looking for any new opportunities, in
					full-stack web development.
				</p>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.contactOptions}
				>
					<a
						href='tel:9454538373'
						aria-label='Phone'
						rel='noreferrer'
						target='_blank'
					>
						<Phone size={20} />
					</a>
					<a
						href='mailto: himrd95@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
					>
						<Mail size={20} />
					</a>
					<a
						href='https://twitter.com/himansh03285202'
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<Twitter size={20} />
					</a>
					<a
						href='https://github.com/himrd95'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<Github size={20} />
					</a>

					<a
						href='https://www.linkedin.com/in/himanshu-dwivedi-861205112/'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<Linkedin size={20} />
					</a>
				</div>
			</div>
			<div
				style={{ background: `${newTheme.line}` }}
				className={styles.line}
			/>
			<div
				style={{ color: `${newTheme.para}` }}
				className={styles.copyright}
			>
				Designed and build by Himanshu Dwivedi, 2021 All rights
				reserved.
			</div>
		</footer>
	);
};

export default Contact;
