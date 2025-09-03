import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function VisionContent() {
  return (
    <div className="container mx-auto px-4 mt-10 overflow-hidden">
      {/* Hero Section */}
      {/* <section className="text-center mb-16">
        <div
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-5 mb-6"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Target className="h-10 w-10 text-white" />
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          Our Vision
        </h1>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Shaping the future of technology education and empowering the next
          generation of tech leaders
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
            <Target className="h-10 w-10 text-white" />
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            Our Vision
          </h1>
          <p className="lead text-light">
            Shaping the future of technology education and empowering the next
            generation of tech leaders
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
      {/* Vision Statement */}
      {/* bg-gradient-to-r from-blue-50 to-purple-50 */}
      <section className="mb-16">
        <div
          className="
          
          bg-gradient-to-r from-blue-50 to-purple-50
           text-black p-10 rounded-3xl shadow-xl"
          data-aos="flip-right"
          data-aos-duration="1200"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
              Vision
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">
              Statement
            </span>
          </h2>

          <p
            className="text-xl leading-relaxed text-center"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            "To be the leading educational platform that transforms lives by
            providing world-class, industry-relevant training that empowers
            individuals to achieve their career aspirations and contribute
            meaningfully to the global technology ecosystem."
          </p>
        </div>
      </section>
      {/* Vision Pillars */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent">
            The Pillars of
          </span>{" "}
          <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            Our Vision
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar Card */}
          <div
            className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl overflow-hidden shadow-md"
            data-aos="fade-right"
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Innovation in Education
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We envision a learning ecosystem that continuously evolves with
                technology trends, incorporating cutting-edge teaching
                methodologies and tools. Our curriculum is designed to be
                dynamic, reflecting the latest industry demands and preparing
                students for technologies that will shape the future.
              </p>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl overflow-hidden shadow-md"
            data-aos="fade-left"
          >
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Career Transformation
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We see education as a transformative force that can elevate
                careers and change lives. Our vision is to create pathways for
                individuals to transition into high-growth technology fields,
                regardless of their background, and achieve significant career
                advancement through practical, job-oriented training.
              </p>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl overflow-hidden shadow-md"
            data-aos="flip-left"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-400"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Global Tech Community
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We envision building a global community of tech professionals
                who learn, collaborate, and grow together. Through our alumni
                network, industry partnerships, and collaborative learning
                environments, we aim to foster connections that transcend
                geographical boundaries and create a supportive ecosystem for
                continuous growth.
              </p>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl overflow-hidden shadow-md"
            data-aos="flip-right"
          >
            <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Industry Impact
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision extends beyond individual success to making a
                significant impact on the technology industry. By producing
                skilled professionals who bring fresh perspectives and
                innovative solutions, we aim to contribute to technological
                advancement and help organizations solve complex challenges
                through a well-trained workforce.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Vision in Action */}
      <section className="mb-16">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
            Our Vision
          </span>{" "}
          <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
            in Action
          </span>
        </h2>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Curriculum Innovation",
                desc: "Quarterly curriculum updates based on industry feedback and technology trends to ensure relevance",
                number: "1",
                bg: "from-purple-600 to-pink-500",
                aos: "fade-left",
              },
              {
                title: "Industry Partnerships",
                desc: "Strategic collaborations with 50+ companies to create employment pathways for our students",
                number: "2",
                bg: "from-blue-600 to-cyan-400",
                aos: "fade-up",
              },
              {
                title: "Global Expansion",
                desc: "Extending our reach to international markets to create a diverse learning community",
                number: "3",
                bg: "from-green-500 to-emerald-400",
                aos: "fade-right",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center cursor-pointer border border-gray-200 rounded-xl p-6 bg-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-100"
                data-aos={item.aos}
                data-aos-duration="1200"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.bg} rounded-full mb-4`}
                >
                  <span className="text-2xl font-bold text-white">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section data-aos="fade-down" data-aos-duration="1200">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-10 rounded-3xl mb-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Vision</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already transforming their
            careers and contributing to our shared vision of technological
            excellence.
          </p>
          <Link
            to="/all-courses"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
          >
            Explore Our Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
