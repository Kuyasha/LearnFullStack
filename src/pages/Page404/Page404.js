
import React from "react";
import styles from "./Page404.module.css";
import { useLocation, useNavigate } from "react-router-dom";


function Page404() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={styles.errorPage}>
            <h1>Oops! Something went Wrong.</h1>
            <h2>Page Not Found</h2>
            <h4>The page <code>{location.pathname}</code> does not exist.</h4>
            <button className={styles.error_btn} onClick={() => {navigate("/")}}> Go to Home </button>
        </div>
  );
}

export default Page404;
