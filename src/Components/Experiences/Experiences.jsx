import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Instructional Associate | Software Developer{' '}
					<a href='https://www.masaischool.com/'>@ Masai School</a>
				</div>
				<div className={styles.date}>Mar 2021 - present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							Led the team of 4 where we were working on the frontend
							part of LMS for student profile.
						</li>
						<li>
							Developed a Quiz App 'Masai Refresh', that is currently
							being used by over 200+ students for interview
							preparations.
						</li>
						<li>
							Assisted faculties with reviewing the projects made by
							students in construct week. Delivered lectures whenever
							required.
						</li>
						<li>
							Managed a batch of 50+ students and resolved their
							queries on daily basis and helped them to enhance their
							skills in technologies such as HTML, CSS, React.
						</li>
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
