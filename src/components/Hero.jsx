import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense, useRef } from "react";
import Loading from "./Loading.jsx";
import Spline from "@splinetool/react-spline";
import { Velustro } from "uvcanvas";

const Hero = () => {
  const heroSectionRef = useRef(null);
  useGSAP(() => {
    let tl = gsap.timeline({
      delay: 1.2,
    });

    tl.from(".title, .name", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
    }, "a")
      .from("#spline-3d-cube", {
        y: 50,
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
            {/* <span>I am a Web</span>  */}
            <span>Web Developer</span>
            {/* <br />
            <span >& Designer</span> */}
          </h2>
        </div>
        {/* TODO: combine title and profession-name */}

        <div className="background">
          {/* <Opulento /> */}
          <Velustro />
        </div>

        <div id="spline-3d-cube">
          <Suspense fallback={<Loading />}>
            <Spline scene="https://prod.spline.design/ahHbM7Vca6gxi9Ue/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
