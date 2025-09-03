import React from "react";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
// import { allCoursesData } from "../data/course-data";
import { allCoursesData } from "../CourseData";
import { Award, Zap, Target } from "lucide-react";

const popularCourses = [
  {
    ...allCoursesData["a+n+"],
    id: 1,
    slug: "a+n+",
  },
  {
    ...allCoursesData["visual-effects"],
    id: 2,
    slug: "visual-effects",
  },
  {
    ...allCoursesData["cpp"],
    id: 3,
    slug: "cpp",
  },
  {
    ...allCoursesData["tally"],
    id: 4,
    slug: "tally",
  },
];

const exclusiveFeatures = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: "Industry-First Curriculum",
    description:
      "Courses designed with input from tech leaders at FAANG companies",
  },
  {
    icon: <Target className="h-6 w-6 text-red-500" />,
    title: "Project-Based Learning",
    description: "Build 5+ real-world projects for your professional portfolio",
  },
  {
    icon: <Award className="h-6 w-6 text-purple-500" />,
    title: "Certification Partners",
    description:
      "Get additional certifications from AWS, Google Cloud, and Microsoft",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "1:1 Mentorship",
    description:
      "Personal mentor assigned for career guidance and technical support",
  },
];

export function PopularCourses() {
  return (
    <section className="py-16">
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <span className="bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
                Exclusive
              </span>{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                Course Offerings
              </span>
            </h2>

            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              Premium courses designed for maximum career impact with
              industry-exclusive features
            </p>
          </div>

          {/* Exclusive Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {exclusiveFeatures.map((feature, index) => {
              const flipTypes = [
                "flip-left",
                "flip-right",
                "flip-up",
                "flip-down",
              ];
              const aosType = flipTypes[index % flipTypes.length];
              const delay = index * 150;

              return (
                // <div
                //   key={index}
                //   className="text-center p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition duration-300"
                //   data-aos={aosType}
                //   data-aos-duration="1000"
                //   data-aos-delay={delay}
                // >
                //   <div className="flex justify-center mb-3">{feature.icon}</div>
                //   <h3 className="font-semibold text-gray-900 mb-2">
                //     {feature.title}
                //   </h3>
                //   <p className="text-gray-600 text-sm">{feature.description}</p>
                // </div>
                <div
                  key={index}
                  className="group text-center p-6 bg-white border rounded-lg shadow-sm transition-colors duration-300 cursor-pointer hover:!bg-gray-900"
                  data-aos={aosType}
                  data-aos-duration="1000"
                  data-aos-delay={delay}
                >
                  <div className="flex justify-center mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sky-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-white">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-10">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Courses
          </h2> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Most Popular
            </span>{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Join thousands of students in our top-rated courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay={course * 150} // 0ms, 150ms, 300ms, etc.
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-black font-semibold mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    {/* <Users className="h-4 w-4 mr-1" />
                    {course.students} */}
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="">{course.rating}</span>
                  </div>
                </div>
                {/* <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="">{course.rating}</span>
                </div> */}
              </div>
              <div className="p-4 pt-0">
                <Link
                  to={`/courses/${course.slug}`}
                  className="block text-center bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/all-courses"
            className="inline-block border border-gray-800 text-gray-800 py-2 px-6 rounded hover:bg-gray-800 hover:text-white transition"
          >
            Browse More courses
          </Link>
        </div>
      </div>
    </section>
  );
}

// Name
// College
// department
// fater name
// father no
// scanner
