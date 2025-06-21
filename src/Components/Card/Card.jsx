import React, { useState } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import { Button } from "../Button/Button";
import styles from "./Card.module.css";
import { Github, ExternalLink as ExternalLinkIcon } from "lucide-react";

const Card = (props) => {
    const [state, setState] = useState(false);
    const { newTheme } = React.useContext(ThemeContext);
    const { img, des, title, live, gitHub, technologies } = props;

    const [width] = WindowSize();

    const handleButton = () => {
        setState(!state);
    };
    const handleClose = (value) => {
        setState(false);
    };
    return (
        <div
            className={styles.card}
            style={{
                boxShadow: `3px 3px 5px ${newTheme.line}`,
                backgroundColor: `${newTheme.highlightBackground}`,
            }}
        >
            <div className={styles.image}>
                <img src={img} alt="project" loading="lazy" />
                <div className={styles.colorDiv} />
            </div>

            <div className={styles.card__Container}>
                <div
                    className={styles.titleContainer}
                >
                    <h2 style={{ color: `${newTheme.title}` }}>{title}</h2>
                    {width <= 840 && (
                        <Button
                            text="Read More"
                            handleButton={handleButton}
                            padding="10px 20px"
                        />
                    )}
                    <p style={{ color: `${newTheme.para}` }}>{des}</p>
                    <div>
                        {technologies.map((technology, index) => (
                            <span
                                key={index}
                                style={{
                                    marginLeft: "20px",
                                    color: `${newTheme.title}`,
                                }}
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Custom Modal */}
                {state && (
                    <div className={styles.modalOverlay} onClick={handleClose}>
                        <div 
                            className={styles.modalContent}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: `${newTheme.highlightBackground}`,
                            }}
                        >
                            <div className={styles.image}>
                                <img src={img} alt="project" loading="lazy" />
                            </div>
                            <h2 style={{ color: `${newTheme.title}` }}>{title}</h2>
                            <p style={{ color: `${newTheme.para}` }}>{des}</p>
                            <div className={styles.popupTech}>
                                {technologies.map((technology, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            marginRight: "20px",
                                            color: `${newTheme.title}`,
                                        }}
                                    >
                                        {technology}
                                        {index !== technologies.length - 1
                                            ? ","
                                            : "."}
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    backgroundColor: `${newTheme.line}`,
                                    height: "1px",
                                    top: "15px",
                                }}
                            />
                            <br />
                            <div className={styles.dialogElements}>
                                <div
                                    style={{
                                        color: `${newTheme.title}`,
                                    }}
                                    className={styles.actionBtns}
                                >
                                    <a
                                        href={gitHub}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={live}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <ExternalLinkIcon size={20} />
                                    </a>
                                </div>
                                <Button
                                    text="close"
                                    handleButton={handleClose}
                                    padding="10px 20px"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* -----------------For hovering container--------------- */}
                <div
                    style={{
                        color: `${newTheme.para}`,
                        background: `${newTheme.linkHover}`,
                    }}
                    className={styles.description}
                >
                    <a href={gitHub} rel="noopener noreferrer" target="_blank">
                        <Github size={20} stroke={newTheme.title} />
                    </a>
                    <a href={live} rel="noopener noreferrer" target="_blank">
                        <ExternalLinkIcon size={20} stroke={newTheme.title} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
