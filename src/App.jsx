import { Outlet } from "react-router";
import { Navbar, Footer } from "./components/index";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <>
      <main>
        <Analytics />
        <Toaster />
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Outlet />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
