import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Card.module.css";
import { Github, ExternalLink as ExternalLinkIcon } from "lucide-react";

const Card = (props) => {
    const { newTheme, mode } = useContext(ThemeContext);
    const { img, des, title, live, gitHub, technologies } = props;

    return (
        <div
            className={styles.card}
            style={{
                background: newTheme.highlightBackground,
                border: `1px solid ${newTheme.line}`,
            }}
        >
            <div className={styles.image}>
                <img src={img} alt={title} loading="lazy" />
                <div className={styles.colorDiv} />
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.title} style={{ color: `${newTheme.title}` }}>
                    {title}
                </h3>
                <p className={styles.description} style={{ color: `${newTheme.para}` }}>
                    {des}
                </p>
                <div className={styles.techContainer}>
                    {technologies.map((tech) => (
                        <span key={tech} className={styles.techChip} style={{
                            background: `rgba(102, 126, 234, ${mode === 'dark' ? '0.1' : '0.05'})`,
                            border: `1px solid rgba(102, 126, 234, ${mode === 'dark' ? '0.2' : '0.1'})`,
                            color: mode === 'dark' ? '#a1a1e5' : '#5a6ac4'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className={styles.linksContainer} style={{ borderTop: `1px solid ${newTheme.line}` }}>
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                        style={{ color: newTheme.title, border: `1px solid ${newTheme.line}` }}
                    >
                        <ExternalLinkIcon size={18} />
                        <span>Live Demo</span>
                    </a>
                    <a
                        href={gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                        style={{ color: newTheme.title, border: `1px solid ${newTheme.line}` }}
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
