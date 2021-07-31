import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
	const { img, des, title, demo, live, gitHub, technologies } = props;
	return (
		<div
			data-aos="fade-right"
			data-aos-offset="400"
			data-aos-easing="ease-in-sine"
			data-aos-duration="800"
			className={styles.card}
		>
			<div className={styles.image}>
				<img src={img} alt="" />
				<div className={styles.colorDiv} />
			</div>

			<div className={styles.card__Container}>
				<div className={styles.titleContainer}>
					<h2 style={{ color: '#ccd6f6' }}>{title}</h2>
					<p style={{ color: '#8993b1' }}>{des}</p>
					<div>
						{technologies.map((technology) => (
							<span style={{ marginLeft: '20px', color: '#ccd6f6' }}>{technology}</span>
						))}
					</div>
				</div>

				{/* -----------------For hovering container--------------- */}
				<div className={styles.description}>
					{/* <div className={styles.description_container}> */}
					<a href={gitHub} rel="noopener noreferrer" target="_blank">
						<i className="fab fa-github" />
					</a>
					<a href={live} rel="noopener noreferrer" target="_blank">
						<i class="fas fa-external-link-alt" />
					</a>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default Card;
