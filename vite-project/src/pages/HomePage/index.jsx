import AboutMe from "../../components/AboutMe";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import "../../styles/index.scss";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
