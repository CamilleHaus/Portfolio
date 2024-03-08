import Journey from "./Journey"
import styles from "../AboutMe/about.module.scss"
import { useContext, useRef } from "react";
import { ComponentContext } from "../../providers/ComponentContext";

const AboutMe = () => {
    const { aboutMeSection } = useContext(ComponentContext)
    return (
        <>
        <div ref={aboutMeSection} className={styles.all}>
        <div className={styles.container}>
            <h2>SOBRE MIM</h2>
        </div>
        <Journey />
        </div>
        </>
    )
}

export default AboutMe