import React from "react";
import ProjectCard from '../ProjectCard'


function Projects() {
  return (
    <div className="hero min-h-screen bg-base-200 flex">
      <div className="container m-auto flex flex-col items-center">
        <h1 className="fill-transparent text-2xl font-bold mb-6 bg-base-200">
          Some Things I've Built
        </h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
