import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './Card.module.css';

const Card = (props) => {
	const { newTheme } = React.useContext(ThemeContext);
	const { img, des, title, live, gitHub, technologies } = props;

	const [width] = WindowSize();
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='300'
			data-aos-easing='ease-in-sine'
			data-aos-duration='700'
			className={styles.card}
			style={{
				boxShadow: `3px 3px 5px ${newTheme.line}`,
				backgroundColor: `${newTheme.highlightBackground}`,
			}}
		>
			<div className={styles.image}>
				<img src={img} alt='project image' />
				<div
					className={styles.colorDiv}
					style={{
						background: `${newTheme.productImg}`,
					}}
				/>
			</div>

			<div className={styles.card__Container}>
				<div
					className={styles.titleContainer}
					style={
						width <= 1000
							? { background: `${newTheme.card}` }
							: { background: 'none' }
					}
				>
					<h2 style={{ color: `${newTheme.title}` }}>{title}</h2>
					<p style={{ color: `${newTheme.para}` }}>{des}</p>
					<div>
						{technologies.map((technology, index) => (
							<span
								key={index}
								style={{
									marginLeft: '20px',
									color: `${newTheme.title}`,
								}}
							>
								{technology}
							</span>
						))}
					</div>
				</div>

				{/* -----------------For hovering container--------------- */}
				<div className={styles.description}>
					<a href={gitHub} rel='noopener noreferrer' target='_blank'>
						<i className='fab fa-github' />
					</a>
					<a href={live} rel='noopener noreferrer' target='_blank'>
						<i className='fas fa-external-link-alt' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
