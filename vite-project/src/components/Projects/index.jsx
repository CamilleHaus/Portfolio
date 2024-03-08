import { projects } from "../../data/projects.js";
import ProjectCard from "./ProjectCard/index.jsx";
import styles from  "../Projects/projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Projetos</h2>
      <ul className={styles.ul}>
        {projects.map((project) => 
          <ProjectCard key={project.id} project={project} />
        )}
      </ul>
    </section>
  );
};

export default Projects;
