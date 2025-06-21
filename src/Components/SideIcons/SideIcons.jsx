import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './SideIcons.module.css';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const SideIcons = () => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<div className={styles.container}>
			<div
				className={styles.icons}
				style={{ right: 0, color: `${newTheme.sideIcons}` }}
			>
				<div className={styles.rightEmail}>
					<li>
						<a
							href='https://www.linkedin.com/in/himanshu-dwivedi-861205112/'
							aria-label='Linkedin'
							target='_blank'
							rel='noreferrer'
						>
							<Linkedin size={20} />
						</a>
					</li>
					<li>
						<a
							href='https://github.com/himrd95'
							aria-label='GitHub'
							rel='noreferrer'
							target='_blank'
						>
							<Github size={20} />
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/mr_artist_hrd/'
							aria-label='Instagram'
							target='_blank'
							rel='noreferrer'
						>
							<Instagram size={20} />
						</a>
					</li>
					<li>
						<a
							href='https://twitter.com/himansh03285202'
							aria-label='Twitter'
							target='_blank'
							rel='noreferrer'
						>
							<Twitter size={20} />
						</a>
					</li>
				</div>
			</div>
		</div>
	);
};

export default SideIcons;
