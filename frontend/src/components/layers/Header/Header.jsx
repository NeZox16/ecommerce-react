import React, { useEffect } from "react";
import styles from "../../../assets/styles/layout/header/_header.module.sass";
import Button from "../../ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../../redux/slices/authSlice";
import { svgIcons } from "../../../assets/images.js";
import { Link } from "@tanstack/react-router";
import { fetchMe } from "../../../redux/slices/asyncThunk.js";

function Header() {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    function clickLogout() {
        dispatch(logout());
    }
    useEffect(() => {
        dispatch(fetchMe());
    }, []);

    return (
        <>
            <header className={styles.header}>
                <p className={styles.headerLogo}>
                    <img src={svgIcons.logo} alt="Logo" />
                </p>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <Link className={styles.navListItemLink} to="/">
                                Home
                            </Link>
                        </li>
                        <li className={styles.navListItem}>
                            <Link
                                className={styles.navListItemLink}
                                to="/category">
                                Category
                            </Link>
                        </li>
                        <li className={styles.navListItem}></li>
                        <li className={styles.navListItem}></li>
                    </ul>
                </nav>
                {isAuth ? (
                    <div className={styles.headerWrapper}>
                        <Button type={"button"} className={styles.btnLogin}>
                            <Link to="/">Profile</Link>
                        </Button>
                        <Button
                            onClick={clickLogout}
                            type={"button"}
                            className={styles.btnReg}>
                            <Link to="/">Logout</Link>
                        </Button>
                    </div>
                ) : (
                    <div className={styles.headerWrapper}>
                        <Button type={"button"} className={styles.btnLogin}>
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button type={"button"} className={styles.btnReg}>
                            <Link to="/register">Register</Link>
                        </Button>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;
