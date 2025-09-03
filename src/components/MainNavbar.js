import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Smartphone,
  MonitorSmartphone,
  BadgeCheck,
  Code2,
  Braces,
  Database,
  Server,
  ShieldPlus,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";
import "./MainNavbar.css";

const Menus = [
  { name: "Home", to: "/" },
  {
    name: "About",
    subMenu: [
      { name: "About us", icon: BadgeCheck, to: "/about/aboutus" },
      { name: "Our Vision", icon: BadgeCheck, to: "/about/vision" },
      { name: "Mission", icon: ShieldPlus, to: "/about/mission" },
    ],
    gridCols: 1,
  },
  {
    name: "Software courses",
    subMenu: [
      {name: "Python",icon: Database,to: "/courses/python"},
      { name: "C Programming", icon: Code2, to: "/courses/c programming" },
      { name: "C++ Programming", icon: Braces, to: "/courses/cpp" },
      { name: "Java", icon: MonitorSmartphone, to: "/courses/java" },
      { name: "HTML", icon: MonitorSmartphone, to: "/courses/html" },
      { name: "ASP.NET", icon: Server, to: "/courses/asp-net" },
      {name: ".NET",icon: Database,to: "/courses/dotnet-full-stack"},
      { name: "Basic Computer", icon: Server, to: "/courses/basic_computer" },
      { name: "Foxpro Programming", icon: Code2, to: "/courses/foxpro" },
      { name: "Linux", icon: Code2, to: "/courses/linux" },
      { name: "SQL", icon: Code2, to: "/courses/sql" },
      { name: "VB Script", icon: Code2, to: "/courses/vbscript" },
    ],
    gridCols: 2,
  },
  {
    name: "Hardware Courses",
    subMenu: [
      { name: "A+N+", icon: Code2, to: "/courses/a+n+" },
      { name: "CCNA", icon: Braces, to: "/courses/ccna" },
      { name: "CCNP", icon: MonitorSmartphone, to: "/courses/ccnp" },
      { name: "redhat linux", icon: Server, to: "/courses/redhat-linux" },
      { name: "Microsoft Server", icon: Server, to: "/courses/microsoft-server" },
      { name: "DTP", icon: Braces, to: "/courses/dtp" },
    ],
    gridCols: 1,
  },
  {
    name: "Multimedia courses",
    subMenu: [
      { name: "2D video editing", icon: BrainCircuit, to: "/courses/2d" },
      { name: "3D video editing", icon: BrainCircuit, to: "/courses/3d" },
      { name: "Audio editing", icon: BrainCircuit, to: "/courses/audio" },
      { name: "Visual Effects", icon: BrainCircuit, to: "/courses/visual-effects" },
      { name: "3D Animation", icon: BrainCircuit, to: "/courses/3da" },
      { name: "Adobe", icon: BrainCircuit, to: "/courses/adobe" },
      { name: "Adobe Photoshop", icon: BrainCircuit, to: "/courses/adobephoto" },
      { name: "Adobe Photoshop 5", icon: BrainCircuit, to: "/courses/adobephoto5" },
      { name: "CorelDraw", icon: Server, to: "/courses/coreldraw" },
      { name: "Flash", icon: BrainCircuit, to: "/courses/flash" },
    ],
    gridCols: 2,
  },
  {
    name: "Others",
    subMenu: [
      { name: "E Commerce", icon: Server, to: "/courses/ecommerce" },
      { name: "Tally", icon: Smartphone, to: "/courses/tally" },
      { name: "AutoCAD", icon: Smartphone, to: "/courses/auto" },
      { name: "Accounting", icon: Smartphone, to: "/courses/accounting" },
      { name: "MS Excel", icon: Code2, to: "/courses/msexcel" },
      { name: "Internet", icon: Code2, to: "/courses/internet" },
    ],
    gridCols: 1,
  },

  // { name: "Pricing", to: "/pricing" },
  { name: "Contact", to: "/contact" },
];

