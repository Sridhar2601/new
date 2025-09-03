// import React from "react";
// import { Rocket, Users, Briefcase } from "lucide-react";
// import { Link } from "react-router-dom";

// export function HeroSection() {
//   return (
//     // <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#1E1B4B] text-white min-h-screen flex items-center px-4 md:px-20 py-10" >
//     <section
//       className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#1E1B4B] text-white min-h-screen flex items-center px-4 md:px-20 py-10"
//       style={{
//         backgroundImage: `url("https://wallpapertag.com/wallpaper/full/4/8/2/191475-large-background-gradient-1920x1080.jpg")`,
//         // backgroundImage: `url("http://getwallpapers.com/wallpaper/full/d/b/2/492140.jpg")`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto w-full">
//         {/* Top Note - Always comes first on mobile */}
//         <div className="mb-6 md:mb-0 block md:hidden text-yellow-400 font-medium text-sm">
//           🚀 Transforming Education Since 2018
//         </div>

//         {/* Main Grid */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left Side */}
//           <div className="md:w-1/2 flex flex-col space-y-5">
//             {/* Top Note for Desktop */}
// <p className="hidden md:block text-yellow-400 font-medium text-base">
//   🚀 Transforming Education Since 2018
// </p>

//             <h1 className="text-4xl md:text-5xl font-bold leading-tight  ">
//               {/* bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
//               bg-clip-text text-transparent transition-all duration-300
//               hover:drop-shadow-md hover:scale-105 */}
//               Transform Your Career <br />
//               <span className="text-fuchsia-400">with Infronex</span>
//             </h1>
//             <p className="text-base md:text-lg text-white">
//               Master cutting-edge technologies with our industry-expert
//               trainers. Get job-ready skills in Full Stack Development, AI, and
//               more.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <Link to="/all-courses">
//                 <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 text-sm rounded-md transition">
//                   Explore Courses
//                 </button>
//               </Link>

//               <Link to="/contact">
//                 <button className="border  text-white hover:bg-blue-400 hover:text-black px-4 py-2 text-sm rounded-md transition">
//                   Contact Us
//                 </button>
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-6 pt-6">
//               <div className="flex items-center gap-3"></div>
//               <div className="flex items-center gap-3">
//                 <Briefcase className="w-5 h-5 text-black" />
//                 <div>
//                   <h4 className="text-lg font-semibold">100%</h4>
//                   <p className="text-sm text-white">Placement Rate</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Rocket className="w-5 h-5 text-black" />
//                 <div>
//                   <h4 className="text-lg font-semibold">50+</h4>
//                   <p className="text-sm text-white">Industry Partners</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="md:w-1/2 w-full relative flex items-center justify-center">
//             <div className="w-full h-72 md:h-[360px] bg-gray-200 rounded-xl border-2 border-white/20 overflow-hidden">
//               <img
//                 src="https://i.pinimg.com/736x/6b/e7/f7/6be7f7756b8f4737a25c69f1086dfffb.jpg"
//                 alt="Join Today"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-2 rounded-md text-xs md:text-sm font-semibold shadow-lg">
//               Join Today!
//               <br />
//               <span className="text-[10px] font-normal">
//                 Limited seats available
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { Rocket, Briefcase } from "lucide-react";
// import { Link } from "react-router-dom";

// export function HeroSection() {
//   return (
//     <section
//       className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#1E1B4B] text-white min-h-screen flex items-center px-4 md:px-20 py-10"
//       style={{
//         backgroundImage: `url("https://wallpapertag.com/wallpaper/full/4/8/2/191475-large-background-gradient-1920x1080.jpg")`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto w-full">
//         {/* Top Note - Always comes first on mobile */}
//         <p className="block md:hidden text-yellow-400 font-medium text-sm mt-10 ">
//           🚀 Transforming Education Since 2018
//         </p>

//         {/* Main Grid */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left Side */}
//           <div className="md:w-1/2 flex flex-col space-y-5">
//             {/* Top Note for Desktop */}
//             <p className="hidden md:block text-yellow-400 font-medium text-base">
//               🚀 Transforming Education Since 2018
//             </p>

