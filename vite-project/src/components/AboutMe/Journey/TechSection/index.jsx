import TechList from "./TechList"
import technologies from "../../../../data/technologies.js"
import styles from "../TechSection/techSection.module.scss"

const TechSection = () => {
    return (
        <div className={styles.div}>
        <h3>Tecnologias</h3>
        <div>
          {technologies.map((tech, index) => (
            <TechList key={index} name={tech.name} img={tech.img} />
          ))}
        </div>
        </div>
    )
}

export default TechSection