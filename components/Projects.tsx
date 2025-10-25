"use client";

import React, { useState } from "react";
import Image from "next/image";
import PlacementPortal1 from "../components/resources/Projects/PlacementPortal/PlacementPortal1.png";
import ProjectImage2 from "../components/resources/NEUImage.jpg";
// import ProjectImage3 from "../components/resources/NEUImage.jpg";
import AikyaMind1 from "../components/resources/Projects/AikyaMind/AikyaMind1.jpg";
import AikyaMind2 from "../components/resources/Projects/AikyaMind/AikyaMind2.jpg";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const projects: BentoGridItem[] = [
  {
    title: "Placement and Alumni Portal",
    description:
      "Platform to streamline recruitment processes and foster alumni interaction, with over 3,000+ users onboarded.",
    image: PlacementPortal1,
    link: "/projects/placement-portal",
    details: (
      <div className="flex flex-col space-y-4 h-full">
        <div className="space-y-4 flex-grow">
          <p>
            The Placement and Alumni Portal was developed to address a vital
            need in the recruitment process at our university. It serves as a
            centralized platform where companies can list openings, and students
            can apply directly through secure logins. The portal allows students
            to track their applications and monitor their recruitment journey
            efficiently.
          </p>
          <p>
            This initiative greatly enhanced the recruitment workflow for both
            students and the university, fostering seamless engagement between
            industry and academia. The portal also includes dedicated features
            to strengthen alumni interaction.
          </p>
          <p>
            The success of this project was recognized at the university level,
            and the team — Harsh R. Shah, Shomik Ghosk, Vishal Mishra, Yashas
            Uttangi, and Naman Oil — was felicitated for their contribution in
            developing the software.
          </p>
          <a
            href="https://starofmysore.com/young-alumni-meet-to-commemorate-sjces-diamond-jubilee-year-celebration/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline hover:text-purple-800 block"
          >
            Read about the felicitation here
          </a>
        </div>

        <div>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 mt-auto"
            onClick={() => window.open("https://sjceplacements.org/", "_blank")}
          >
            Visit the website
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Automated Identification of Medicine Prescription",
    description:
      "OCR + NLP pipeline to extract key information from medical prescriptions.",
    link: "/projects/prescription-ocr",
    details: (
      <div className="space-y-4">
        <p>
          This project was my final year{" "}
          <b>Bachelor of Engineering capstone project</b>, focused on developing
          an intelligent system to extract structured information from
          handwritten and printed medical prescriptions. I built an{" "}
          <b>optical character recognition</b> engine using <b>Pytesseract</b>{" "}
          to convert prescription images into machine-readable text and
          developed a robust <b>NLP pipeline</b> that included text
          preprocessing, tokenization, part-of-speech tagging, named entity
          recognition (NER), dependency parsing, contextual understanding, and
          post-processing to identify key entities such as medicine names,
          dosages, and patient details. To enhance contextual accuracy, I
          implemented <b>BERT</b>, achieving an accuracy of <b>84%</b> and an F1
          score of <b>0.887</b>. The project was developed using{" "}
          <b>Python, spaCy, BERT, Pytesseract, and Streamlit</b>.
        </p>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1iP1RNCS3lTvaDd8Dwb5fjcOTO25BHIol/view?usp=drive_link",
              "_blank"
            )
          }
        >
          View Project Details
        </button>
      </div>
    ),
  },
  {
    title: "AikyaMind Mental Health App",
    description:
      "A mobile app providing self-diagnosis, counselling, and mental health resources for individuals.",
    image: AikyaMind1,
    link: "/projects/aikyamind",
    details: (
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 h-full">
        {/* Left Side - Text Content */}
        <div className="flex flex-col space-y-4 flex-1">
          <p>
            <strong>AikyaMind</strong> is a mobile mental health application
            developed for <strong>JSS Medical College</strong> to empower users
            with self-diagnosis tools, counselling resources, and mental
            well-being support. The app uses an intelligent chatbot system to
            guide users through personalized mental health assessments, suggest
            coping strategies, and connect them with appropriate resources.
          </p>
          <p>
            Built with <b>Flutter</b> and <b>Firebase</b>, AikyaMind emphasizes
            privacy, accessibility, and user-friendly navigation. It addresses
            the growing need for accessible mental health care by providing
            instant assistance and reducing the stigma around seeking help.
          </p>

          <div>
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 mt-4"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.aikyamind.aikyamind&hl=en_US",
                  "_blank"
                )
              }
            >
              Checkout the app
            </button>
          </div>
        </div>
      </div>
    ),
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<BentoGridItem | null>(
    null
  );

  const handleProjectClick = (project: BentoGridItem) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full px-5 py-16">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[120%] h-[100%] bg-gradient-to-br from-purple-400/30 to-blue-400/20 rounded-[50%] blur-3xl z-0"></div>

      <h1 className="text-4xl font-bold mb-10 mt-20 z-10 relative">
        My Projects
      </h1>

      <hr className="w-full border-t border-gray-300 dark:border-gray-700 mb-5 z-10 relative" />

      <BentoGrid items={projects} onItemClick={handleProjectClick} />

      {selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/50 backdrop-blur-xl overflow-auto py-20 transition-all duration-300">
          <div
            className="relative rounded-2xl shadow-2xl border border-white/20 
                 bg-white/15 dark:bg-neutral-800/40 backdrop-blur-3xl 
                 max-w-4xl w-[90%] p-10 flex flex-col md:flex-row gap-8 
                 animate-[fadeIn_0.3s_ease-out] transform transition-all duration-300 hover:scale-[1.01]
                 before:absolute before:inset-0 before:rounded-2xl 
                 before:bg-gradient-to-br before:from-white/30 before:to-transparent 
                 before:blur-2xl before:opacity-60 before:pointer-events-none"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>

            {/* Left Section (Text) */}
            <div
              className={`flex-1 pr-4 relative ${
                selectedProject.image ? "md:w-1/2" : "w-full"
              }`}
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-md">
                  {selectedProject.title}
                </h2>

                <p className="text-base leading-relaxed text-gray-100/95 whitespace-pre-line drop-shadow-sm">
                  {selectedProject.details}
                </p>
              </div>
            </div>

            {/* Right Section (Image) */}
            {selectedProject.image && (
              <div className="w-full md:w-1/2 flex-shrink-0 relative h-96 rounded-xl overflow-hidden border border-white/10 shadow-inner">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className="transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
