import React from "react";
import { HeroSection } from "./Hero";
import { WhyChooseInfronex } from "../Home/WhyChooseInfronex";
import { PopularCourses } from "../Home/PopularCourses";
import { Link } from "react-router-dom";
import CallToAction from "./CallToAction";

const Home = () => {
  console.log("ghfhjg");
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <section className="py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image first on mobile */}
            <div className="relative order-1 md:order-none">
              <img
                src="https://i.pinimg.com/736x/f4/38/0a/f4380aa6600ceddb1212fbad7530d74f.jpg"
                alt="Students learning at Infronex"
                className="rounded-lg shadow-lg w-full h-auto max-h-[480px] md:max-h-[520px] object-cover"
                data-aos="fade-left"
                data-aos-duration="1200"
              />
            </div>

            {/* Text second on mobile */}
            <div
              className="order-2 md:order-none"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Infronex
              </h2> */}
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="text-gray-800">About </span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  CSG Education
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                CSG Education is a premier training institute committed to bridging
                the gap between academic education and real-world industry
                demands. We offer immersive, hands-on training programs in
                cutting-edge technologies such as full-stack development, cloud
                computing, data structures, and core programming languages. Our
                courses are designed by industry experts and delivered by
                seasoned professionals who bring valuable field experience into
                every session. At CSG Education, we focus on developing practical
                skills alongside theoretical knowledge, empowering our students
                to become industry-ready professionals from day one. With a
                learner-centric approach, modern curriculum, and strong industry
                connections, Infronex is the ideal launchpad for aspiring tech
                professionals looking to build a successful career in IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PopularCourses />

      <WhyChooseInfronex />

      <CallToAction />
    </div>
  );
};

export default Home;
