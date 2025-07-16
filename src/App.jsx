import { Outlet } from "react-router";
import { Navbar, Footer } from "./components/index";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <main>
        <Analytics />
        <Toaster />
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default App;
