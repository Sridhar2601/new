import { BookOpen, Target, Users, Award, Zap, Clock } from "lucide-react";
import { Link, Links } from "react-router-dom";

export function MissionContent() {
  return (
    <div className="container mx-auto px-4 mt-5 overflow-hidden">
      {/* Hero Section */}
      {/* <section className="text-center mb-16 ">
        <div
          className="inline-flex items-center mt-5 justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-6"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <BookOpen className="h-10 w-10 text-white" />
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          Our Mission
        </h1>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Delivering exceptional education that bridges the gap between academic
          knowledge and industry requirements
        </p>
      </section> */}
      <section
        className="hero text-center container text-white py-5 mb-5 rounded-4"
        style={{
          // background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/004/405/039/original/blue-and-red-color-gradient-background-free-vector.jpg')",

          paddingTop: "50px",
          marginTop: "80px",
        }}
        data-aos="fade-down"
      >
        <div className="container">
          <div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-2 mb-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <BookOpen className="h-10 w-10 text-white" />
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            Our Mission
          </h1>
          <p className="lead text-light">
            Delivering exceptional education that bridges the gap between
            academic knowledge and industry requirements
          </p>
          <Link to="/contact">
            <a
              href="#contact"
              className="btn btn-info btn-lg mt-3 rounded-pill px-4"
            >
              Get Started
            </a>
          </Link>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="mb-16" data-aos="flip-right">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 text-black p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
              Our Mission
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
              Statement
            </span>
          </h2>

          <p className="text-xl leading-relaxed text-center">
            "To deliver exceptional education through innovative teaching
            methodologies, experienced faculty, and hands-on learning
            experiences that prepare students for successful careers in
            technology and enable them to become leaders in their fields."
          </p>
        </div>
      </section>

      {/* Mission Objectives */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          <span className="bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
            Our Core
          </span>{" "}
          <span className="bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">
            Objectives
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Objective 1 */}
          <div
            className="rounded-2xl border border-blue-200 shadow bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
            data-aos="flip-up"
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality Education
              </h3>
              <p className="text-gray-700">
                Provide high-quality, industry-relevant training that equips
                students with practical skills and theoretical knowledge needed
                to excel in their chosen fields.
              </p>
            </div>
          </div>

          {/* Objective 2 */}
          <div
            className="rounded-2xl border border-green-200 shadow bg-gradient-to-br from-green-50 to-green-100 overflow-hidden"
            data-aos="flip-up"
          >
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Career Success
              </h3>
              <p className="text-gray-700">
                Facilitate career growth and professional development through
                comprehensive placement assistance, industry connections, and
                ongoing support.
              </p>
            </div>
          </div>

          {/* Objective 3 */}
          <div
            className="rounded-2xl border border-purple-200 shadow bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden"
            data-aos="flip-up"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-400"></div>
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Industry Integration
              </h3>
              <p className="text-gray-700">
                Bridge the gap between academia and industry by collaborating
                with leading companies to design curriculum, provide
                internships, and create employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Fulfill Our Mission */}
      <section className="mb-16">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            How We Fulfill
          </span>{" "}
          <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            Our Mission
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-full mr-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Practical Learning Approach
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Project-based curriculum with real-world applications",
                "Hands-on labs and workshops led by industry experts",
                "Capstone projects that simulate actual work environments",
                "Regular hackathons and coding competitions",
              ].map((item, i) => (
                <li className="flex items-start" key={i}>
                  <span className="text-orange-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div
            className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-pink-100 rounded-full mr-4">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Expert Faculty
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Instructors with 10+ years of industry experience",
                "Regular faculty training on latest technologies and teaching methods",
                "Guest lectures from industry leaders and innovators",
                "Mentorship programs connecting students with professionals",
              ].map((item, i) => (
                <li className="flex items-start" key={i}>
                  <span className="text-pink-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl border border-cyan-200"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-cyan-100 rounded-full mr-4">
                <Award className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Career Support
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Dedicated placement cell with industry connections",
                "Resume building and interview preparation workshops",
                "Mock interviews with HR professionals from partner companies",
                "Lifetime career guidance and alumni support",
              ].map((item, i) => (
                <li className="flex items-start" key={i}>
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4 */}
          <div
            className="bg-gradient-to-br from-violet-50 to-violet-100 p-8 rounded-2xl border border-violet-200"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-violet-100 rounded-full mr-4">
                <Clock className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Continuous Innovation
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Quarterly curriculum updates based on industry feedback",
                "Investment in latest technologies and learning tools",
                "Research partnerships with technology companies",
                "Continuous improvement based on student feedback and outcomes",
              ].map((item, i) => (
                <li className="flex items-start" key={i}>
                  <span className="text-violet-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Impact */}
      {/* <section className="mb-16">
        <h2
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Our Mission Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Students Trained", value: "5000+", color: "blue" },
            { label: "Placement Rate", value: "85%", color: "green" },
            { label: "Industry Partners", value: "50+", color: "purple" },
            { label: "Average Salary Hike", value: "40%", color: "pink" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100} // adds 0ms, 100ms, 200ms, 300ms
              data-aos-duration="800"
              className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-xl border border-${item.color}-200`}
            >
              <div className={`text-3xl font-bold text-${item.color}-600 mb-2`}>
                {item.value}
              </div>
              <div className="text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section data-aos="fade-down" data-aos-duration="1200">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-10 rounded-3xl text-center mb-5">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our mission to transform education and build the next
            generation of technology leaders.
          </p>
          <div className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
            <Link to="/all-courses">Explore Our Courses</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
