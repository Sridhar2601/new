// import "./App.css";
// import Navbar from "./components/Navbar";
// import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import MainNavbar from "./components/MainNavbar";
import { Footer } from "./components/Footer";

import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import CoursePage from "./components/CoursePage";
import OfferPage from "./components/OfferPage";
import { AllCoursesContent } from "./components/AllCoursesContent";
import { AllCoursesOffer } from "./components/AllCoursesOffer";
import AboutInfronex from "./About/AboutInfronex";
import { VisionContent } from "./About/VisionContent";
import { MissionContent } from "./About/MissionContent";
import { JourneyContent } from "./About/JourneyContent";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/aboutus" element={<AboutInfronex />} />
        <Route path="/about/vision" element={<VisionContent />} />
        <Route path="/about/mission" element={<MissionContent />} />
        <Route path="/about/journey" element={<JourneyContent />} />
        <Route path="/all-offeres" element={<AllCoursesOffer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:slug" element={<CoursePage />} />
        <Route path="/offered/:slug" element={<OfferPage />} />
        <Route path="/all-courses" element={<AllCoursesContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
