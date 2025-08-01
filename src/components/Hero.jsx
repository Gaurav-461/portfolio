import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { lazy, Suspense, useRef } from "react";
import Loading from "./Loading.jsx";
import { Velustro } from "uvcanvas";

const SplineBox = lazy(() => import("./3dModels/SplineBox.jsx"))

const Hero = () => {
  const heroSectionRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      delay: 2,
    });

    tl.from(".title, .name", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut"
    }, "a")
      .from("#spline-3d-cube", {
        // y: 50,
        opacity: 0,
      },"a")
      .from("#profession-name", {
        y: 50,
        opacity: 0,
      });
  }, [{ scope: heroSectionRef }]);

  return (
    <section ref={heroSectionRef} id="hero">
      <div className="title">
        <h1 className="name">Gaurav</h1>
        <p className="name">Designing through a different lens.</p>
      </div>

      <div className="content">
        <div id="profession-name">
          <h2>
            {/* <span>I am a </span>  */}
            <span>Web Developer</span>
            {/* <br />
            <span >& Designer</span> */}
          </h2>
        </div>

        <div className="live-background-gradient">
          <Velustro />
        </div>

        <div id="spline-3d-cube">
          <Suspense fallback={<Loading />}>
            <SplineBox />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
