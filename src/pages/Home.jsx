import { Hero, Projects, ElasticSvgLine, About, Contact } from "../components/index";

const Home = () => {
  return (
    <>
      <main className="mx-auto lg:w-5xl">
        <Hero />
        <Projects />
        <About />
        <ElasticSvgLine />
        <Contact />
      </main>
    </>
  );
};

export default Home;
