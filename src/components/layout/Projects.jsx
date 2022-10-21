import React from "react";
import ProjectCard from '../ProjectCard'


function Projects() {
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-wrap flex-col">
      <div className="container mx-auto">
        <h1 className="fill-transparent text-6xl font-bold mb-4 bg-base-200">
          Some Things I've Built
        </h1>
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
