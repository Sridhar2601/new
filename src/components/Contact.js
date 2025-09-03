import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import FAQSection from "./FAQSection";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Numbers",
      details: ["+91 8248387513", "+91 9123456789", "+91 9988776655"],
      action: "Call us for immediate assistance",
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email Address",
      details: ["info@infronex.com", "admissions@infronex.com"],
      action: "Send us your queries anytime",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Our Location",
      details: [
        "123 Tech Street, Innovation Hub",
        "Bangalore, Karnataka 560001",
      ],
      action: "Visit our campus for a tour",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
      ],
      action: "We're here to help during business hours",
    },
  ];

  const courses = [
    "MERN Stack Development",
    "MEAN Stack Development",
    "Django + React",
    "Java Programming",
    "Python Programming",
    "Data Science",
    "Machine Learning",
    "Digital Marketing",
    "Graphic Design",
    "MS Office",
    "Tally",
    "Other",
  ];

  const faqs = [
    {
      question: "What are the course timings?",
      answer:
        "We offer flexible timings including morning (9 AM - 12 PM), afternoon (2 PM - 5 PM), and evening (6 PM - 9 PM) batches. Weekend batches are also available.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we have a dedicated placement cell that provides 100% placement assistance including resume building, interview preparation, and job referrals.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Our fees vary by course. We offer flexible payment options including installments. Contact us for detailed fee information for specific courses.",
    },
    {
      question: "Can I get a demo class?",
      answer:
        "We offer free demo classes for all our courses. You can book a demo session by calling us or filling out the contact form.",
    },
    {
      question: "Do you provide certificates?",
      answer:
        "Yes, we provide industry-recognized certificates upon successful completion of the course. Our certificates are valued by employers across the industry.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10 overflow-hidden">
      <section className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-5"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          Get in Touch
        </h1>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Ready to start your learning journey? We're here to help you choose
          the right course and answer all your questions.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* <div className="lg:col-span-2 bg-white shadow rounded-lg pt-6 px-6 pb-2">
          <h2 className="text-2xl font-semibold flex items-center mb-6 text-black">
            <Send className="h-6 w-6 mr-2" /> Send us a Message
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Course of Interest
                </label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={formData.course}
                  onChange={(e) => handleChange("course", e.target.value)}
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows="5"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your learning goals, preferred timings, or any specific questions..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center"
            >
              <Send className="h-4 w-4 mr-2" /> Send Message
            </button>
          </form>
        </div> */}
        <div
          className="lg:col-span-2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold flex items-center mb-6 text-gray-900">
              <Send className="h-6 w-6 mr-2" />
              Send us a Message
            </h2>

            <ContactForm
              courses={[
                "MERN Stack Development",
                "MEAN Stack Development",
                "Django + React",
                "Java Programming",
                "Python Programming",
                "Data Science",
                "Machine Learning",
                "Digital Marketing",
              ]}
            />
          </div>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              data-aos={
                ["fade-left", "fade-up-left", "zoom-in-left"][index % 3]
              }
              data-aos-duration="1000"
              className="bg-white shadow p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-3">
                {info.icon}
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-xs text-gray-500 mt-2">{info.action}</p>
                </div>
              </div>
            </div>
          ))}

          {/* <div
            className="bg-white shadow p-6 rounded-lg"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" /> Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 hover:text-green-700">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-800">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Stay updated with our latest courses and success stories
            </p>
          </div> */}
        </div>
      </div>

      <section className="mb-12" data-aos="fade-down" data-aos-duration="1200">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Find Us on Map</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p className="font-medium">Interactive Map</p>
              <p className="text-sm">
                123 Tech Street, Innovation Hub, Bangalore
              </p>
              <p className="text-xs mt-2">
                Google Maps integration would be implemented here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section> */}

      <FAQSection faqs={faqs} />
      <section
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center mt-10"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of successful students who have transformed their
          careers with{" "}
          <span className="font-semibold">Infronex Software Institute</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Button */}
          <a
            href="tel:+918248387513"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center transition duration-300"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Now: +91 8248387513
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918248387513?text=Hi%20Infronex%20Team%2C%20I%20am%20interested%20in%20your%20software%20training%20programs.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:text-white transition duration-300"
          >
            <FaWhatsapp className="h-4 w-4 mr-2" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
