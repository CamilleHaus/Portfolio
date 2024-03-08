import TechSection from "./TechSection";
import styles from "../Journey/journey.module.scss";

const Journey = () => {
  return (
    <>
      <div className={styles.div}>
        <h3>Minha trajetória profissional</h3>
        <p>
          Me formei durante a pandemia, em pleno 2020. Depois de 4 anos nos
          Estados Unidos, retornei ao Brasil de forma inesperada e comecei então
          a buscar emprego.
        </p>

        <p>
          Acabei caindo de paraquedas em recrutamento de profissionais de TI,
          onde comecei a ter contato com esse mundo da tecnologia de forma mais
          próxima. Após 3 anos nessa área, muitos aprendizados e contato
          constante com profissionais de TI, resolvi também embarcar nessa
          jornada.
        </p>

        <p>
          Por meio da Kenzie Academy, venho desenvolvendo minhas habilidades em
          diferentes tecnologias e deixo abaixo em meu portfólio um pouco mais
          sobre minha jornada até agora. Com as tecnologias em que venho
          dominando e alguns projetos que acredito serem relevantes.
        </p>
      </div>
      <div>
        <TechSection />
      </div>
    </>
  );
};

export default Journey;
