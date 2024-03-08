import { useContext, useRef } from "react";
import "../Header/header.module.scss";
import AboutMe from "../AboutMe";
import { ComponentContext } from "../../providers/ComponentContext";

const Header = () => {
  const { scrollAboutMeSection, scrollFooterSection } =
    useContext(ComponentContext);

  return (
    <header>
      <nav>
        <ul>
          <button onClick={() => scrollAboutMeSection()}>
            <li className="list">Sobre mim</li>
          </button>
          <button>
            <li className="list">Projetos</li>
          </button>
          <button onClick={() => scrollFooterSection()}>Contato</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
