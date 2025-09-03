import React from "react";
import {
  Award,
  Target,
  Heart,
  BookOpen,
  Users,
  Lightbulb,
  TrendingUp,
  Globe,
  Clock,
  CheckCircle,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutInfronex = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from curriculum design to student support.",
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Innovation",
      description:
        "We continuously update our courses to reflect the latest industry trends and technologies.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Student-Centric",
      description:
        "Our students are at the heart of everything we do. Their success is our success.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Practical Learning",
      description:
        "We believe in learning by doing, with hands-on projects and real-world applications.",
    },
  ];

  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "5000+",
      title: "Students Trained",
      description:
        "Successfully trained over 5000 students across various domains",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      number: "85%",
      title: "Placement Rate",
      description: "Industry-leading placement success rate for our graduates",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      number: "50+",
      title: "Industry Partners",
      description: "Strong partnerships with leading companies for placements",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      number: "25+",
      title: "Course Programs",
      description: "Comprehensive range of courses across multiple domains",
    },
  ];

  const journey = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "Infronex was founded with a vision to bridge the gap between academic learning and industry requirements.",
      milestone: "Started with 3 courses and 50 students",
    },
    {
      year: "2019",
      title: "First Milestone",
      description:
        "Launched our first batch of courses in software development and trained 100+ students.",
      milestone: "Achieved 80% placement rate in first year",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Adapted to online learning during the pandemic, reaching students across the country.",
      milestone: "Expanded to 10+ courses with online delivery",
    },
    {
      year: "2021",
      title: "AI & Data Science",
      description:
        "Expanded our curriculum to include cutting-edge AI and Data Science courses.",
      milestone: "Launched specialized AI/ML programs",
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description:
        "Formed partnerships with leading tech companies for placement opportunities.",
      milestone: "Partnered with 30+ companies",
    },
    {
      year: "2023",
      title: "5000+ Graduates",
      description:
        "Celebrated training over 5000 students with 85% placement success rate.",
      milestone: "Opened new training centers",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Established innovation labs and research centers for advanced learning.",
      milestone: "Launched 25+ comprehensive programs",
    },
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Head of AI & Data Science",
      experience: "15+ years",
      expertise: "Machine Learning, Deep Learning, Data Analytics",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Priya Sharma",
      role: "Lead Full Stack Instructor",
      experience: "12+ years",
      expertise: "MERN Stack, MEAN Stack, Cloud Technologies",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Amit Patel",
      role: "Senior Software Trainer",
      experience: "10+ years",
      expertise: "Java, Python, C++, Software Architecture",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Sneha Agarwal",
      role: "Digital Marketing Expert",
      experience: "8+ years",
      expertise: "SEO, SEM, Social Media, Content Strategy",
      image: "/placeholder.svg?height=150&width=150",
    },
  ];

  const infrastructure = [
    {
      title: "Modern Classrooms",
      description:
        "Air-conditioned classrooms with latest audio-visual equipment",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Computer Labs",
      description:
        "High-end computers with latest software and development tools",
      icon: <Users className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Project Labs",
      description:
        "Dedicated spaces for hands-on project development and collaboration",
      icon: <Lightbulb className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Library & Resources",
      description:
        "Extensive collection of books, journals, and online resources",
      icon: <BookOpen className="h-6 w-6 text-orange-600" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 overflow-hidden ">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <section
          className="hero text-center container text-white py-8 mb-5 rounded-4"
          style={{
            // background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
            backgroundImage:
              "url('https://images.pexels.com/photos/6985132/pexels-photo-6985132.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",

            paddingTop: "50px",
            marginTop: "80px",
          }}
          data-aos="fade-down"
        >
          <div className="container">
            <div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full "
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <Info className="h-10 w-10 text-white" />
            </div>

            <h1
              className="display-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              About CSG Education
            </h1>

            <p className="lead text-light mt-10">
              Empowering careers through quality education and industry-relevant
              training since 2022
            </p>
            <Link to="/contact">
              <a
                href="#contact"
                className="btn btn-info btn-lg mt-3 rounded-pill px-4"
              >
                Get Started
              </a>
            </Link>
          </div>
        </section>
        <div
          className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-800">CSG Education</span>, we
            believe that education is the key to unlocking human potential.
            Since our inception, we’ve been committed to delivering
            high-quality, industry-relevant training that prepares students for
            real-world success.
            <br />
            <br />
            Whether you aim to become a software or hardware developer, enhance your multimedia skills, or gain expertise in Tally, our programs are designed to provide you with both technical knowledge and hands-on experience.
            <br />
            <br />
            With expert mentors, hands-on projects, and a strong placement track
            record, CSG Education isn’t just a learning destination — it’s your
            launchpad to a brighter, career-ready future.
          </p>
        </div>
      </section>
      {/* <section
        className="hero text-center container text-white py-5 mb-5 rounded-4"
        style={{
          // background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
          backgroundImage:
            "url('https://wallpapers.com/images/hd/purple-gradient-background-1920-x-1080-06vdpubkg9sljoie.jpg')",

          paddingTop: "80px",
          marginTop: "80px",
        }}
        data-aos="fade-down"
      >
        <div className="container">
          <div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-2 mb-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <Info className="h-10 w-10 text-white" />
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-white"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            About Infronex
          </h1>
          <p className="lead text-light">
            Empowering careers through quality education and industry-relevant
            training since 2022
          </p>
          <Link to="/contact">
            <button className="btn btn-info btn-lg mt-3 px-4 rounded-pill">
              Get Started
            </button>
          </Link>
        </div>
      </section> */}

      {/* Achievements Section */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section> */}
      {/* <section className="mb-16">
        <h2
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const flipTypes = [
              "flip-left",
              "flip-right",
              "flip-up",
              "flip-down",
            ];
            const aosType = flipTypes[index % flipTypes.length];
            const delay = index * 150;

            return (
              <div
                key={index}
                className="bg-white text-center rounded-lg p-6 border border-gray-300 hover:shadow-lg transition-shadow"
                data-aos={aosType}
                data-aos-duration="1000"
                data-aos-delay={delay}
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* Overview */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-700 to-sky-500 bg-clip-text text-transparent">
                Our
              </span>{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                Story
              </span>
            </h2>

            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-blue-800">CSG Education</span> was
              born from a simple yet powerful vision — to bridge the gap between
              traditional education and real-world industry demands. What
              started as a passion project by a group of tech educators has now
              evolved into one of the most trusted training academies.
            </p>
            <p className="text-gray-600 mb-4">
              Since our inception, we have been committed to delivering
              high-impact training programs in Full Stack Development, Data
              Science, Artificial Intelligence, and more — designed and
              delivered by experts who understand the pulse of the industry.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we are proud to have trained thousands of students, many of
              whom have gone on to work at top companies across the globe. At
              Infronex, we don’t just educate — we empower futures.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Industry-Relevant Curriculum",
                "Expert Faculty",
                "Hands-on Learning",
                "Placement Support",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image and Caption */}
          <div
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="https://i.pinimg.com/736x/09/ac/d6/09acd6684e6f7d7a22e3180ba6448d00.jpg"
              alt="Infronex Campus"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Modern Learning Environment
              </h3>
              <p className="text-gray-600 text-sm">
                State-of-the-art facilities designed for optimal learning
                experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div
          className="bg-blue-50 border border-blue-200 rounded-lg p-6 transition-colors duration-300 hover:bg-blue-100 cursor-pointer"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="flex items-center mb-2">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
          </div>
          <p className="text-gray-600">
            To be the leading educational platform that transforms lives through
            knowledge, innovation, and opportunity. We envision a future where
            every learner is empowered with the skills and mindset to shape
            their own success story — globally competent, digitally equipped,
            and socially responsible.
          </p>
        </div>

        {/* Mission */}
        <div
          className="bg-green-50 border border-green-200 rounded-lg p-6 transition-colors duration-300 hover:bg-green-100 cursor-pointer"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex items-center mb-2">
            <BookOpen className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            To deliver exceptional education through innovative teaching
            methods, real-world curriculum, and expert mentorship. Our mission
            is to bridge the gap between classroom learning and industry
            expectations by fostering a culture of continuous growth, critical
            thinking, and practical application.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
            Our
          </span>{" "}
          <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            Core
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">
            Values
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white text-center cursor-pointer rounded-lg p-6 transition-shadow hover:shadow-lg border border-transparent hover:border-blue-500"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet Our Expert Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-2">
                {member.experience} Experience
              </p>
              <p className="text-xs text-gray-500">{member.expertise}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Training Methodology */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg border shadow">
        <h2
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
            Our
          </span>{" "}
          <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
            Training
          </span>{" "}
          <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
            Methodology
          </span>
        </h2>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            {
              icon: <BookOpen className="h-8 w-8 text-blue-600" />,
              bg: "bg-blue-100",
              borderTop: "border-t-4 border-blue-500",
              title: "Theory + Practice",
              desc: "Balanced approach combining theory with practice",
            },
            {
              icon: <Users className="h-8 w-8 text-green-600" />,
              bg: "bg-green-100",
              borderTop: "border-t-4 border-green-500",
              title: "Small Batch Size",
              desc: "Personalized attention and better learning outcomes",
            },
            {
              icon: <Award className="h-8 w-8 text-purple-600" />,
              bg: "bg-purple-100",
              borderTop: "border-t-4 border-purple-500",
              title: "Industry Projects",
              desc: "Real-world challenges and solutions",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center bg-white ${item.borderTop} border rounded-lg p-6 shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl`}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <div
                className={`${item.bg} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Grid: Unique Learning Approach */}
        <div
          className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Unique
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">
              Learning
            </span>{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
              Approach
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                phase: "Foundation Building",
                color: "border-blue-500",
                points: [
                  "Clear explanation of core concepts",
                  "Interactive classroom sessions",
                  "Personalized doubt-clearing support",
                ],
              },
              {
                phase: "Skill Development",
                color: "border-green-500",
                points: [
                  "Hands-on coding exercises & labs",
                  "Real-world tool usage (Git, VS Code, etc.)",
                  "Weekly assignments and mini-projects",
                ],
              },
              {
                phase: "Real-world Application",
                color: "border-purple-500",
                points: [
                  "Live industry project experience",
                  "Agile methodologies & teamwork practice",
                  "Performance-based reviews and guidance",
                ],
              },
              {
                phase: "Career Preparation",
                color: "border-yellow-500",
                points: [
                  "Resume building and portfolio setup",
                  "Mock interviews and soft skill training",
                  "Placement assistance and job referrals",
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`border-t-4 ${item.color} border p-4 rounded hover:shadow-md transition-shadow duration-300`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={idx * 150}
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Phase {idx + 1}: {item.phase}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            World-Class
          </span>{" "}
          <span className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Infrastructure
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infrastructure.map((facility, index) => {
            const flipTypes = [
              "flip-left",
              "flip-right",
              "flip-up",
              "flip-down",
            ];
            const aosType = flipTypes[index % flipTypes.length];
            const delay = index * 150;

            // Cycle top border colors
            const topBorders = [
              "border-t-4 border-blue-500",
              "border-t-4 border-green-500",
              "border-t-4 border-purple-500",
              "border-t-4 border-yellow-500",
            ];
            const borderColor = topBorders[index % topBorders.length];

            // Corresponding hover text colors
            const hoverTextColors = [
              "group-hover:text-white",
              "group-hover:text-white",
              "group-hover:text-white",
              "group-hover:text-white",
            ];
            const hoverText = hoverTextColors[index % hoverTextColors.length];

            return (
              <div
                key={index}
                className={`group bg-white rounded-lg p-6 border ${borderColor} transition-all duration-300 hover:!bg-[#002147] hover:shadow-lg cursor-pointer`}
                data-aos={aosType}
                data-aos-duration="1000"
                data-aos-delay={delay}
              >
                <div className="flex items-center mb-3">
                  {facility.icon}
                  <h3
                    className={`text-lg font-semibold text-gray-900 ml-2 transition-colors duration-300 ${hoverText}`}
                  >
                    {facility.title}
                  </h3>
                </div>
                <p
                  className={`text-gray-600 text-sm transition-colors duration-300 ${hoverText}`}
                >
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Journey Timeline */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Journey Through the Years
        </h2>
        <div className="space-y-8">
          {journey.map((milestone, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {milestone.year}
              </div>
              <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 mb-2">{milestone.description}</p>
                <div className="flex items-center text-sm text-blue-600">
                  <Award className="h-4 w-4 mr-1" />
                  <span className="font-medium">{milestone.milestone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Commitment Section */}
      <section className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We are committed to maintaining the highest standards of education
            by providing personalized mentorship, real-world exposure, and
            continuous growth opportunities for our students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="h-8 w-8 mx-auto mb-2" />,
                title: "Lifetime Support",
                desc: "Continuous guidance even after course completion",
              },
              {
                icon: <Users className="h-8 w-8 mx-auto mb-2" />,
                title: "Alumni Network",
                desc: "Strong community of successful professionals",
              },
              {
                icon: <TrendingUp className="h-8 w-8 mx-auto mb-2" />,
                title: "Career Growth",
                desc: "Ongoing career development opportunities",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center bg-white/10 border border-white/30 rounded-lg p-6 hover:bg-blue-500/20 transition duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={idx * 150}
              >
                {item.icon}
                <h3 className="font-semibold mb-1 text-white">{item.title}</h3>
                <p className="text-sm opacity-90 text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInfronex;
