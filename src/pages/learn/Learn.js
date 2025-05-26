
import React from "react";
import styles from "./Learn.module.css";
import coursesData from "../../data/courses.json";
import {Link, useParams, Outlet} from "react-router-dom";


function Learn() {
  const { courseId } = useParams();
  const course = coursesData.find((course) => course.id === courseId);


  return (
    <div className={styles.courses_container}>
        <div className={styles.top_head}>
            <Link to="/courses"><h2 className={styles.back}>{"<<"}</h2></Link>
            <h1 className={styles.heading}>{course.title}</h1>
        </div>

        <div className={styles.chapter_box}>
            <div className={styles.chapters}>
                <h1>Chapters</h1>
                <hr />
                <ul>
                    {course.chapters.map((chapter, i) => {
                        return (
                            <div className={styles.chapterTitle} key={i}>
                                <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
                            </div>
                        );
                    })}
                </ul>
            </div>

            <div className={styles.courses}>
                <Outlet context={{ ...course }} /> {/*Chapter Details Must be rendered here */}
            </div>
        </div>
    </div>
  );
}

export default Learn;
