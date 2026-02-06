import React, { useState, useContext, useMemo } from "react";
import { ASSETS } from "../../constants/links";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Navbar.module.css";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { newTheme, mode, handleMode } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const baseUrl = useMemo(
        () => typeof window !== "undefined"
            ? `${window.location.origin}${(process.env.PUBLIC_URL || "").replace(/^\.\/?$/, "")}`
            : "#",
        []
    );

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#techStacks", label: "Tech Stack" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <nav
                className={styles.navContainer}
                style={{
                    background: newTheme.background,
                    boxShadow: `0 4px 30px ${newTheme.shadow}`,
                }}
            >
                <div className={styles.navbar}>
                    <a href={baseUrl} className={styles.logo}>
                        <img src={ASSETS.LOGO} alt="Logo" />
                    </a>

                    <div className={styles.desktopLinks}>
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} style={{ color: newTheme.title }}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <button
                            aria-label={mode === "dark" ? "Light Mode" : "Dark Mode"}
                            title={mode === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"}
                            className={styles.modeButton}
                            onClick={handleMode}
                        >
                            <div className={styles.circle} style={mode === "light" ? { background: "linear-gradient(40deg, #8983F7, #1c2931 70%)" } : {}}>
                                <div className={styles.crescent} style={mode === "light" ? { transform: "scale(1)" } : {}}></div>
                            </div>
                        </button>
                        <button className={styles.hamburger} onClick={toggleMenu} style={{ color: newTheme.title }}>
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`} style={{ background: newTheme.menuBackground, color: newTheme.title }}>
                <button className={styles.closeButton} onClick={toggleMenu} style={{ color: newTheme.title }}>
                    <X size={32} />
                </button>
                <div className={styles.mobileLinks}>
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={toggleMenu}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
