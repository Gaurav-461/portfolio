import { Hero, Projects, ElasticSvgLine, About, Contact } from "../components/index";

const Home = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto">
        <Hero />
        <Projects />
        <About />
        <ElasticSvgLine />
        <Contact />
      </section>
    </>
  );
};

export default Home;
