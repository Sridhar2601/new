// import { Send } from "lucide-react";
// import { useState } from "react";

// const ContactForm = ({ courses }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log(formData);
//   };

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       {/* Name & Email */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium mb-1 text-black">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             className="w-full border border-gray-300 rounded px-3 py-2 text-black"
//             value={formData.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//             placeholder="Enter your full name"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1 text-black">
//             Email Address *
//           </label>
//           <input
//             type="email"
//             className="w-full border border-gray-300 rounded px-3 py-2 text-black"
//             value={formData.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//       </div>

//       {/* Phone & Course Select */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium mb-1 text-black">
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             className="w-full border border-gray-300 rounded px-3 py-2 text-black"
//             value={formData.phone}
//             onChange={(e) => handleChange("phone", e.target.value)}
//             placeholder="Enter your phone number"
//             required
//             pattern="[0-9]{10,15}"
//             title="Please enter a valid phone number"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1 text-black">
//             Course of Interest *
//           </label>
//           <select
//             className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white"
//             value={formData.course}
//             onChange={(e) => handleChange("course", e.target.value)}
//             required
//           >
//             <option value="">Select a course</option>
//             {courses.map((course) => (
//               <option key={course} value={course} className="text-black">
//                 {course}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="block text-sm font-medium mb-1 text-black">
//           Message *
//         </label>
//         <textarea
//           className="w-full border border-gray-300 rounded px-3 py-2 text-black"
//           rows="5"
//           value={formData.message}
//           onChange={(e) => handleChange("message", e.target.value)}
//           placeholder="Tell us about your learning goals, preferred timings, or any specific questions..."
//           required
//         ></textarea>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center"
//       >
//         <Send className="h-4 w-4 mr-2" /> Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

import { Send } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = ({ courses }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kxgvlfv", // e.g., service_xxxx
        "template_ngemf6f", // e.g., template_xxxx
        form.current,
        {
          publicKey: "ErKxTk2VXe67nvYSI", // e.g., abcDEFg123456
        }
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for contacting us. We'll get back to you soon.",
          });
          form.current.reset(); // clear form
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      {/* Phone & Course */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            placeholder="Enter your phone number"
            pattern="[0-9]{10,15}"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Course of Interest *
          </label>
          <select
            name="course"
            className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white"
            required
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

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1 text-black">
          Message *
        </label>
        <textarea
          name="message"
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          rows="5"
          placeholder="Tell us about your learning goals, timings, or questions..."
          required
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center"
      >
        <Send className="h-4 w-4 mr-2" /> Send Message
      </button>
    </form>
  );
};

export default ContactForm;
