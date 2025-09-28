import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaHome, FaRProject } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden w-full">
      {" "}
      <FloatingNav
        navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "About", link: "/about", icon: <FaUser /> },
          { name: "Experience", link: "/experience", icon: <FaRProject /> },
          { name: "Projects", link: "/projects", icon: <FaRProject /> },
        ]}
      />
      {/* No container around Experience → full width */}
      <Experience />
    </main>
  );
}
