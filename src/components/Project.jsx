import React from "react";
import PropTypes from "prop-types";

function Project({ project }) {
  const imageStyles = {
    maxWidth: "100%",
    maxHeight: "300px", // Adjust the maximum height as needed
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      {" "}
      {/* Use col-lg-4 for large screens and col-md-6 for medium screens */}
      <div className="card">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          style={imageStyles}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <a href={project.deployedLink} className="btn btn-primary mr-2">
            Deployed Project
          </a>
          <br></br>
          <a href={project.githubLink} className="btn btn-secondary">
            GitHub Repo
          </a>
        </div>
      </div>
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
