import styles from "../TechList/techList.module.scss"

const TechList = ({ name, img }) => {
    return (
      <li className={styles.li}>
        <p>{name}</p>
        <img src={img} />
      </li>
    );
  };
  
  export default TechList