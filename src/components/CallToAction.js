import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div>
      <section
        data-aos="fade-down"
        data-aos-duration="1200"
        style={{ marginLeft: "50px", marginRight: "50px", marginTop: "42px" }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-10 rounded-3xl text-center mb-5">
          <h2 className="text-3xl font-bold mb-4">
            {" "}
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our exclusive programs and get guaranteed placement assistance
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors text-center text-sm sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
