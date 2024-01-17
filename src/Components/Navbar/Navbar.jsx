import React, { useState, useRef, useContext } from "react";
import { ASSETS } from "../../constants/links";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Navbar.module.css";
import { DIMENSION_TYPE, resolvedDimention } from "../../helpers/getViewport";

const barStyle = {
    bar1: {
        position: "absolute",
        width: "15px",
        transform: "rotate(45deg)",
    },
    bar2: {
        position: "absolute",
        left: "-2px",
    },
    bar3: {
        position: "absolute",
        width: "15px",
        transform: "rotate(-45deg)",
    },
};

const circle = {
    background: "linear-gradient(40deg, #8983F7, #1c2931 70%)",
    width: "30px",
    height: "30px",
};
const cresent = {
    transform: "scale(1)",
};

const Navbar = () => {
    const { newTheme, mode, handleMode, open, handleMenu } =
        useContext(ThemeContext);

    return (
        <nav
            className={styles.navContainer}
            style={{
                background: `${newTheme.background}`,
                boxShadow: `3px 3px 10px ${newTheme.line}`,
            }}
        >
            <div className={styles.navbar}>
                <a href="https://himrd95.github.io/me_Himanshu">
                    <div className={styles.logo}>
                        <img
                            style={{
                                width: resolvedDimention(
                                    DIMENSION_TYPE.HORIZONTAL,
                                    40
                                ),
                            }}
                            src={ASSETS.LOGO}
                            alt="Logo"
                        />
                    </div>
                </a>

                <div
                    style={{
                        width: resolvedDimention(DIMENSION_TYPE.HORIZONTAL),
                        color: `${newTheme.title}`,
                    }}
                    className={styles.links}
                >
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>

                    <a href="#contact">Contact</a>
                </div>
                <button
                    aria-label={mode === "dark" ? "Light Mode" : "Dark Mode"}
                    title={
                        mode === "dark"
                            ? "Toggle Light Mode"
                            : "Toggle Dark Mode"
                    }
                    style={{
                        color: `${newTheme.title}`,
                    }}
                    className={styles.modeButton}
                    onClick={handleMode}
                >
                    <div
                        className={styles.circle}
                        style={mode === "light" ? circle : {}}
                    >
                        <div
                            style={mode === "light" ? cresent : {}}
                            className={styles.crescent}
                        ></div>
                    </div>
                </button>

                <div onClick={handleMenu} className={styles.bars}>
                    <div
                        style={
                            open
                                ? {
                                      background: `${newTheme.title}`,
                                  }
                                : barStyle.bar1
                        }
                    ></div>
                    <div
                        style={
                            open
                                ? { background: `${newTheme.title}` }
                                : barStyle.bar2
                        }
                    ></div>
                    <div
                        style={
                            open
                                ? { background: `${newTheme.title}` }
                                : barStyle.bar3
                        }
                    ></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
