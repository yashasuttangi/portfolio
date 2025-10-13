"use client";

import React from "react";
import { Timeline } from "./ui/Timeline";
import Image from "next/image";
import NEUImage from "../components/resources/NEUImage.jpg";
import CiscoImage1 from "../components/resources/Cisco1.jpg";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import PersonalImage from "../components/resources/PersonalImage.jpg";
import { ScrollIndicator } from "./ui/ScrollIndicator";
import { BackgroundRippleEffect } from "./ui/BackgroundRipple";

const About = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden">
             
      {/* ---------- About Me Section ---------- */}
      <section className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl w-full px-5 py-16 gap-10">
        {/* Left side: Text */}
        <div className="flex flex-col flex-1 space-y-6">
          <div style={{ height: 80 }}></div>
          <TextGenerateEffect
            words="Yashas Uttangi"
            className="text-4xl md:text-6xl font-bold text-black dark:text-white"
          />
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            I&apos;m a Software Engineer specializing in transforming complex
            challenges into <b>intelligent, full-stack solutions</b>. With a
            solid foundation in computer science and hands-on experience across{" "}
            <b>full-stack development, cloud computing, and AI/ML</b>, I
            architect scalable systems designed to deliver measurable,
            real-world impact. My core focus is on
            <b> automating workflows</b> to boost efficiency and develop
            intelligent applications that lead to tangible results.
            <br></br>
            <br></br>
            My approach is driven by a blend of technical rigor and creative
            problem-solving. I&apos;ve delivered high-impact contributions
            across web development, NLP, cloud architecture, and automation.
            Whether I&apos;m designing robust cloud infrastructure, optimizing
            complex systems, or building AI-powered tools. I am dedicated to
            crafting solutions that are efficient, innovative, and user-focused.
          </p>
        </div>

        {/* Right side: Photo placeholder */}
        <div
          className="flex-shrink-0"
          style={{ paddingTop: 80, paddingRight: 70 }}
        >
          <div className="w-68 h-78 bg-gray-300 dark:bg-gray-700 rounded-[25%] overflow-hidden relative">
            <Image
              src={PersonalImage}
              alt="Timeline Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ---------- Timeline Section with Background Gradient ---------- */}
      <div className="relative z-10 max-w-7xl w-full px-2 py-2 mb-10">
        {/* Background wrapper for timeline */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="w-full h-full relative">
            {/* <BackgroundRipple className="opacity-30" /> */}
            <BackgroundGradient
              animate={true}
              className="absolute inset-0 z-0 rounded-3xl opacity-40"
              containerClassName="absolute inset-0"
            />
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative z-10 p-8 bg-black rounded-3xl backdrop-blur-lg">
          <Timeline
            data={[
              {
                title: "Sep 2025",
                content: (
                  <div>
                    <p className="text-base">
                      Started pursuing{" "}
                      <span className="text-accent font-bold">
                        Master&apos;s in Computer Science at Northeastern
                        University, Boston
                      </span>
                      .<br />
                      <span className="block text-accent-foreground mt-1">
                        I aim to strengthen my foundational knowledge and
                        explore the cutting edge of{" "}
                        <b>AI and software development.</b>
                      </span>
                    </p>

                    {/* Subjects Section */}
                    <div className="mt-3">
                      <p className="text-accent font-semibold mb-1">
                        Subjects:
                      </p>
                      <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1">
                        <li>CS 5010 – Programming Design Paradigm</li>
                        <li>CS 5200 – Database Design Systems</li>
                      </ul>
                    </div>

                    {/* Graduation Line */}
                    <p className="text-accent-foreground text-sm mt-3 italic">
                      Expected to graduate in <b>Fall 2027</b>.
                    </p>

                    {/* Image Section */}
                    <div className="flex-shrink-0" style={{ paddingTop: 20 }}>
                      <div className="w-80 h-50 bg-gray-300 dark:bg-gray-700 rounded-[8%] overflow-hidden relative">
                        <Image
                          src={NEUImage}
                          alt="Timeline Image"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "Aug 2023",
                content: (
                  <div>
                    <p className="text-base">
                      Joined{" "}
                      <span className="text-accent font-semibold">
                        Cisco Systems Inc.
                      </span>{" "}
                      as a{" "}
                      <span className="text-accent font-semibold">
                        Software Engineer
                      </span>
                      .<br />
                      <span className="block text-accent-foreground mt-1">
                        Built end-to-end software solutions that drove
                        innovation, operational efficiency, and measurable
                        business impact.
                      </span>
                    </p>

                    {/* Key Contributions */}
                    <div className="mt-3">
                      <p className="text-accent font-semibold mb-1">
                        Key Highlights:
                      </p>
                      <ul className="list-disc list-inside text-neutral-300 text-sm space-y-2">
                        <li>
                          Honored <b>4×</b> with the{" "}
                          <b>Cisco IT Challenge Coin</b> for delivering
                          critical, high-impact solutions.
                        </li>
                        <li>
                          Co-led development of the{" "}
                          <b>Partner Compensation Platform</b>, shipping 100+
                          features with peer-reviewed, production-grade code.
                        </li>
                        <li>
                          Engineered a <b>rebate modeling engine</b> improving
                          system accuracy by 50% and optimizing budget
                          allocation.
                        </li>
                        <li>
                          Designed and implemented <b>CI/CD pipelines</b> that
                          accelerated deployments by 30% and enhanced release
                          reliability.
                        </li>
                        <li>
                          Developed a <b>Snowflake CI/CD pipeline</b>, evolving
                          a hackathon prototype into an organization-wide
                          solution.
                        </li>
                        <li>
                          Built an <b>AI-powered chatbot</b> using the MCP
                          paradigm to automate report generation, cutting manual
                          effort by 60%.
                        </li>
                      </ul>
                    </div>

                    {/* Summary Line */}
                    <p className="text-accent-foreground text-sm mt-3 italic">
                      Gained <b>2 years of solid work experience</b> in{" "}
                      <b>software development</b> and building{" "}
                      <b>AI-integrated solutions</b>.
                    </p>

                    {/* Image Section */}
                    <div className="flex-shrink-0" style={{ paddingTop: 20 }}>
                      <div className="w-80 h-50 bg-gray-300 dark:bg-gray-700 rounded-[8%] overflow-hidden relative">
                        <Image
                          src={CiscoImage1}
                          alt="Timeline Image"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "Jan 2023",
                content: (
                  <div>
                    <p className="text-base">
                      Began my internship at{" "}
                      <span className="text-accent font-semibold">
                        Cisco Systems Inc.
                      </span>
                      .<br />
                      <span className="block text-accent-foreground">
                        Built end-to-end solutions to deliver innovation,
                        efficiency, and measurable results.
                      </span>
                    </p>

                    <ul className="list-disc list-inside mt-2 ml-4 text-sm text-white space-y-2">
                      <li>
                        Recognized 4× with the Cisco IT Challenge Coin for
                        solving critical business problems and delivering
                        high-impact solutions.
                      </li>
                      <li>
                        Co-led development of the Partner Compensation Platform,
                        delivering 100+ features with peer-reviewed,
                        high-quality code.
                      </li>
                      <li>
                        Built a rebate modeling engine that improved system
                        accuracy by 50% and optimized budget allocations for
                        business teams.
                      </li>
                      <li>
                        Developed CI/CD pipelines, accelerating deployments by
                        30% and improving release efficiency.
                      </li>
                      <li>
                        Created a Snowflake CI/CD pipeline, transforming a
                        hackathon prototype into a production-ready solution
                        adopted organization-wide.
                      </li>
                      <li>
                        Built an AI chatbot using the MCP paradigm to automate
                        report generation, reducing manual effort by 60%.
                      </li>
                    </ul>

                    <Image
                      src={CiscoImage1}
                      alt="Cisco Timeline Image"
                      width={200}
                      height={100}
                      style={{ paddingTop: "15px" }}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default About;
