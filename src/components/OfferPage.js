import { useParams, Navigate } from "react-router-dom";
import { OfferDetail } from "./OfferDetail";
import { allCoursesOffer } from "../CourseOffer";

function OfferPage() {
  const { slug } = useParams();
  const course = allCoursesOffer[slug];

  console.log("Course slug:", slug, course);

  if (!course) {
    return <Navigate to="/not-found" />;
  }

  return <OfferDetail course={course} slug={slug} />;
}

export default OfferPage;
