import { Phone, Mail, MapPin, Twitter } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              CSG Education
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering careers through quality education and industry-relevant
              training.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/918248387513"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              {/* <a
                href="mailto:info@infronex.com"
                className="text-gray-300 hover:text-red-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a> */}

              <a
                href="https://x.com/infronex27691"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=xtyu37w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="http://www.linkedin.com/in/infronex-it-products-and-services-109929361"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about/aboutus"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/all-courses"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses/a+n+"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  A+N+
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/visual-effects"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Visual Effects
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/cpp"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  C++ Programming
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/tally"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tally
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Tech Street, Innovation Hub,
                  <br />
                  Sivanathapuram, saravanampatti- 560001
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">+91 8248387513</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">csgedu@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 CSG education. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}
