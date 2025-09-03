import {
  Award,
  Users,
  BookOpen,
  Briefcase,
  Clock,
  TrendingUp,
  Shield,
  Headphones,
} from "lucide-react";
// import { Card, div } from "@/components/ui/card";

export function WhyChooseInfronex() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Industry Trainers",
      description:
        "Learn from professionals with 10+ years of real-world experience in top companies like Google, Microsoft, and Amazon",
      highlight: "100% Industry Experts",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: "100% Job-Oriented Training",
      description:
        "Curriculum designed with industry partners to meet current market demands and ensure job readiness",
      highlight: "85% Placement Rate",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Industry-Recognized Certificates",
      description:
        "Get certificates that are valued by top employers and add credibility to your professional profile",
      highlight: "Globally Recognized",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      title: "Real-Time Live Projects",
      description:
        "Work on actual industry projects and build a portfolio that showcases your practical skills to employers",
      highlight: "5+ Live Projects",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Flexible Learning Options",
      description:
        "Choose from weekday, weekend, fast-track, or part-time batches that fit your schedule perfectly",
      highlight: "Multiple Timings",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: "Career Growth Support",
      description:
        "Lifetime career guidance, interview preparation, resume building, and continuous skill development support",
      highlight: "Lifetime Support",
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "Small Batch Sizes",
      description:
        "Maximum 15 students per batch ensuring personalized attention and better learning outcomes",
      highlight: "1:15 Ratio",
    },
    {
      icon: <Headphones className="h-8 w-8 text-pink-600" />,
      title: "24/7 Student Support",
      description:
        "Round-the-clock doubt clearing, technical support, and mentorship through our dedicated support team",
      highlight: "Always Available",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            Why Choose <span className="text-blue-600">Infronex</span>?
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Join over 5000+ successful students who have transformed their
            careers with our industry-leading training programs
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gray-100 shadow-sm group-hover:bg-white">
                  {feature.icon}
                </div>
              </div>
              <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full mb-3 group-hover:bg-blue-100 group-hover:text-blue-700">
                {feature.highlight}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-800">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            // Alternate AOS animations
            const flipTypes = [
              "flip-left",
              "flip-right",
              "flip-up",
              "flip-down",
            ];
            const aosType = flipTypes[index % flipTypes.length]; // Rotate through flip types
            const delay = index * 150;

            return (
              <div
                key={index}
                className="group cursor-pointer bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl p-6 text-center"
                data-aos={aosType}
                data-aos-duration="1000"
                data-aos-delay={delay}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gray-100 shadow-sm group-hover:bg-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full mb-3 group-hover:bg-blue-100 group-hover:text-blue-700">
                  {feature.highlight}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-800">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Success Stats */}
        {/* <div
          className="bg-white rounded-2xl p-8 shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600 text-sm">Placement Success</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Hiring Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                4.8/5
              </div>
              <div className="text-gray-600 text-sm">Student Rating</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
