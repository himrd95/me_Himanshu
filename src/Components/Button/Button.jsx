import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Button.module.css';

export const Button = ({ text, handleButton }) => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<button
			style={{
				color: `${newTheme.title}`,
				background: `${newTheme.linkHover}`,
			}}
			className={styles.buttonComponent}
			onClick={() => handleButton()}
		>
			<span>{text}</span>
		</button>
	);
};
