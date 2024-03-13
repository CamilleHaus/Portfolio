import { createContext } from "react";
import { useRef } from "react";

export const ComponentContext = createContext({});

export const ComponentProvider = ({ children }) => {

  const aboutMeSection = useRef(null);
  const footerSection = useRef(null);
  const projectsSection = useRef(null);

  const scrollAboutMeSection = () => {
    if (aboutMeSection.current) {
      window.scrollTo({
        top: aboutMeSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollFooterSection = () => {
    if (footerSection.current) {
      window.scrollTo({
        top: footerSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollProjectsSection = () => {
    if (projectsSection.current) {
      window.scrollTo({
        top: projectsSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ComponentContext.Provider value={{aboutMeSection, scrollAboutMeSection, footerSection, scrollFooterSection, projectsSection, scrollProjectsSection}}>{children}</ComponentContext.Provider>
  );
};
