import { useState } from "react";
import { Clock, Users, Star, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { allCoursesOffer } from "../CourseOffer";

const allCourses = Object.entries(allCoursesOffer).map(([slug, course]) => ({
    id: slug,
    title: course.title,
    description: course.description,
    category: course.category,
    duration: course.duration,
    students: course.students,
    rating: course.rating,
    image: course.image,
    slug: slug,
}));

const categories = [
    "All",
    "Computer Application",
    "Programming",
    "Hardware",
    "Visual&Animation",
    "Tally",
    "AutoCAD"
];

const courseDescriptions = {
    "Computer Application":
        "Core computer applications including operating systems, office productivity suites, databases, and essential digital skills for workplace efficiency",

    "Programming":
        "Programming languages and software development fundamentals for building robust applications",

    "Hardware":
        "Computer hardware, networking, and system maintenance skills for building and managing IT infrastructure",

    "Visual&Animation":
        "Creative design, video, audio, animation, and visual effects skills for media and entertainment industries",

    "Tally":
        "Accounting and GST-ready bookkeeping with Tally, including invoicing, inventory, reporting, and compliance for businesses",

    "AutoCAD":
        "2D/3D CAD drafting and design workflows using AutoCAD for architecture, engineering, and manufacturing projects",
};


export function AllCoursesOffer() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCourses =
        selectedCategory === "All"
            ? allCourses
            : allCourses.filter((course) => course.category === selectedCategory);

    return (
        <div className="container mx-auto px-4 mt-12 overflow-hidden">
            <div
                className="text-center mb-8"
                data-aos="fade-down"
                data-aos-duration="1200"
            >
                <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-20">
                    Courses Offered
                </h1>
                <p
                    className="text-lg text-gray-600"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                >
                    Explore our comprehensive range of courses designed to advance your
                    career
                </p>
            </div>

            <div
                className="flex flex-wrap justify-center gap-2 mb-8"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded border text-sm font-medium mb-2 ${selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {selectedCategory !== "All" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                    <div className="flex items-center mb-2">
                        <Code className="h-6 w-6 text-blue-600 mr-2" />
                        <h2 className="text-xl font-semibold text-gray-900">
                            {selectedCategory} Courses
                        </h2>
                    </div>
                    <p className="text-gray-700">
                        {courseDescriptions[selectedCategory]}
                    </p>
                </div>
            )}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredCourses.map((course, index) => {
                    const aosAnimations = ["fade-left", "fade-up-left", "zoom-in-left"];
                    const aosType = aosAnimations[index % aosAnimations.length];

                    return (
                        <div
                            key={course.id}
                            data-aos={aosType}
                            data-aos-duration="1000"
                            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300 relative"
                        >
                            {course.category === "Full Stack" && (
                                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded flex items-center z-10">
                                    <Zap className="h-3 w-3 mr-1" /> Popular
                                </span>
                            )}
                            <div className="overflow-hidden">
                                <img
                                    src={course.image || "/placeholder.svg"}
                                    alt={course.title}
                                    className="w-full h-48 object-cover rounded-t hover:scale-105 transition-transform duration-300 shadow"
                                />
                            </div>
                            <div className="p-4">
                                <div className="text-xs text-blue-600 font-medium mb-1">
                                    {course.category}
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-black">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                    {course.description}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-1" />
                                        {course.students}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                    <span className="text-sm font-medium text-black">
                                        {course.rating}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 pt-0">
                                <Link
                                    to={`/offered/${course.slug}`}
                                    className="block text-center w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            <section className="bg-gray-50 rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Why Choose CSG Education?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Users className="h-8 w-8 text-blue-600" />,
                            bg: "bg-blue-100",
                            title: "Experienced Trainers",
                            desc: "Learn from industry experts with years of practical experience",
                        },
                        {
                            icon: <Star className="h-8 w-8 text-green-600" />,
                            bg: "bg-green-100",
                            title: "Job-Oriented Training",
                            desc: "Curriculum designed to meet current industry demands and trends",
                        },
                        {
                            icon: <Clock className="h-8 w-8 text-purple-600" />,
                            bg: "bg-purple-100",
                            title: "Certification",
                            desc: "Get industry-recognized certificates upon successful completion",
                        },
                        {
                            icon: <Star className="h-8 w-8 text-orange-600" />,
                            bg: "bg-orange-100",
                            title: "Real-Time Projects",
                            desc: "Work on live projects to gain hands-on practical experience",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="text-center border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
                        >
                            <div
                                className={`${item.bg} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110`}
                            >
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-black">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}