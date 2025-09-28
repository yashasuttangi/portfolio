"use client";

import React, { useState } from "react";
import Image from "next/image";
import PlacementPortal1 from "../components/resources/Projects/PlacementPortal/PlacementPortal1.png";
import ProjectImage2 from "../components/resources/NEUImage.jpg";
import ProjectImage3 from "../components/resources/NEUImage.jpg";
import { BentoGrid } from "./ui/BentoGrid";

const projects = [
  {
    title: "Placement Portal",
    description:
      "Platform to streamline recruitment processes with over 3,000+ users onboarded.",
    image: PlacementPortal1,
    link: "/projects/placement-portal",
    details: (
      <div className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae eros eget nunc fermentum dapibus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          Integer vel lacus eget sapien viverra posuere. Suspendisse potenti.
          Fusce in ex non justo dictum imperdiet. Proin nec sapien id nunc
          malesuada luctus.
        </p>
        {/* <img
          src="/path/to/placement-image.jpg"
          alt="Placement Portal visual"
          className="rounded-lg shadow-lg"
        />
        */}
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800"
          onClick={() => window.open("https://sjceplacements.org/", "_blank")}
        >
          Visit the website
        </button>
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
        {/* <a
          href="https://drive.google.com/file/d/1iP1RNCS3lTvaDd8Dwb5fjcOTO25BHIol/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Read more about the project
        </a> */}
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
      "A mobile app providing self-diagnosis, counselling, and resources for mental health.",
    image: ProjectImage3,
    link: "/projects/aikyamind",
    details: (
      <div className="space-y-4">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip.
        </p>
        {/* <a
          href="https://play.google.com/store/apps/details?id=com.aikyamind.aikyamind&hl=en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          AikyaMind App
        </a> */}
        {/* <img
          src="/path/to/aikyamind-image.jpg"
          alt="AikyaMind visual"
          className="rounded-lg shadow-lg"
        />
        */}
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800"
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
    ),
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative flex flex-col items-start justify-start min-h-screen w-full px-5 py-16">
      <div style={{ paddingTop: 70 }}></div>
      <h1 className="text-4xl font-bold mb-10">My Projects</h1>

      {/* Divider */}
      <hr className="w-full border-t border-gray-300 dark:border-gray-700 mb-5" />

      {/* Pass click handler to grid */}
      <BentoGrid items={projects} onItemClick={handleProjectClick} />

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-auto py-15">
          <div className="relative bg-white dark:bg-neutral-900 rounded-lg shadow-lg max-w-4xl w-full p-12 flex flex-col md:flex-row gap-5">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl"
            >
              ✕
            </button>

            {/* Left Content */}
            <div className="flex-1 pr-4">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">
                {selectedProject.details}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex-shrink-0 relative h-96 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
