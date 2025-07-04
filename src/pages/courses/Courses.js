import React from "react";
import styles from "./Courses.module.css";
import Card from "../../components/card/Card";
import coursesData from "../../data/courses.json";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className={styles.courses_container}>
        <div className={styles.courses_heading}>
            <h1>Popular Courses</h1>
            <h4>Choose your Katana ⚔️</h4>
        </div>

        <div className={styles.courses_content}>
            {coursesData.map((course, index) => {
                return (
                    <div key={index} className={styles.courses_card_container}>
                        <Link to={`/courses/${course.id}`}>
                            <Card key={course.id} id={course.id} title={course.title} img={course.img}/>
                        </Link>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Courses;
