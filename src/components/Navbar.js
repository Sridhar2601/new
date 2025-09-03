import { Phone, Mail } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export function TopNavbar() {
  return (
    <div className="bg-black text-white py-2 px-4 text-sm hidden sm:block sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-left">
          <span className="text-gray-300">Any Queries?</span>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 8248387513</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 9123456789</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 9988776655</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@infronex.com</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <a href="#" className="hover:text-green-400 transition-colors">
            <FaWhatsapp className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaFacebook className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
