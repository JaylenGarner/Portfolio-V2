import projects from "../lib/projects";

const Projects = ({ setContent, setCurrentProject }) => {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="flex flex-col space-y-8">
        {projects.map((project) => {
          return (
            <div
              className="flex flex-col items-center hover:cursor-pointer hover:opacity-60 transition-opacity duration-700"
              onClick={() => {
                setCurrentProject(project);
                setContent("Project");
              }}
            >
              <h2 className="text-3xl font-bold">{project.name}</h2>
              <h3 className="text-xl opacity-70">
                {project.type} / {project.category}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
