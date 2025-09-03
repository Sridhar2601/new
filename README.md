# React & Tailwind CSS Starter Pack

This is a starter pack for creating React projects with Tailwind CSS configured. It uses React version **18.2** and Tailwind CSS version **3.2**.

## Usage

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
   `sh
git clone https://github.com/thepranaygupta/react-tailwind-css-starter-pack.git
`
   // font - sans;
1. Install the required packages.

   ```sh
   cd react-tailwind-css-starter-pack
   npm install
   ```

1. Start the development server.
   ```sh
   npm start
   ```
1. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
1. Create your React components and add your styles using Tailwind classes. You can also create new CSS files and import them into your components.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.

// MainNavbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

import {
ChevronDown,
Menu,
X,
PanelsTopLeft,
Bolt,
PanelTop,
ShoppingBag,
MapPin,
BellDot,
Play,
BookOpenText,
Figma,
BriefcaseBusiness,
Images,
CircleHelp,
MessageCircle,
TriangleAlert,
ShieldPlus,
Users,
Dessert,
Lock,
Braces,
Code2,
Server,
Database,
Cpu,
Layers3,
Cloud,
Plug,
GitBranch,
} from "lucide-react";
// import Logo from "./assets/logo.webp";

const Menus = [
{ name: "Home" },
{
name: "About",
// subMenuHeading: ["Design", "Scale"],
subMenu: [
{ name: "Our Vision", icon: PanelsTopLeft },
{ name: "Mission", icon: PanelsTopLeft },
{ name: "Team", icon: PanelsTopLeft },
],
gridCols: 2,
},
{
name: "Full stack courses",

    subMenu: [
      { name: "MERN Stack", icon: Braces }, // JavaScript-focused
      { name: "MEAN Stack", icon: Code2 }, // Angular-based
      { name: "Java Full Stack", icon: Layers3 }, // Java backend
      { name: "Python Full Stack", icon: Cpu }, // Python backend
      { name: "PHP Full Stack", icon: Server }, // PHP backend
      { name: "DotNet Full Stack", icon: Database }, // .NET tech
    ],
    gridCols: 2,

},
{
name: "Software courses",

    subMenu: [
      { name: "Frontend Development", icon: Code2 },
      { name: "Backend Development", icon: Server },
      { name: "Database Management", icon: Database },

      { name: "Version Control (Git)", icon: GitBranch },
      { name: "API Integration", icon: Plug },
      { name: "Cloud Computing", icon: Cloud },
    ],

    gridCols: 2,

},
{
name: "Support",
subMenu: [
{ name: "Help", desc: "Center", icon: CircleHelp },
{ name: "Community", desc: "Project help", icon: MessageCircle },
{ name: "Emergency", desc: "Urgent issues", icon: TriangleAlert },
],
gridCols: 1,
},
{
name: "Enterprise",
subMenuHeading: ["Overview", "Features"],
subMenu: [
{ name: "Enterprise", desc: "Overview", icon: ShieldPlus },
{ name: "Collaboration", desc: "Design together", icon: Users },
{ name: "Customers", desc: "Stories", icon: Dessert },
{ name: "Security", desc: "Your site secured", icon: Lock },
],
gridCols: 2,
},
{ name: "Pricing" },
{ name: "Contact" },
];

export default function App() {
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

const subMenuDrawer = {
enter: { height: "auto", overflow: "hidden" },
exit: { height: 0, overflow: "hidden" },
};

return (

<header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A] z-50">
<nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
<div className="flex-center gap-x-3 z-[999] relative">
<img src="" alt="logo" className="size-8" />
<h3 className="text-lg font-semibold">Framer</h3>
</div>

        {/* Desktop */}
        <ul
          className="gap-x-1 lg:flex-center hidden"
          style={{ color: "white" }}
        >
          {Menus.map((menu, index) => {
            const hasSubMenu = menu?.subMenu?.length;
            return (
              <motion.li
                key={menu.name}
                className="group/link"
                onHoverStart={() => setIsHover(index)}
                onHoverEnd={() => setIsHover(null)}
              >
                <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
                  {menu.name}
                  {hasSubMenu && (
                    <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
                  )}
                </span>

                {hasSubMenu && (
                  <motion.div
                    className="sub-menu absolute mt-2 p-4 rounded-lg bg-[#222] text-white shadow-lg"
                    initial="exit"
                    animate={isHover === index ? "enter" : "exit"}
                    variants={subMenuAnimate}
                  >
                    <div
                      className={`grid gap-7 ${
                        menu.gridCols === 3
                          ? "grid-cols-3"
                          : menu.gridCols === 2
                          ? "grid-cols-2"
                          : "grid-cols-1"
                      }`}
                    >
                      {menu.subMenu.map((submenu, i) => (
                        <div className="relative cursor-pointer" key={i}>
                          {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                            <p className="text-sm mb-4 text-gray-500">
                              {menu.subMenuHeading[i]}
                            </p>
                          )}
                          <div className="flex-center gap-x-4 group/menubox">
                            <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                              <submenu.icon />
                            </div>
                            <div>
                              <h6 className="font-semibold">{submenu.name}</h6>
                              <p className="text-sm text-gray-400">
                                {/* {submenu.desc} */}
                              </p>
                            </div>
                          </div>
                        </div>
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
          <button
            aria-label="sign-in"
            className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
          >
            Sign In
          </button>
          <div className="lg:hidden z-[999]">
            <button onClick={toggleDrawer}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20 z-40"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Icon size={17} />
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </header>

);
}

@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
@apply text-gray-300 font-inter;
}

@layer components {
.sub-menu {
@apply absolute top-[4.2rem] p-[15px] rounded-[6px] origin-[50%_-170px] backdrop-blur bg-white/[0.04];
}
}

@layer utilities {
.flex-center {
@apply flex items-center;
}
.flex-center-between {
@apply flex items-center justify-between;
}
}
