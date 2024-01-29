import React from "react";
import PropTypes from "prop-types";

function Project({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <a href={project.deployedLink}>Deployed Project</a>
      <a href={project.githubLink}>GitHub Repo</a>
      <img src={project.image} alt={`Screenshot of ${project.title}`} />
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Project;
