"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/BorderMagicButton";
import {
  FaDownload,
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCoffee,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiAmazonwebservices,
  SiGooglecloud,
  SiOracle,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiNodedotjs,
  SiMongodb,
  SiSnowflake,
  SiExpress,
  SiMaterialdesign,
  // SiJava,
  SiCplusplus,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiGithub,
  SiSqlite,
  SiNextdotjs
} from "react-icons/si";
import Lottie from "lottie-react";
import coderAnimation from "../public/animations/coder.json";
import { SpotlightNew } from "./ui/SpotlightNew";
import { FaDatabase } from "react-icons/fa6";

const Hero = () => {
  const highlightItems = [
    { title: "2+ Years", desc: "Professional Full-Stack Development" },
    { title: "4× Awards", desc: "Cisco IT Challenge Coin" },
    { title: "1000+ Users", desc: "Placement & Alumni Portal" },
    {
      title: "AI/ML & Automation",
      desc: "Chatbots, NLP Pipelines, Workflow Automation",
    },
  ];

  const cardClasses =
    "p-4 min-w-[150px] rounded-2xl bg-gradient-to-br from-white/5 to-purple-500/5 backdrop-blur-md shadow-lg border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-blue-500/20 hover:border-purple-400/40";

  return (
    <div className="pb-20 pt-36 relative overflow-hidden w-full">
      <SpotlightNew />
      {/* Background Grid */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.05) 1px,transparent 1px),linear-gradient(to_bottom,rgba(228,228,231,0.05) 1px,transparent 1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.15) 1px,transparent 1px),linear-gradient(to_bottom,rgba(38,38,38,0.15) 1px,transparent 1px)]"
          )}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>

      {/* Integrated Content */}
      <div className="relative flex flex-col items-center lg:items-start justify-center my-20 z-10 w-full">
        {/* Blob background shape */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[120%] h-[100%] bg-gradient-to-br from-purple-400/30 to-blue-400/20 rounded-[50%] blur-3xl z-0"></div>

        {/* Main Section */}
        <div className="relative flex flex-col lg:flex-row items-center gap-8 z-10 w-full">
          {/* Text Section */}
          <div className="lg:w-2/3 flex flex-col space-y-6 px-12 lg:px-16">
            <TextGenerateEffect
              className="text-left text-[36px] md:text-5xl lg:text-6xl font-bold z-20"
              words="Hi, I'm Yashas, a Software Engineer based in Boston."
            />
            <p className="text-lg opacity-80 z-20">
              I build AI-powered solutions, full-stack applications, and
              automation systems that make a real impact. Let&apos;s innovate
              together.
            </p>
          </div>

          {/* Animation Section */}
          <div className="lg:w-1/3 flex justify-center relative">
            <div className="w-[260px] h-[260px] lg:w-[360px] lg:h-[360px] animate-float">
              <Lottie animationData={coderAnimation} loop autoplay />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10 space-x-4 w-full">
          <a href="/projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="/resume.pdf" download={"Yashas_Uttangi_Resume.pdf"} target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Resume"
              icon={<FaDownload />}
              position="right"
            />
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-center w-full">
          {highlightItems.map((item) => (
            <div key={item.title} className={cardClasses}>
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-sm opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16 w-full flex flex-col items-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-3xl blur-3xl -z-10"></div>

          <div className="max-w-6xl p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 relative text-white">
              My Tech Matrix
              <span className="block w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded mt-2"></span>
            </h2>

            <div className="flex flex-wrap justify-center w-full divide-x divide-white/10">
              {/* Programming Languages */}
              <div className="flex flex-col items-center px-6 py-2 w-full lg:w-1/5">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Languages
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { icon: SiPython, name: "Python", color: "text-blue-400" },
                    {
                      icon: SiJavascript,
                      name: "JavaScript",
                      color: "text-yellow-400",
                    },
                    {
                      icon: SiTypescript,
                      name: "TypeScript",
                      color: "text-blue-600",
                    },
                    {
                      icon: FaCoffee,
                      name: "Java",
                      color: "text-orange-600",
                    },
                    {
                      icon: SiCplusplus,
                      name: "C++",
                      color: "text-indigo-400",
                    },
                    {
                      icon: SiSqlite,
                      name: "SQL",
                      color: "text-gray-400"
                    }
                  ].map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center group"
                      >
                        <Icon
                          className={`w-12 h-12 ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                        />
                        <span className="text-sm mt-1 opacity-80 text-white">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Frameworks */}
              <div className="flex flex-col items-center px-6 py-2 w-full lg:w-1/5">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Frameworks
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { icon: SiReact, name: "React.js", color: "text-cyan-400" },
                    { icon: SiNextdotjs, name: "Next.js", color: "text-black-500"},
                    {
                      icon: SiNodedotjs,
                      name: "Node.js",
                      color: "text-green-500",
                    },
                    {
                      icon: SiExpress,
                      name: "Express.js",
                      color: "text-gray-400",
                    },
                    {
                      icon: SiMaterialdesign,
                      name: "Material UI",
                      color: "text-pink-400",
                    },
                    {
                      icon: SiTailwindcss,
                      name: "TailwindCSS",
                      color: "text-teal-400",
                    },
                  ].map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center group"
                      >
                        <Icon
                          className={`w-12 h-12 ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                        />
                        <span className="text-sm mt-1 opacity-80 text-white">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Databases */}
              <div className="flex flex-col items-center px-6 py-2 w-full lg:w-1/5">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Databases
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { icon: SiOracle, name: "Oracle", color: "text-red-600" },
                    { icon: SiMysql, name: "MySQL", color: "text-orange-500" },
                    {
                      icon: SiMongodb,
                      name: "MongoDB",
                      color: "text-green-500",
                    },
                    {
                      icon: SiSnowflake,
                      name: "Snowflake",
                      color: "text-blue-400",
                    },
                    {
                      icon: FaDatabase,
                      name: "Varicent",
                      color: "text-blue-700",
                    },
                  ].map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center group"
                      >
                        <Icon
                          className={`w-12 h-12 ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                        />
                        <span className="text-sm mt-1 opacity-80 text-white">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="flex flex-col items-center px-6 py-2 w-full lg:w-1/5">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    {
                      icon: SiAmazonwebservices,
                      name: "AWS",
                      color: "text-orange-400",
                    },
                    {
                      icon: SiGooglecloud,
                      name: "GCP",
                      color: "text-blue-500",
                    },
                    { icon: SiOracle, name: "OCI", color: "text-red-600" },
                    { icon: SiDocker, name: "Docker", color: "text-blue-300" },
                    {
                      icon: SiKubernetes,
                      name: "Kubernetes",
                      color: "text-blue-500",
                    },
                    {
                      icon: SiGithub,
                      name: "GitHub",
                      color: "text-purple-500",
                    },
                  ].map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center group"
                      >
                        <Icon
                          className={`w-12 h-12 ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                        />
                        <span className="text-sm mt-1 opacity-80 text-white">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ML & AI */}
              <div className="flex flex-col items-center px-6 py-2 w-full lg:w-1/5">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  ML & AI
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    {
                      icon: SiTensorflow,
                      name: "TensorFlow",
                      color: "text-orange-400",
                    },
                    {
                      icon: SiScikitlearn,
                      name: "scikit-learn",
                      color: "text-yellow-400",
                    },
                    { icon: SiOpencv, name: "OpenCV", color: "text-green-400" },
                    { icon: SiPandas, name: "Pandas", color: "text-blue-300" },
                    { icon: SiNumpy, name: "NumPy", color: "text-indigo-400" },
                    { icon: SiPython, name: "NLTK", color: "text-gray-300"}
                  ].map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center group"
                      >
                        <Icon
                          className={`w-12 h-12 ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                        />
                        <span className="text-sm mt-1 opacity-80 text-white">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center mt-10 space-y-3 w-full">
          <p className="text-sm uppercase tracking-wide opacity-70">
            Reach me at
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yashasuttangi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/yashas-uttangi-332898191/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 hover:text-purple-400 transition-colors" />
            </a>
            <a href="mailto:yashuttangi@gmail.com">
              <FaEnvelope className="w-6 h-6 hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