export default function MainNavbar() {
  const [isHover, setIsHover] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.5 },
      transitionEnd: { display: "none" },
    },
  };

  // const subMenuDrawer = {
  //   enter: { height: "auto", overflow: "hidden" },
  //   exit: { height: 0, overflow: "hidden" },
  // };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* <TopNavbar /> */}

      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#0A1D3A] z-50 ">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <Link
              to="/"
              style={{
                animation: "zoomInOut 2.5s ease-in-out infinite",
              }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:drop-shadow-md hover:scale-105"
            >
              CSG Education
            </Link>
          </div>

          {/* Desktop */}
          <ul
            className="gap-x-1 lg:flex-center hidden  "
            style={{ color: "white" }}
          >
            {Menus.map((menu, index) => {
              const hasSubMenu = menu?.subMenu?.length;
              return (
                <motion.li
                  key={menu.name}
                  className="group/link desktop  "
                  // style={{ backgroundColor: "blue", borderRadius: "5px" }}
                  onHoverStart={() => setIsHover(index)}
                  onHoverEnd={() => setIsHover(null)}
                >
                  {hasSubMenu ? (
                    <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
                      {menu.name}
                      <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
                    </span>
                  ) : (
                    <Link
                      to={menu.to}
                      className="flex-center gap-1 hover:bg-white/5 px-3 py-1 rounded-xl"
                    >
                      {menu.name}
                    </Link>
                  )}

                  {hasSubMenu && (
                    <motion.div
                      className="sub-menu absolute mt-2 p-4 rounded-lg  bg-[#0A1D3A] text-white  shadow-lg"
                      initial="exit"
                      animate={isHover === index ? "enter" : "exit"}
                      variants={subMenuAnimate}
                    >
                      <div
                        className={`grid gap-7 ${
                          menu.gridCols === 2 ? "grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {menu.subMenu.map((submenu, i) => (
                          <Link
                            to={submenu.to}
                            key={i}
                            className="relative cursor-pointer"
                          >
                            <div className="flex-center gap-x-4 group/menubox">
                              <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                                <submenu.icon />
                              </div>
                              <div>
                                <h6 className="font-semibold bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                                  {submenu.name}
                                </h6>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.li>
              );
            })}
          </ul>

          {/* Right Side + Mobile */}
          <div className="flex-center gap-x-5">
            <div className="lg:hidden z-[999]">
              <button onClick={toggleDrawer}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {/* <motion.div
          className="fixed left-0 right-0 top-16 overflow-y-auto h-full  bg-[#0A1D3A] backdrop-blur text-white p-6 pb-20 z-40"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
        > */}
        <motion.div
          className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#0A1D3A] backdrop-blur text-white p-6 pb-20 z-40"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul>
            {Menus.map(({ name, to, subMenu }, i) => {
              const isClicked = clicked === i;
              const hasSubMenu = subMenu?.length;

              return (
                <li key={name}>
                  {/* <span
                    className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {hasSubMenu ? (
                      name
                    ) : (
                      <Link to={to} onClick={() => setIsOpen(false)}>
                        {name}
                      </Link>
                    )}
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && "rotate-180"}`}
                      />
                    )}
                  </span> */}

                  {hasSubMenu ? (
                    <span
                      className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer"
                      onClick={() => setClicked(isClicked ? null : i)}
                    >
                      {name}
                      <ChevronDown
                        className={`ml-auto ${isClicked && "rotate-180"}`}
                      />
                    </span>
                  ) : (
                    <Link
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer block"
                    >
                      {name}
                    </Link>
                  )}

                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className="ml-5"
                    >
                      {subMenu.map(({ name, icon: Icon, to }) => (
                        // <li
                        //   key={name}
                        //   className="p-2 flex-center hover:bg-white/5  rounded-md gap-x-2 cursor-pointer"
                        // >
                        //   <Icon size={17} />
                        //   <Link to={to} onClick={() => setIsOpen(false)}>
                        //     {name}
                        //   </Link>
                        // </li>
                        <Link
                          to={to}
                          key={name}
                          onClick={() => setIsOpen(false)}
                          className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                        >
                          <Icon size={17} />
                          {name}
                        </Link>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </header>
    </>
  );
}