import './Project.css';
import Project from './Project';
import projectData from './projectData';

function ProjectCards() {
  return (
    <article className="projects">
      {projectData.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </article> 
  );
}

export default ProjectCards;
