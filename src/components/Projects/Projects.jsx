import React, { useState, useEffect } from "react";

const Projects = () => {
  // State to store all projects
  const [projects, setProjects] = useState([]);
  // State to store the selected project for viewing more details
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data)); // Storing fetched projects in the 'projects' state
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
        My <span className="text-primary">Projects</span>
      </h1>

      {/* Projects Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="card bg-gradient-to-r from-teal-400 to-blue-600 text-white shadow-2xl rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-lg text-gray-200">
                {project.description}
              </p>
              <button
                className="mt-4 px-6 py-2 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg shadow-lg hover:bg-green-500 transition-all duration-300"
                onClick={() => handleViewMore(project)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-4xl w-full md:w-3/4 lg:w-1/2 overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedProject.name}
            </h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <p className="text-lg mb-4 text-gray-700">
              {selectedProject.description}
            </p>
            <p className="text-lg mb-4 text-gray-600">
              <strong>Tech Stack:</strong> {selectedProject.techStack}
            </p>
            <p className="text-lg mb-4 text-gray-600">
              <strong>Challenges Faced:</strong> {selectedProject.challenges}
            </p>
            <p className="text-lg mb-4 text-gray-600">
              <strong>Future Improvements:</strong>{" "}
              {selectedProject.improvements}
            </p>
            <p className="text-lg mb-4 text-gray-600">
              <strong>Live Link:</strong>{" "}
              <a
                href={selectedProject.liveLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.liveLink}
              </a>
            </p>
            <p className="text-lg mb-4 text-gray-600">
              <strong>GitHub Client Link:</strong>{" "}
              <a
                href={selectedProject.githubClientLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.githubClientLink}
              </a>
            </p>

            {/* Conditionally render the GitHub Server Link */}
            {selectedProject.githubServerLink && (
              <p className="text-lg mb-4 text-gray-600">
                <strong>GitHub Server Link:</strong>{" "}
                <a
                  href={selectedProject.githubServerLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedProject.githubServerLink}
                </a>
              </p>
            )}

            {/* Close Button */}
            <button
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
              onClick={() => setSelectedProject(null)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