//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Transform Your Career <br />
//               <span className="text-fuchsia-400">with Infronex</span>
//             </h1>
//             <p className="text-base md:text-lg text-white">
//               Master cutting-edge technologies with our industry-expert
//               trainers. Get job-ready skills in Full Stack Development, AI, and
//               more.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <Link to="/all-courses">
//                 <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 text-sm rounded-md transition">
//                   Explore Courses
//                 </button>
//               </Link>

//               <Link to="/contact">
//                 <button className="border text-white hover:bg-blue-400 hover:text-black px-4 py-2 text-sm rounded-md transition">
//                   Contact Us
//                 </button>
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 gap-x-8 pt-6 items-start">
//               <div className="flex items-center gap-3">
//                 <Briefcase className="w-5 h-5 text-black" />
//                 <div>
//                   <h4 className="text-lg font-semibold">100%</h4>
//                   <p className="text-sm text-white">Placement Rate</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Rocket className="w-5 h-5 text-black" />
//                 <div>
//                   <h4 className="text-lg font-semibold">50+</h4>
//                   <p className="text-sm text-white">Industry Partners</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Image */}
//           <div className="md:w-1/2 w-full relative flex items-center justify-center">
//             <div className="w-full h-72 md:h-[360px] bg-gray-200 rounded-xl border-2 border-white/20 overflow-hidden">
//               <img
//                 src="https://i.pinimg.com/736x/6b/e7/f7/6be7f7756b8f4737a25c69f1086dfffb.jpg"
//                 alt="Join Today"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-2 rounded-md text-xs md:text-sm font-semibold shadow-lg">
//               Join Today!
//               <br />
//               <span className="text-[10px] font-normal">
//                 Limited seats available
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Rocket, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section
      className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#1E1B4B] text-white min-h-screen flex items-center px-4 md:px-20 py-10 overflow-hidden"
      style={{
        backgroundImage: `url("https://wallpapertag.com/wallpaper/full/4/8/2/191475-large-background-gradient-1920x1080.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Top Note */}
        <p className="block md:hidden text-yellow-400 font-medium text-sm mt-10">
          🚀 Transforming Education Since 2022
        </p>

        {/* Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 flex flex-col space-y-5">
            <p
              className="hidden md:block text-yellow-400 font-medium text-base"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              🚀 Transforming Education Since 2022
            </p>

            <h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              Transform Your Career <br />
              <span className="text-fuchsia-400">with CSG Education</span>
            </h1>
            <p
              className="text-base md:text-lg text-white"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              Master cutting-edge technologies with our industry-expert
              trainers. Get job-ready skills in software & Hardware development, Multimedia and
              more.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-2"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Link to="/all-courses">
                <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 text-sm rounded-md transition">
                  Explore Courses
                </button>
              </Link>

              <Link to="/contact">
                <button className="border text-white hover:bg-blue-400 hover:text-black px-4 py-2 text-sm rounded-md transition">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-y-4 gap-x-8 pt-6 items-start"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-black" />
                <div>
                  <h4 className="text-lg font-semibold">100%</h4>
                  <p className="text-sm text-white">Placement Rate</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Rocket className="w-5 h-5 text-black" />
                <div>
                  <h4 className="text-lg font-semibold">50+</h4>
                  <p className="text-sm text-white">Industry Partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div>
            <Link to="/all-offeres">
              <button
                className="relative bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 
                font-semibold px-6 py-3 text-lg rounded-xl shadow-lg
                transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <span className="animate-text-blink">Courses Offered</span>
              </button>
            </Link>

            <div
              className="md:w-full w-full relative flex items-center justify-center mt-3"
              data-aos="fade-left"
              data-aos-duration="1200"
            >

              <div className="w-full h-72 md:h-[360px] bg-gray-200 rounded-xl border-2 border-white/20 overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/6b/e7/f7/6be7f7756b8f4737a25c69f1086dfffb.jpg"
                  alt="Join Today"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-2 rounded-md text-xs md:text-sm font-semibold shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                Join Today!
                <br />
                <span className="text-[10px] font-normal">
                  Limited seats available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
