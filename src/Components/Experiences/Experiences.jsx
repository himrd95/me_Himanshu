import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	
	const experiences = [
		{
			company: 'Swiggy',
			position: 'Software Dev Engineer',
			logo: '🛵',
			location: 'Bengaluru, Karnataka, India',
			duration: 'Dec 2021 – Present',
			skills: ['Next.js', 'TypeScript', 'SCSS', 'HTML', 'CSS', 'styled-components']
		},
		{
			company: 'Masai School',
			position: 'Instructional Associate',
			logo: '🏫',
			type: 'Full-time',
			location: 'Bangalore Urban, Karnataka, India',
			duration: 'Mar 2021 – Dec 2021',
			skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Material-UI']
		}
	];

	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.timeline}>
				{experiences.map((exp, index) => (
					<div key={index} className={styles.timelineItem}>
						<div className={styles.timelineMarker}>
							<div className={styles.companyLogo}>
								{exp.logo}
							</div>
						</div>
						
						<div className={styles.timelineContent}>
							<div className={styles.jobHeader}>
								<div className={styles.jobTitle}>
									<h3 style={{ color: `${newTheme.title}` }}>
										{exp.position}
									</h3>
									<div className={styles.companyInfo}>
										<Building2 size={16} />
										<span>{exp.company} {exp.type && `· ${exp.type}`}</span>
									</div>
								</div>
								
								<div className={styles.jobMeta}>
									<div className={styles.metaItem}>
										<Calendar size={14} />
										<span>{exp.duration}</span>
									</div>
									<div className={styles.metaItem}>
										<MapPin size={14} />
										<span>{exp.location}</span>
									</div>
								</div>
							</div>
							
							<div className={styles.skillsContainer}>
								{exp.skills.map((skill) => (
									<span key={skill} className={styles.skillChip}>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experiences;
