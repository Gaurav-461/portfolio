import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const vdRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    const start = isMobile ? "center 70%" : "top 80%";

    const splitText = SplitText.create(".about", {
      type: "lines",
    });

    gsap.from(".profile-img", {
      scrollTrigger: {
        trigger: ".profile-img",
        start: "top 80%",
      },
      filter: "blur(30px)",
      opacity: 0,
      duration: 1,
      ease: "power1.inOut"
    });

    gsap.from(splitText.lines, {
      scrollTrigger: {
        trigger: ".about-section",
        start: start,
      },
      filter: "blur(30px)",
      yPercent: 100,
      opacity: 0,
      y: -100,
      rotation: "random(-80, 80)",
      duration: 1.7,
      ease: "back.inOut",
      stagger: 0.2,
    });
  });

  const handleOnMouseMove = contextSafe(() => {
    if(!vdRef.current) return

    gsap.to(vdRef.current, {
      xPercent: -50,
      yPercent: -10,
      rotate: 30,
    })
  })
  
  const handleOnMouseLeave = contextSafe(() => {
    if(!vdRef.current) return

    gsap.to(vdRef.current, {
      xPercent: 0,
      yPercent: 0,
      rotate: -15,
      ease: "power1.inOut"
    })
  })
  
  return (
    <section id="about" className="about-section">
      {/* Profile Image */}
      <div className="profile-img">
        <img
          src="/profile-img.png"
          alt="profile-img"
          className="translate-x-4 scale-130"
        />
      </div>

      {/* Hello video */}
      <video
        ref={vdRef}
        src="/hello-text-video.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="absolute bottom-72 left-12 w-[200px] scale-[1.4] -rotate-15 mix-blend-exclusion max-sm:hidden md:-bottom-20 md:left-44"
      />

      {/* About */}
      <div className="about-content" onMouseMove={handleOnMouseMove} onMouseLeave={handleOnMouseLeave}>
        <p className="about">
          Hi, I'm <span className="font-medium">Gaurav</span>, a web developer
          who loves crafting engaging digital experiences. My approach blends
          creative design with robust engineering, ensuring every project is
          both visually appealing and highly functional.
        </p>
        <a
          href="#contact"
          className="flex w-60 gap-2 rounded-full px-5 py-3 text-center text-2xl ring-2 transition-colors duration-200 hover:bg-white hover:text-black max-sm:focus:bg-white max-sm:focus:text-black"
        >
          <span className="block animate-spin duration-300">✦</span>
          Get In Touch
          <span className="animate-spin">✦</span>
        </a>
      </div>
    </section>
  );
};

export default About;
