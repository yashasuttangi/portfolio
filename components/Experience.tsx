"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";
import { motion } from "framer-motion";

const appreciations = [

  {
    quote:
      "Thank you Yashas for your exceptional efforts in stretching to support all React resources for quality delivery with a UX mindset for the soft launch 3. Your pivotal role in React related delivery and UX reflects your outstanding dedication, precision, and teamwork. Your hardwork has been instrumental to the project's success, and I wholeheartedly congratulate you on this well-deserved recognition.",
    name: "Anand Modanwal",
    title: "Business Analysis Manager",
  },
   {
    quote:
      "Experts say that the first year of a new job is the toughest time, where you adjust to a new environment, learn new responsibilities, and build new relationships. It often involves a steep learning curve and can be very demanding. Congratulations on accomplishing the toughest milestone of completing your first-work anniversary. You have mastered UiPath, contributed to one of the high-priority initiatives in Test Automation, and continute to learn new things every day. Awesome job, keep up the great work !",
    name: "Raghu Ramamoorthy",
    title: "Head of Information Technology, Partner Compensation",
  },
  {
    quote:
      "Thank you for your hardwork and dedication in helping us achieve all our release for the application. Your exceptional technical expertise and problem-solving attitude are truly appreciated.",
    name: "Deepti Santosh Thite",
    title: "Business Analyst Manager / QA Lead",
  },
  {
    quote:
      "Thank you for the outstanding work you are doing in the development of the application's UI. Your contributions have been instrumental in delivering key feaures and ensuring a smooth and intuitive user experience. Your attention to detail, commitment to quality, and dedication to enhancing the platform are truly appreciated. Keep up the great work!",
    name: "Akash Rotti",
    title: "React Lead",
  },
  {
    quote:
      "Along with delivering your sprint tasks and coming up with innovative solutions, you have put in extra efforts to avoid any scope spillovers from React for our application launch. Apart from this, you accepted the challenge of changing the look and feel of the UI in such a short time by going above and beyond your assigned work. Truly demonstrates your commitment and accountability along with passion you have for what you do! Everyone from our leadership to stakeholders loved the new face of the application and definitely helped in creating the 'Aha' moment we were looking for, keep up the great work!",
    name: "Sanjana Pentomsheety",
    title: "Design Architect",
  },
 
];

const roles = [
  {
    role: "Software Engineer | Cisco Systems",
    duration: "Aug 2023 – Aug 2025",
    highlights: [
      "4× Cisco IT Challenge Coin recipient, awarded by Cisco IT VP for solving critical business problems.",
      "Co-led React development for Partner Compensation Platform with 100+ feature deliveries & peer reviews.",
      "Built a rebate modeling engine improving system accuracy by 50% and maximizing contra allocation budgets.",
      "Developed React CI/CD pipelines accelerating release cycles by 30%.",
      "Resolved 200+ UAT/BAT issues as primary POC, ensuring smooth releases.",
      "Converted hackathon prototype into a Snowflake CI/CD pipeline reducing deployment time by 40%.",
      "Built an agentic AI chatbot using n8n + MCP, automating reports & cutting manual effort by 60%.",
    ],
    fullWidth: true,
  },
  {
    role: "Technical Undergraduate Intern | Cisco Systems",
    duration: "Feb 2023 – Jul 2023",
    highlights: [
      "Developed an RPA framework in UiPath to automate 1200+ regression test cases, cutting manual effort by 75%.",
      "Boosted testing throughput 2× and halved execution time, accelerating releases.",
      "Optimized PL/SQL views & procedures via query tuning, reducing execution time by 40%.",
    ],
  },
  {
    role: "AWS Cloud Intern | F13 Technologies",
    duration: "Oct 2021 – Mar 2022",
    highlights: [
      "Earned 6 AWS certifications across architecture, security, and cloud deployment.",
      "Designed cloud infra with EC2, S3, RDS, and Lambda for performance & scalability.",
      "Implemented IAM & VPC for secure and scalable environments, following AWS best practices.",
    ],
  },
  {
    role: "Project Intern | Tata Consultancy Services",
    duration: "Jun 2022 – Aug 2022",
    highlights: [
      "Built a scale model autonomous vehicle with computer vision & sensor integration.",
      "Implemented real-time object detection & path planning for autonomous navigation.",
    ],
  },
];

const Experience = () => {
  return (
      <div className="relative flex flex-col items-center lg:items-start justify-center my-20 z-10 w-full">
      {/* Premium Hero-like Background */}

      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[120%] h-[100%] bg-gradient-to-br from-purple-400/30 to-blue-400/20 rounded-[50%] blur-3xl z-0"></div>


      {/* Page Title */}
      <div className="w-full max-w-7xl mx-auto text-left mb-16 px-6 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Professional Experience
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl">
          A showcase of appreciations, recognitions, and highlights from my
          professional journey.
        </p>
      </div>

      {/* Roles Section */}
      <div className="w-full max-w-7xl mx-auto space-y-10 px-6">
        {roles
          .filter((r) => r.fullWidth)
          .map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-100"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{r.role}</h3>
              <p className="text-gray-400 text-sm mb-4">{r.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {r.highlights.map((point, i) => (
                  <li key={i} className="text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles
            .filter((r) => !r.fullWidth)
            .map((r, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-80"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {r.role}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{r.duration}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {r.highlights.map((point, i) => (
                    <li key={i} className="text-xs">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto text-left px-6 mt-15">
        <h3 className="text-3xl md:text-2xl font-bold text-white text-center">
          Testimonials
        </h3>
        {/* <p className="text-lg text-gray-400 mt-4 max-w-3xl">
          A showcase of appreciations, recognitions, and highlights from my
          professional journey.
        </p> */}
      </div>
      {/* Infinite Moving Cards */}
      <div className="relative w-full max-w-[95%] mx-auto mt-5">
        <InfiniteMovingCards
          items={appreciations}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Experience;
