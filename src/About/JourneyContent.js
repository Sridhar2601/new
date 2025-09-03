// import { Card, div } from "@/components/ui/card";
import {
  Clock,
  Award,
  Users,
  Rocket,
  Globe,
  Zap,
  BookOpen,
} from "lucide-react";

export function JourneyContent() {
  const journeyMilestones = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "Infronex was founded with a vision to bridge the gap between academic learning and industry requirements.",
      milestone: "Started with 3 courses and 50 students",
      color: "from-blue-600 to-cyan-400",
      icon: <Rocket className="h-8 w-8 text-white" />,
    },
    {
      year: "2019",
      title: "First Milestone",
      description:
        "Launched our first batch of courses in software development and trained 100+ students.",
      milestone: "Achieved 80% placement rate in first year",
      color: "from-purple-600 to-pink-500",
      icon: <Award className="h-8 w-8 text-white" />,
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Adapted to online learning during the pandemic, reaching students across the country.",
      milestone: "Expanded to 10+ courses with online delivery",
      color: "from-green-500 to-emerald-400",
      icon: <Globe className="h-8 w-8 text-white" />,
    },
    {
      year: "2021",
      title: "AI & Data Science",
      description:
        "Expanded our curriculum to include cutting-edge AI and Data Science courses.",
      milestone: "Launched specialized AI/ML programs",
      color: "from-orange-500 to-amber-400",
      icon: <Zap className="h-8 w-8 text-white" />,
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description:
        "Formed partnerships with leading tech companies for placement opportunities.",
      milestone: "Partnered with 30+ companies",
      color: "from-red-500 to-rose-400",
      icon: <Users className="h-8 w-8 text-white" />,
    },
    {
      year: "2023",
      title: "5000+ Graduates",
      description:
        "Celebrated training over 5000 students with 85% placement success rate.",
      milestone: "Opened new training centers",
      color: "from-violet-600 to-indigo-400",
      icon: <BookOpen className="h-8 w-8 text-white" />,
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Established innovation labs and research centers for advanced learning.",
      milestone: "Launched 25+ comprehensive programs",
      color: "from-teal-500 to-cyan-400",
      icon: <Clock className="h-8 w-8 text-white" />,
    },
  ];

  const challenges = [
    {
      title: "Pandemic Adaptation",
      description:
        "Rapidly transitioning to online learning while maintaining educational quality during COVID-19",
      solution:
        "Developed a custom learning management system and trained faculty for virtual instruction",
    },
    {
      title: "Scaling Quality",
      description:
        "Maintaining educational excellence while expanding to serve more students across multiple locations",
      solution:
        "Implemented standardized training for instructors and rigorous quality control processes",
    },
    {
      title: "Technology Evolution",
      description:
        "Keeping curriculum updated with rapidly changing technology trends and industry requirements",
      solution:
        "Established quarterly curriculum review with industry advisory board and technology experts",
    },
  ];

  //   return (
  //     <div className="container mx-auto px-4">
  //       {/* Hero Section */}
  //       <section className="text-center mb-16">
  //         <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-6">
  //           <Clock className="h-10 w-10 text-white" />
  //         </div>
  //         <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
  //           Our Journey
  //         </h1>
  //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //           The story of Infronex's evolution from a small startup to a leading
  //           technology education provider
  //         </p>
  //       </section>

  //       {/* Journey Timeline */}
  //       <section className="mb-16">
  //         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
  //           Our Journey Through the Years
  //         </h2>
  //         <div className="space-y-12">
  //           {journeyMilestones.map((milestone, index) => (
  //             <div
  //               key={index}
  //               className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
  //                 index % 2 !== 0 ? "md:flex-row-reverse" : ""
  //               }`}
  //             >
  //               <div className="md:w-1/3">
  //                 <div
  //                   className={`bg-gradient-to-r ${milestone.color} p-6 rounded-2xl text-white shadow-lg`}
  //                 >
  //                   <div className="flex items-center mb-4">
  //                     <div className="p-2 bg-white/20 rounded-full mr-3">
  //                       {milestone.icon}
  //                     </div>
  //                     <h3 className="text-2xl font-bold">{milestone.year}</h3>
  //                   </div>
  //                   <h4 className="text-xl font-semibold mb-2">
  //                     {milestone.title}
  //                   </h4>
  //                   <p className="text-white/90 mb-4">{milestone.description}</p>
  //                   <div className="flex items-center text-sm bg-white/20 p-2 rounded-lg">
  //                     <Award className="h-4 w-4 mr-2" />
  //                     <span>{milestone.milestone}</span>
  //                   </div>
  //                 </div>
  //               </div>

  //               <div className="hidden md:block w-8 relative">
  //                 <div className="absolute inset-0 flex items-center justify-center">
  //                   <div className="h-full w-1 bg-gray-200"></div>
  //                 </div>
  //                 <div className="absolute inset-0 flex items-center justify-center">
  //                   <div
  //                     className={`h-4 w-4 rounded-full bg-gradient-to-r ${milestone.color}`}
  //                   ></div>
  //                 </div>
  //               </div>

  //               <div className="md:w-2/3">
  //                 {index === 0 && (
  //                   <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
  //                     <div className="p-6">
  //                       <h4 className="text-xl font-bold text-gray-900 mb-3">
  //                         The Beginning
  //                       </h4>
  //                       <p className="text-gray-700 mb-4">
  //                         Infronex was born from a simple yet powerful vision: to
  //                         create a bridge between academic learning and real-world
  //                         industry requirements. We recognized that while
  //                         traditional education provides a strong foundation,
  //                         there was a significant gap in practical, job-ready
  //                         skills.
  //                       </p>
  //                       <p className="text-gray-700">
  //                         Our founders, a team of industry professionals and
  //                         educators, came together with a shared mission to
  //                         transform technology education and make it more relevant
  //                         to the rapidly evolving job market.
  //                       </p>
  //                     </div>
  //                   </div>
  //                 )}

  //                 {index === 2 && (
  //                   <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
  //                     <div className="p-6">
  //                       <h4 className="text-xl font-bold text-gray-900 mb-3">
  //                         Pandemic Pivot
  //                       </h4>
  //                       <p className="text-gray-700">
  //                         When the COVID-19 pandemic hit, we faced our biggest
  //                         challenge yet. Within just two weeks, we transformed our
  //                         entire curriculum for online delivery, developed
  //                         interactive virtual labs, and trained our faculty in
  //                         remote teaching methodologies. This rapid digital
  //                         transformation not only allowed us to continue serving
  //                         our existing students but also opened doors to reach
  //                         learners across the country who previously couldn't
  //                         access our physical centers.
  //                       </p>
  //                     </div>
  //                   </div>
  //                 )}

  //                 {index === 4 && (
  //                   <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
  //                     <div className="p-6">
  //                       <h4 className="text-xl font-bold text-gray-900 mb-3">
  //                         Industry Integration
  //                       </h4>
  //                       <p className="text-gray-700">
  //                         Our partnership program with leading tech companies
  //                         marked a significant milestone in our journey. By
  //                         collaborating directly with employers, we gained
  //                         invaluable insights into their hiring needs and skill
  //                         requirements. This allowed us to refine our curriculum
  //                         to precisely match industry demands, resulting in our
  //                         highest-ever placement rates and starting salaries for
  //                         graduates.
  //                       </p>
  //                     </div>
  //                   </div>
  //                 )}

  //                 {index === 6 && (
  //                   <div className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
  //                     <div className="p-6">
  //                       <h4 className="text-xl font-bold text-gray-900 mb-3">
  //                         Looking to the Future
  //                       </h4>
  //                       <p className="text-gray-700">
  //                         As we continue to grow, our focus remains on innovation
  //                         and excellence in education. Our newly established
  //                         innovation labs are exploring cutting-edge technologies
  //                         like quantum computing, advanced AI, and metaverse
  //                         development to ensure our students are prepared for the
  //                         technologies of tomorrow. With a strong foundation and
  //                         clear vision, we're excited about the next chapter in
  //                         our journey of transforming technology education.
  //                       </p>
  //                     </div>
  //                   </div>
  //                 )}
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //       {/* Challenges & Solutions */}
  //       <section className="mb-16">
  //         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
  //           Challenges & Solutions
  //         </h2>
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  //           {challenges.map((challenge, index) => (
  //             <div key={index} className="overflow-hidden">
  //               <div
  //                 className={`h-2 bg-gradient-to-r ${
  //                   index === 0
  //                     ? "from-purple-600 to-pink-500"
  //                     : index === 1
  //                     ? "from-blue-600 to-cyan-400"
  //                     : "from-green-500 to-emerald-400"
  //                 }`}
  //               ></div>
  //               <div className="p-6">
  //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
  //                   {challenge.title}
  //                 </h3>
  //                 <p className="text-gray-700 mb-4">{challenge.description}</p>
  //                 <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
  //                   <div className="text-sm font-semibold text-gray-700 mb-1">
  //                     Our Solution:
  //                   </div>
  //                   <p className="text-gray-600 text-sm">{challenge.solution}</p>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //       {/* Key Learnings */}
  //       <section className="mb-16">
  //         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
  //           Key Learnings from Our Journey
  //         </h2>
  //         <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200">
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //             <div className="flex items-start">
  //               <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white mr-4 mt-1">
  //                 <Award className="h-5 w-5" />
  //               </div>
  //               <div>
  //                 <h3 className="text-lg font-bold text-gray-900 mb-2">
  //                   Adaptability is Essential
  //                 </h3>
  //                 <p className="text-gray-700">
  //                   The ability to quickly adapt to changing circumstances and
  //                   market needs has been crucial to our success, especially
  //                   during challenging times like the pandemic.
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="flex items-start">
  //               <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-white mr-4 mt-1">
  //                 <Users className="h-5 w-5" />
  //               </div>
  //               <div>
  //                 <h3 className="text-lg font-bold text-gray-900 mb-2">
  //                   Student-Centric Approach
  //                 </h3>
  //                 <p className="text-gray-700">
  //                   Keeping students at the center of every decision has guided
  //                   our growth and ensured that we never compromise on educational
  //                   quality despite rapid expansion.
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="flex items-start">
  //               <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full text-white mr-4 mt-1">
  //                 <Globe className="h-5 w-5" />
  //               </div>
  //               <div>
  //                 <h3 className="text-lg font-bold text-gray-900 mb-2">
  //                   Industry Alignment
  //                 </h3>
  //                 <p className="text-gray-700">
  //                   Maintaining close relationships with industry partners ensures
  //                   our curriculum remains relevant and our graduates are prepared
  //                   for real-world challenges.
  //                 </p>
  //               </div>
  //             </div>

  //             <div className="flex items-start">
  //               <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full text-white mr-4 mt-1">
  //                 <Zap className="h-5 w-5" />
  //               </div>
  //               <div>
  //                 <h3 className="text-lg font-bold text-gray-900 mb-2">
  //                   Continuous Innovation
  //                 </h3>
  //                 <p className="text-gray-700">
  //                   Embracing new technologies and teaching methodologies has
  //                   allowed us to stay ahead of the curve and provide cutting-edge
  //                   education to our students.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Call to Action */}
  //       <section>
  //         <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-10 rounded-3xl text-center">
  //           <h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
  //           <p className="text-xl mb-8 max-w-2xl mx-auto">
  //             Join thousands of students who have transformed their careers with
  //             Infronex and become part of our continuing story.
  //           </p>
  //           <div className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
  //             <a href="/all-courses">Explore Our Courses</a>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
  return (
    <div className="container mx-auto px-4 mt-5">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center mt-5 justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-6">
          <Clock className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
          Our Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The story of Infronex's evolution from a small startup to a leading
          technology education provider
        </p>
      </section>

      {/* Journey Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Journey Through the Years
        </h2>
        <div className="space-y-12">
          {journeyMilestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Year and summary */}
              <div className="md:w-1/3">
                <div
                  className={`bg-gradient-to-r ${milestone.color} p-6 rounded-2xl text-white shadow-lg`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-white/20 rounded-full mr-3">
                      {milestone.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{milestone.year}</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-white/90 mb-4">{milestone.description}</p>
                  <div className="flex items-center text-sm bg-white/20 p-2 rounded-lg">
                    <Award className="h-4 w-4 mr-2" />
                    <span>{milestone.milestone}</span>
                  </div>
                </div>
              </div>

              {/* Timeline line + detailed description (if applicable) */}
              <div className="hidden md:block w-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`h-4 w-4 rounded-full bg-gradient-to-r ${milestone.color}`}
                  ></div>
                </div>
              </div>

              <div className="md:w-2/3">
                {index === 0 && (
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      The Beginning
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Infronex was born from a simple yet powerful vision: to
                      create a bridge between academic learning and real-world
                      industry requirements...
                    </p>
                    <p className="text-gray-700">
                      Our founders, a team of industry professionals and
                      educators, came together...
                    </p>
                  </div>
                )}
                {index === 2 && (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Pandemic Pivot
                    </h4>
                    <p className="text-gray-700">
                      When the COVID-19 pandemic hit, we faced our biggest
                      challenge yet...
                    </p>
                  </div>
                )}
                {index === 4 && (
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Industry Integration
                    </h4>
                    <p className="text-gray-700">
                      Our partnership program with leading tech companies marked
                      a significant milestone...
                    </p>
                  </div>
                )}
                {index === 6 && (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Looking to the Future
                    </h4>
                    <p className="text-gray-700">
                      As we continue to grow, our focus remains on innovation
                      and excellence in education...
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Challenges & Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white"
            >
              <div
                className={`h-2 bg-gradient-to-r ${
                  index === 0
                    ? "from-purple-600 to-pink-500"
                    : index === 1
                    ? "from-blue-600 to-cyan-400"
                    : "from-green-500 to-emerald-400"
                }`}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-700 mb-4">{challenge.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    Our Solution:
                  </div>
                  <p className="text-gray-600 text-sm">{challenge.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Learnings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Learnings from Our Journey
        </h2>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="h-5 w-5" />,
                title: "Adaptability is Essential",
                desc: "The ability to quickly adapt to changing circumstances...",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Student-Centric Approach",
                desc: "Keeping students at the center of every decision...",
              },
              {
                icon: <Globe className="h-5 w-5" />,
                title: "Industry Alignment",
                desc: "Maintaining close relationships with industry partners...",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Continuous Innovation",
                desc: "Embracing new technologies and teaching methodologies...",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div
                  className={`p-2 rounded-full text-white mr-4 mt-1 ${
                    i === 0
                      ? "bg-gradient-to-r from-purple-600 to-pink-500"
                      : i === 1
                      ? "bg-gradient-to-r from-blue-600 to-cyan-400"
                      : i === 2
                      ? "bg-gradient-to-r from-green-500 to-emerald-400"
                      : "bg-gradient-to-r from-orange-500 to-amber-400"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-10 rounded-3xl mb-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with
            Infronex and become part of our continuing story.
          </p>
          <a
            href="/all-courses"
            className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
          >
            Explore Our Courses
          </a>
        </div>
      </section>
    </div>
  );
}
