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
				<div className={styles.date}>March 2021 - present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							Led the team of 4 where we were working on the frontend
							part of LMS for student profiles to furnish their
							details.
						</li>
						<li>
							Worked on the main layout part along with maintaining
							the state using Redux. Maintained the documentation.
						</li>
						<li>
							Developed a Live Quiz App 'Masai Refresh', that is
							currently being used by over 200+ students for interview
							preparations.
						</li>
						<li>
							Worked on the frontend part with a quiz-specific modal
							where students can skip, submit, and report the
							questions.
						</li>
						<li>
							Assisted faculties and reviewing the projects made by
							students. Delivered lectures whenever required.
						</li>
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
