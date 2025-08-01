import { useGSAP } from "@gsap/react";
import { projectLists } from "../constants/index";
import gsap from "gsap";

const Projects = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
      },
    });

    tl.from("#projects h1", {
      filter: "blur(5px)",
      duration: 0.5,
      opacity: 0,
      ease: "power3.inOut",
    }).from(".project-item", {
      filter: "blur(15px)",
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power1.in",
    });
  });

  return (
    <div id="projects">
      <h1 className="projects-title">PROJECTS</h1>

      <div className="project-card relative custom-cursor">
        {projectLists.map((item) => (
          <div
            key={item.id}
            className="project-item group mx-auto mt-0 border-b-2 border-white py-5 md:py-10"
          >
            <a target="_blank" href={item.projectLink} className="custom-cursor">
              <div className="text-white transition-all duration-300 group-hover:translate-x-4">
                <p className="mb-2 pl-1 text-xs">{item.label.toUpperCase()}</p>
                <h1 className="text-3xl md:text-6xl">{item.name}</h1>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
