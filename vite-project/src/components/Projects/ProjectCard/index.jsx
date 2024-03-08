import styles from "../ProjectCard/card.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.div}>
      <li className={styles.list}>
        <div>
          <div className={styles.projectInfo}>
            <h4>{project.title}</h4>
            <h6>{project.responsive ? "Responsivo" : "Não responsivo"}</h6>
          </div>
          <img src={project.image} width="200px" />
        </div>
        <p className={styles.p}>{project.description}</p>
        <button href={project.github}>Veja meu codigo aqui!</button>
      </li>
    </div>
  );
};

export default ProjectCard;
