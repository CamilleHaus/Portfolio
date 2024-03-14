import { projects } from "../../data/projects.js";
import ProjectCard from "./ProjectCard/index.jsx";
import styles from "../Projects/projects.module.scss";
import { useContext } from "react";
import { ComponentContext } from "../../providers/ComponentContext/index.jsx";

const Projects = () => {
  const { projectsSection } = useContext(ComponentContext);

  return (
    <section ref={projectsSection} className={styles.section}>
      <h2 className={styles.h2}>Projetos</h2>
      <ul className={styles.ul}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
