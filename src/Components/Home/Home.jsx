import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";

import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../constants/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import Experiences from "../Experiences/Experiences";
import { greeting, intro, myName, keyStrengths } from "../../constants/constants";
import { ASSETS } from "../../constants/links";
import { Download, CheckCircle } from "lucide-react";
import useWindowSize from "../../Utils/WindowSize";

const Home = () => {
    const [projectArray, setProjectArray] = useState(projects.slice(0, 3));
    const { newTheme, mode } = React.useContext(ThemeContext);
    const [offset, setOffset] = useState(0);
    const [location, setLocation] = useState(0);
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    const handleOffset = () => {
        setOffset(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleOffset);
        return () => window.removeEventListener("scroll", handleOffset);
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = newTheme.background;
    }, [newTheme]);

    const handleButton = () => {};

    const handleShowMoreBtn = () => {
        if (projects.length === projectArray.length) {
            setProjectArray(projects.slice(0, 3));
            window.scrollTo(0, location);
        } else {
            setProjectArray(projects);
            setLocation(offset);
        }
    };

    const introStyle = {
        color: `${newTheme.para}`,
    };

    return (
        <div>
            {isMobile ? (
                <div className={styles.mobileBg} />
            ) : (
                <>
                    <div className={styles.bgShape} style={{ transform: `translateY(${offset * 0.1}px)` }} />
                    <div className={styles.bgShape2} style={{ transform: `translateY(-${offset * 0.15}px)` }} />
                </>
            )}
            <SideIcons />
            <div
                id="home"
                className={styles.profile}
                style={{
                    backgroundColor: `${newTheme.background}`,
                }}
            >
                <div className={styles.leftPane}>
                    <div
                        className={styles.profileImage}
                    >
                        <img src={ASSETS.PROFILE} alt="Profile pic" />
                    </div>
                    <div className={styles.resumeButtonContainer}>
                        <a
                            href="https://drive.google.com/file/d/1JYCWImM8DxMhbUhUVn06GfkZ1VGHGSfN/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button
                                text={
                                    <span className={styles.resumeBtn}>
                                        <span>Download Resume</span>
                                        <Download size={16} />
                                    </span>
                                }
                                handleButton={handleButton}
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.rightPane} style={introStyle}>
                    <h1>
                        <span className={styles.greeting}>{greeting}</span>
                        <div
                            className={styles.name}
                            style={{
                                color: `${newTheme.title}`,
                            }}
                        >
                            {myName}
                        </div>
                    </h1>
                    <span className={styles.introText}>{intro}</span>
                    <div className={styles.keyStrengths}>
                        {keyStrengths.map((strength, index) => (
                            <div
                                key={index}
                                className={styles.strengthItem}
                                style={{
                                    background: `rgba(102, 126, 234, ${mode === 'dark' ? '0.1' : '0.05'})`,
                                    border: `1px solid rgba(102, 126, 234, ${mode === 'dark' ? '0.2' : '0.1'})`,
                                }}
                            >
                                <CheckCircle size={16} color="#667eea" />
                                <span>{strength}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="techStacks" className={styles.techStacks}>
                <TechStacks />
            </div>

            <div
                id="experience"
                className={styles.experience}
                style={{
                    background: `${newTheme.highlightBackground}`,
                }}
            >
                <div
                    style={{ color: `${newTheme.para}` }}
                >
                    <Experiences />
                </div>
            </div>

            <div id="projects" className={styles.projects}>
                <h1
                    style={{ color: `${newTheme.title}` }}
                    className={styles.heading}
                >
                    Featured Projects
                </h1>
                <div className={styles.borderBottom} />
                <div className={styles.projectsGrid}>
                    {projectArray.map((item, index) => {
                        const isNew = projectArray.length > 3 && index >= 3;
                        return (
                            <div
                                key={item.title}
                                className={isNew ? styles.newCard : ''}
                                style={
                                    isNew
                                        ? { animationDelay: `${(index - 3) * 0.1}s` }
                                        : {}
                                }
                            >
                                <Card {...item} />
                            </div>
                        );
                    })}
                </div>
                <div className={styles.showMoreContainer}>
                    <Button
                        text={
                            projects.length !== projectArray.length
                                ? "Show More"
                                : "Show Less"
                        }
                        handleButton={handleShowMoreBtn}
                    />
                </div>
            </div>

            <div
                className={styles.contactWrapper}
                style={{
                    background: `${newTheme.highlightBackground}`,
                }}
            >
                <Contact />
            </div>
        </div>
    );
};

export default Home;
