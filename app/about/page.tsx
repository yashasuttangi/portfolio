import About from "@/components/About";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { SpotlightNew } from "@/components/ui/SpotlightNew";
import { FaHome, FaRProject } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/about", icon: <FaUser /> },
            { name: "Experience", link: "/experience", icon: <FaRProject />},
            { name: "Projects", link: "/projects", icon: <FaRProject /> },
          ]}
        />
        <SpotlightNew
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, 0.12) 0, hsla(210, 100%, 55%, 0.04) 50%, hsla(210, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.09) 0, hsla(210, 100%, 55%, 0.03) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.07) 0, hsla(210, 100%, 45%, 0.02) 80%, transparent 100%)"
        />
        <About />
      </div>
    </main>
  );
}
