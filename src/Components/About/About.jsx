import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./About.module.css";

const About = () => {
    const { newTheme } = React.useContext(ThemeContext);

    return (
        <div
            className={styles.container}
            style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
        >
            <div className={styles.first}>
                <img src="developer.png" alt="" />
            </div>
            <div className={styles.second}>
                <h1
                    style={{ color: `${newTheme.title}` }}
                    className={styles.heading}
                >
                    About Me
                </h1>
                <div className={styles.borderBottom} />
                <p
                    style={{
                        color: `${newTheme.para}`,
                    }}
                    className={styles.aboutMe}
                >
                    I'm a passionate Full Stack Developer with over 3.5 years of experience crafting modern web applications. My journey began with a curiosity about how websites work, which evolved into a deep love for building scalable, user-centric solutions.
                    <br /><br />
                    I specialize in the React ecosystem, including Next.js and TypeScript, and have a strong foundation in backend development with Node.js. My approach combines clean code practices with rapid development cycles, ensuring both quality and efficiency.
                    <br /><br />
                    Throughout my career, I've collaborated with diverse teams, honing my skills in async communication and project management. I believe in writing maintainable code that not only solves immediate problems but also scales for future growth.
                    <br /><br />
                    Currently, I'm focused on building performant web applications and exploring emerging technologies. I'm always excited to take on new challenges and contribute to innovative projects that make a real impact.
                </p>
            </div>
        </div>
    );
};

export default About;
