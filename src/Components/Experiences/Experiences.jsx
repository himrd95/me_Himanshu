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
							Lead the team with creating LMS for placement team to
							furnished the students details.{' '}
						</li>
						<li>
							Developed a Quiz App, that is currently being used by
							outgoing batch students for interview preparations.
						</li>
						<li>
							Assisted faculties with answering queries of students in
							daily stand ups. Delivered lectures whenever required.
						</li>
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
