import React from "react";
import styles from "./courseDetails.module.css";
import coursesData from "../../data/courses.json";
import { Link, useParams } from "react-router-dom";

function Details() {
  //get course id and match it with the data using useParams() hook
  const { courseId } = useParams();
  const course = coursesData.find((course) => course.id === courseId);

  return (
    <div className={styles.courseDetails_container}>
      <div className={styles.courseImage_container}>
        <img src={course.img} alt="icons" />
      </div>
      <div className={styles.courseDetails_content}>
          <h1 className={styles.course_title}>{course.title}</h1>
          <p className={styles.course_description}>{course.description}</p>
      </div>
      <Link to={`/learn/${course.id}`}>
        <button className={styles.button}>Start Learning</button>
      </Link>
      </div>
  );
}

export default Details;
