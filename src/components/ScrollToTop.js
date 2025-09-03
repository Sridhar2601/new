// // src/ScrollToTop.js
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;

// src/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: false, // trigger every time element enters viewport
    });

    AOS.refresh(); // ensure animations re-calculate on route change
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      AOS.refresh(); // refresh AOS positions on scroll up/down
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
};

export default ScrollToTop;
