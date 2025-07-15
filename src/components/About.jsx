import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    const start = isMobile ? "center 70%" : "top 80%";

    const splitText = SplitText.create(".about", {
      type: "lines",
    });

    gsap.from(".profile-img", {
      scrollTrigger: {
        trigger: ".profile-img",
        start: "top 80%",
        // markers: true,
      },
      filter: "blur(30px)",
      opacity: 0,
      duration: 0.5,
    });

    gsap.from(splitText.lines, {
      scrollTrigger: {
        trigger: ".about-section",
        start: start,
        // markers: true,
      },
      filter: "blur(30px)",
      yPercent: 100,
      opacity: 0,
      y: -100,
      rotation: "random(-80, 80)",
      duration: 0.8,
      ease: "back",
      stagger: 0.15,
    });
  });
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
        src="/hello-text-video.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="absolute bottom-72 left-12 w-[200px] scale-[1.4] -rotate-15 mix-blend-exclusion max-sm:hidden md:-bottom-20 md:left-44"
      />

      {/* About */}
      <div className="about-content">
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
