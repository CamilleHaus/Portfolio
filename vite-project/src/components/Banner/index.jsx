import "../Banner/banner.module.scss";

const Banner = () => {
  return (
    <section>
      <div>
        <h1>BEM-VINDO AO MEU PORTFÓLIO</h1>
        <p>
          Uma desenvolvedora em formação buscando sua primeira oportunidade no
          mercado de trabalho
        </p>
        <button>
          Baixe meu <span>curriculo</span> aqui!
        </button>
      </div>
    </section>
  );
};

export default Banner;
