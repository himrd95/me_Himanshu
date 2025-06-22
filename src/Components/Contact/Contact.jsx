import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';
import { Phone, Mail, Twitter, Github, Linkedin } from 'lucide-react';

const Contact = () => {
	const { newTheme } = useContext(ThemeContext);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSent, setIsSent] = useState(false);
	const currentYear = new Date().getFullYear();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const myForm = e.target;
		const netlifyFormData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(netlifyFormData).toString(),
		})
			.then(() => {
				setIsSent(true);
				setFormData({ name: '', email: '', message: '' });
			})
			.catch((error) => alert(error));
	};

	return (
		<section id="contact" className={styles.contactSection}>
			<div className={styles.container}>
				<div className={styles.left}>
					<h1 className={styles.title} style={{ color: newTheme.title }}>
						Let's Start a Conversation
					</h1>
					<p className={styles.paragraph} style={{ color: newTheme.para }}>
						I'm always excited to connect with fellow developers, potential employers, or anyone passionate about technology. Whether you have a question, a project proposal, or just want to say hello, my inbox is waiting.
					</p>
					<div className={styles.contactInfo}>
						<a href='mailto: himrd95@gmail.com' className={styles.infoItem} style={{ color: newTheme.para }}>
							<Mail size={20} /> himrd95@gmail.com
						</a>
						<a href='tel:9454538373' className={styles.infoItem} style={{ color: newTheme.para }}>
							<Phone size={20} /> +91 9454538373
						</a>
					</div>
					<div
						className={styles.contactOptions}
					>
						<a
							href='https://github.com/himrd95'
							aria-label='GitHub'
							rel='noreferrer'
							target='_blank'
							style={{ color: newTheme.sideIcons }}
						>
							<Github size={24} />
						</a>
						<a
							href='https://www.linkedin.com/in/himanshu-dwivedi-861205112/'
							aria-label='Linkedin'
							target='_blank'
							rel='noreferrer'
							style={{ color: newTheme.sideIcons }}
						>
							<Linkedin size={24} />
						</a>
						<a
							href='https://twitter.com/himansh03285202'
							aria-label='Twitter'
							target='_blank'
							rel='noreferrer'
							style={{ color: newTheme.sideIcons }}
						>
							<Twitter size={24} />
						</a>
					</div>
				</div>
				<div className={styles.right}>
					{isSent ? (
						<div
							className={styles.successMessage}
							style={{
								background: newTheme.highlightBackground,
								border: `1px solid ${newTheme.line}`,
							}}
						>
							<h2 style={{ color: newTheme.title }}>Thank you!</h2>
							<p style={{ color: newTheme.para }}>
								Your message has been sent successfully. I'll get back to you
								soon.
							</p>
						</div>
					) : (
						<form
							name='contact'
							method='POST'
							data-netlify='true'
							className={styles.contactForm}
							onSubmit={handleSubmit}
						>
							<input type='hidden' name='form-name' value='contact' />
							<div className={styles.formGroup}>
								<label htmlFor='name' style={{ color: newTheme.para }}>
									Your Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									required
									style={{
										background: newTheme.highlightBackground,
										border: `1px solid ${newTheme.line}`,
										color: newTheme.title,
									}}
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor='email' style={{ color: newTheme.para }}>
									Your Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									required
									style={{
										background: newTheme.highlightBackground,
										border: `1px solid ${newTheme.line}`,
										color: newTheme.title,
									}}
								/>
							</div>
							<div className={styles.formGroup}>
								<label htmlFor='message' style={{ color: newTheme.para }}>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									rows='5'
									value={formData.message}
									onChange={handleChange}
									required
									style={{
										background: newTheme.highlightBackground,
										border: `1px solid ${newTheme.line}`,
										color: newTheme.title,
									}}
								></textarea>
							</div>
							<button type='submit' className={styles.submitButton}>
								Send Message
							</button>
						</form>
					)}
				</div>
			</div>
			<footer className={styles.footer}>
				<div
					style={{ background: `${newTheme.line}` }}
					className={styles.line}
				/>
				<div
					style={{ color: `${newTheme.para}` }}
					className={styles.copyright}
				>
					Designed & Built by Himanshu Dwivedi © {currentYear}
				</div>
			</footer>
		</section>
	);
};

export default Contact;
