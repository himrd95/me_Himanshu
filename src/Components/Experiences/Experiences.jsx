import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experiences = () => {
	const { newTheme, mode } = useContext(ThemeContext);
	
	const experiences = [
		{
			company: 'Swiggy',
			position: 'Software Dev Engineer',
			logo: '🛵',
			type: 'Full-time Remote',
			location: 'Bengaluru, Karnataka, India',
			duration: 'Dec 2021 – Present',
			description: "At Swiggy, I work as a frontend developer building internal tools that streamline operations and employee engagement. I've developed content-driven UIs like Moments at Work and Performance Bonus Dashboards using Next.js, TypeScript, and SCSS. I also implemented dynamic rendering via JSON config, which reduced dependency on developers for UI updates and improved performance across key workflows.",
			skills: ['Next.js', 'TypeScript', 'SCSS', 'HTML', 'CSS', 'styled-components']
		},
		{
			company: 'Masai School',
			position: 'Instructional Associate',
			logo: '🏫',
			type: 'Full-time',
			location: 'Bangalore Urban, Karnataka, India',
			duration: 'Jan 2021 – Nov 2021',
			description: "During my time at Masai School, I completed 1000+ hours of hands-on coding focused on real-world applications. I built several solo and team projects using React, Node.js, MongoDB, and Express, and gained strong experience in responsive design, API integration, Git, and agile collaboration.",
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
						
						<div className={styles.timelineContent} style={{
							background: newTheme.highlightBackground,
							border: `1px solid ${newTheme.line}`
						}}>
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
							
							<p className={styles.jobDescription} style={{ color: `${newTheme.para}` }}>
								{exp.description}
							</p>

							<div className={styles.skillsContainer}>
								{exp.skills.map((skill) => (
									<span key={skill} className={styles.skillChip} style={{
										background: `rgba(102, 126, 234, ${mode === 'dark' ? '0.1' : '0.05'})`,
										border: `1px solid rgba(102, 126, 234, ${mode === 'dark' ? '0.2' : '0.1'})`,
										color: mode === 'dark' ? '#a1a1e5' : '#5a6ac4'
									}}>
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
