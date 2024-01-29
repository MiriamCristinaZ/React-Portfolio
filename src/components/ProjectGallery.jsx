import React, { useState, useEffect } from "react";
import Project from "./Project";
import projectsData from "../data/projects.json";

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;
