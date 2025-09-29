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
            The Placement and Alumni Portal was developed to address a vital need in the recruitment process at our university.  
            It serves as a centralized platform where companies can list openings, and students can apply directly through secure logins.  
            The portal allows students to track their applications and monitor their recruitment journey efficiently.
          </p>
          <p>
            This initiative greatly enhanced the recruitment workflow for both students and the university, fostering seamless engagement 
            between industry and academia. The portal also includes dedicated features to strengthen alumni interaction.
          </p>
          <p>
            The success of this project was recognized at the university level, and the team — Harsh R. Shah, Shomik Ghosk, Vishal Mishra, 
            Yashas Uttangi, and Naman Oil — was felicitated for their contribution in developing the software.
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
    image: ProjectImage2,
    link: "/projects/prescription-ocr",
    details: (
      <div className="space-y-4">
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    image: AikyaMind2,
    link: "/projects/aikyamind",
    details: (
      <div className="flex flex-col space-y-4 h-full">
        <div className="space-y-4 flex-grow">
          <p>
            <strong>AikyaMind</strong> is a mobile mental health application developed for <strong>JSS Medical College</strong> 
            to empower users with self-diagnosis tools, counselling resources, and mental well-being support.  
            The app uses an intelligent chatbot system to guide users through personalized mental health assessments, suggest coping strategies, 
            and connect them with appropriate resources.
          </p>
          <p>
            Built with Flutter and Firebase, AikyaMind emphasizes privacy, accessibility, and user-friendly navigation.  
            It addresses the growing need for accessible mental health care by providing instant assistance and reducing the stigma around seeking help.
          </p>
          <Image
            src={AikyaMind1}
            alt="AikyaMind App Screenshot"
            className="rounded-lg"
            style={{ objectFit: "contain" }}
            width={600}
            height={400}
          />
        </div>

        <div>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 mt-auto"
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

      <h1 className="text-4xl font-bold mb-10 mt-20 z-10 relative">My Projects</h1>

      <hr className="w-full border-t border-gray-300 dark:border-gray-700 mb-5 z-10 relative" />

      <BentoGrid items={projects} onItemClick={handleProjectClick} />

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-auto py-15">
          <div className="relative bg-white dark:bg-neutral-900 rounded-lg shadow-lg max-w-4xl w-full p-12 flex flex-col md:flex-row gap-5">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl"
            >
              ✕
            </button>

            <div className="flex-1 pr-4">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">
                {selectedProject.details}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex-shrink-0 relative h-96 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.image!}
                alt={selectedProject.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
