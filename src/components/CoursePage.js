import { useParams, Navigate } from "react-router-dom";
import { CourseDetail } from "./CourseDetail";
import { allCoursesData } from "../CourseData";

function CoursePage() {
  const { slug } = useParams();
  const course = allCoursesData[slug];

  console.log("Course slug:", slug, course);

  if (!course) {
    return <Navigate to="/not-found" />;
  }

  return <CourseDetail course={course} slug={slug} />;
}

export default CoursePage;
