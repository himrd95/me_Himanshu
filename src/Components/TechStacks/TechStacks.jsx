import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';
import { Code, Palette, FileCode, Atom, Layers, Terminal, Server, Database, Zap, GitBranch, Globe } from 'lucide-react';
import { techStack } from '../../constants/constants';

const TechStacks = () => {
	const { newTheme, mode } = useContext(ThemeContext);
	
	const techIcons = {
		'React': Atom,
		'Next.js': Code,
		'TypeScript': FileCode,
		'Node.js': Terminal,
		'SCSS': Palette,
		'Styled-components': Layers,
		'Firebase': Zap,
		'Git': GitBranch,
		'REST APIs': Globe
	};

	const techColors = {
		'React': '#61dafb',
		'Next.js': mode === 'dark' ? '#ffffff' : '#000000',
		'TypeScript': '#3178c6',
		'Node.js': '#509941',
		'SCSS': '#cf649a',
		'Styled-components': '#db7093',
		'Firebase': '#ffca28',
		'Git': '#f05032',
		'REST APIs': '#00d4aa'
	};

	return (
		<div>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Tech Stack
			</h1>
			<div className={styles.borderBottom} />
			
			{/* Frontend */}
			<div className={styles.techSection}>
				<h2 style={{ color: `${newTheme.title}` }} className={styles.sectionTitle}>
					Frontend
				</h2>
				<div className={styles.container}>
					{techStack.frontend.map((tech) => {
						const IconComponent = techIcons[tech];
						return (
							<div
								key={tech}
								style={{
									background: newTheme.highlightBackground,
									border: `1px solid ${newTheme.line}`,
								}}
								className={styles.logoWrapper}
							>
								<IconComponent size={32} color={techColors[tech]} />
								<span style={{ color: newTheme.para }}>{tech}</span>
							</div>
						);
					})}
				</div>
			</div>

			{/* Backend */}
			<div className={styles.techSection}>
				<h2 style={{ color: `${newTheme.title}` }} className={styles.sectionTitle}>
					Backend & Styling
				</h2>
				<div className={styles.container}>
					{techStack.backend.map((tech) => {
						const IconComponent = techIcons[tech];
						return (
							<div
								key={tech}
								style={{
									background: newTheme.highlightBackground,
									border: `1px solid ${newTheme.line}`,
								}}
								className={styles.logoWrapper}
							>
								<IconComponent size={32} color={techColors[tech]} />
								<span style={{ color: newTheme.para }}>{tech}</span>
							</div>
						);
					})}
				</div>
			</div>

			{/* Tools */}
			<div className={styles.techSection}>
				<h2 style={{ color: `${newTheme.title}` }} className={styles.sectionTitle}>
					Tools & APIs
				</h2>
				<div className={styles.container}>
					{techStack.tools.map((tech) => {
						const IconComponent = techIcons[tech];
						return (
							<div
								key={tech}
								style={{
									background: newTheme.highlightBackground,
									border: `1px solid ${newTheme.line}`,
								}}
								className={styles.logoWrapper}
							>
								<IconComponent size={32} color={techColors[tech]} />
								<span style={{ color: newTheme.para }}>{tech}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default TechStacks;
