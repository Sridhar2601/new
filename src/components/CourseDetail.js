import {
  Clock,
  Users,
  Star,
  Award,
  CheckCircle,
  BookOpen,
  Target,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { allCoursesData } from "../CourseData";
import { Link } from "react-router-dom";

export function CourseDetail({ course, slug }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // ensures AOS re-animates every time you scroll
    });

    // Refresh AOS on every component mount
    AOS.refresh();
  }, []);

  const allCourses = Object.entries(allCoursesData);
  const relatedCourses = allCourses
    .filter(([key, c]) => c.category === course.category && key !== slug)
    .slice(0, 3); // show max 3

  return (
    <div
      className="container mx-auto px-4 py-8 overflow-hidden overflow-hidden"
      style={{ marginTop: "80px" }}
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h1
            className="text-4xl font-bold text-gray-900  mb-4"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            {course.title}
          </h1>
          <p
            className="text-lg text-gray-600 mb-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            {course.description}
          </p>

          <div
            className="flex flex-wrap gap-4 mb-6"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </div>
            {/* <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-1" />
              {course.students} students
            </div> */}
            <div className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
              {course.rating} rating
            </div>
            <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
              {course.level}
            </span>
          </div>

          <div
            className="flex items-center gap-4 mb-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            {/* <span className="text-3xl font-bold text-blue-600">
              {course.price}
            </span> */}
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Enroll Now
              </button>
            </Link>

            {/* <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
              Download Brochure
            </button> */}
          </div>
        </div>

        <div>
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            data-aos="fade-right"
            data-aos-duration="1200"
          />
        </div>
      </div>

      {/* What is this course section */}
      {course.whatIsCourse && (
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
            <h2
              className="text-2xl text-gray-900 flex items-center mb-4"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
              What is {course.title}?
            </h2>
            <p
              className="text-gray-700 leading-relaxed text-lg"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              {course.whatIsCourse}
            </p>
          </div>
        </section>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Syllabus */}
          <section>
            <h2
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <BookOpen className="h-6 w-6 mr-2" />
              Course Syllabus
            </h2>
            {/* <div className="space-y-4">
              {course.syllabus.map((module, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow-sm bg-white"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {module.module}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
            <div className="space-y-4">
              {course.syllabus.map((module, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-duration="1000"
                  className="border rounded-lg p-4 shadow-sm bg-white"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {module.module}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* What You'll Learn */}
          <section>
            <h2
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Target className="h-6 w-6 mr-2" />
              What You'll Learn
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              {course.whatYouLearn.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          {/* <section>
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Student Reviews
            </h2>
            <div className="space-y-4">
              {course.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border rounded-lg shadow-sm p-6 bg-white"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </section> */}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tools */}
          <div className="border rounded-lg shadow-sm bg-white p-4">
            <h3
              className="text-lg font-semibold mb-3 text-black"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Tools & Technologies
            </h3>
            <div
              className="flex flex-wrap gap-2"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              {course.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border rounded text-sm text-gray-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Who Can Enroll */}
          <div className="border rounded-lg shadow-sm bg-white p-4">
            <h3
              className="text-lg font-semibold mb-3 text-black"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              Who Can Enroll
            </h3>
            <ul
              className="space-y-2"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              {course.whoCanEnroll.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Paths */}
          <div className="border rounded-lg shadow-sm bg-white p-4">
            <h3
              className="text-lg font-semibold mb-3 text-black"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              Career Opportunities
            </h3>
            <ul
              className="space-y-2"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              {course.careerPaths.map((path, index) => (
                <li key={index} className="flex items-start">
                  <Award className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{path}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* ✅ RELATED COURSES SECTION */}
      {/* <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              📚 Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map(([key, rc]) => (
                <div
                  key={key}
                  className="bg-white rounded-lg shadow p-4 border hover:shadow-md transition-all"
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                      {rc.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {rc.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 truncate">
                    {rc.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {rc.duration}
                  </div>
                  <div className="flex items-center text-sm text-yellow-500 mb-3">
                    <Star className="w-4 h-4 mr-1" />
                    {rc.rating}
                  </div>
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    {rc.price}
                  </div>
                  <Link
                    to={`/courses/${key}`}
                    className="inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm"
                  >
                    View Course
                  </Link>
                </div>
              ))}
            </div>
          </section> */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center mt-10">
          📚 Related Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCourses.map(([key, rc], index) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow border hover:shadow-md transition-all flex flex-col"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-duration="800"
            >
              {/* Image (no padding) */}
              <div
                className="w-full h-40 overflow-hidden rounded-t-lg"
                style={{ height: "200px" }}
              >
                <img
                  src={rc.image}
                  alt={rc.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {rc.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 truncate">
                  {rc.description}
                </p>

                {/* Duration & Rating */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {rc.duration}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    {rc.rating}
                  </div>
                </div>

                {/* View Button */}
                <div className="flex justify-center mt-auto">
                  <Link
                    to={`/courses/${key}`}
                    className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
