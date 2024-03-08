import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import styles from "../Footer/footer.module.scss";
import { useContext } from "react";
import { ComponentContext } from "../../providers/ComponentContext";

const Footer = () => {
  const { footerSection } = useContext(ComponentContext);

  return (
    <footer ref={footerSection} className={styles.footer}>
      <div>
        <h4>Camille Haus</h4>
        <p>Email: camille_haus@hotmail.com</p>
        <div>
          <a href="https://www.linkedin.com/in/camillehaus/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://w.app/mwJKa6" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/CamilleHaus" target="_blank">
            <FiGithub />
          </a>
        </div>
      </div>
      <p className={styles.p}>
        &copy; Todos os direitos reservados - Camille Haus
      </p>
    </footer>
  );
};

export default Footer;
