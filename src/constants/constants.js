export const greeting = 'Hi, I\'m';
export const myName = 'Himanshu Dwivedi';
export const intro = 'I have worked with AI-based startups and product teams to turn complex ideas into clean, scalable UI systems. My work ranges from building modern dashboards and CMS-driven sites to optimizing performance and polishing UX details.';

function calculateExperience(startYear = 2021, startMonth = 10) {
	const startDate = new Date(startYear, startMonth - 1); // JS months are 0-indexed
	const now = new Date();
	let years = now.getFullYear() - startDate.getFullYear();
	let months = now.getMonth() - startDate.getMonth();
	if (months < 0) {
		years--;
		months += 12;
	}
	const decimal = months / 12;
	const experience = (years + decimal).toFixed(1);
	return `${experience}+ years of experience`;
}

export const keyStrengths = [
	calculateExperience(2021, 10),
	'React, Next.js, TypeScript, styled-components',
	'Comfortable with async collaboration',
	'Quick turnarounds & clean code'
];

export const techStack = {
	frontend: ['React', 'Next.js', 'TypeScript'],
	backend: ['Node.js', 'SCSS', 'Styled-components'],
	tools: ['Firebase', 'Git', 'REST APIs']
};
