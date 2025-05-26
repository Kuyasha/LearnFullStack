
import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import styles from "./Navbar.module.css";
import image1 from "../../assets/logo.png";

function Navbar(){
    return(
        <>
        <nav>
            <div className={styles.nav_container}>
                <div className={styles.nav_title_wrapper}>
                    <Link to="/">
                        <img src={image1} className={styles.logo} alt="logo"/>
                    </Link>  
                    <h4>LearnFullStack</h4>
                </div>
                <div className={styles.nav_details}>
                    <button className={styles.nav_btn}>
                        <NavLink to="/courses">{({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}</NavLink>
                    </button>
                </div>
            </div>    
        </nav>
        <Outlet/>
        </>
    );
}

export default Navbar;