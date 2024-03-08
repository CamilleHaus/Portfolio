import styles from "../ProjectCard/card.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.div}>
      <li className={styles.list}>
        <div className={styles.firstListDiv}>
          <div>
            <div className={styles.projectInfo}>
              <h4>{project.title}</h4>
              <h6>{project.responsive ? "Responsivo" : "Não responsivo"}</h6>
            </div>
            <img src={project.image} />
          </div>
          <div className={styles.description}>
            <p className={styles.p}>{project.description}</p>
            <a href={project.github}>Veja meu codigo aqui!</a>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ProjectCard;
