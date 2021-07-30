import React from 'react';
import styles from './Button.module.css';

export const Button = ({ text, handleButton }) => {
	return (
		<button className={styles.buttonComponent} onClick={() => handleButton()}>
			<span>{text}</span>
		</button>
	);
};
