import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const Loading = () => {
  const { progress, total } = useProgress();
  console.log(progress, total)

  useGSAP(() => {
    if (progress === 100) {
      gsap.to(".loader-screen", {
        yPercent: -100,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [progress]);

  return (
    <div className="loader-screen bg-black w-screen h-dvh fixed top-0 left-0 z-[10000000] text-amber-50">
      <div className="flex-center w-full h-full">
        <img src="/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loading;