import AboutUsModal from "../components/About/AboutUsModal";
import MobileScreenLayout from "./MobileScreenLayout";
import LargeScreenLayout from "./LargeScreenLayout";
import NavBar from "./NavBar";

export default function ProjectContainer() {
  return (
    <main
      className={`w-screen lg:md:h-screen h-screen flex flex-col items-center text-[#4F4F4F] bg-slate-950/95 overflow-hidden`}
    >
      {/* Heading */}
      <NavBar />

      {/* Main Large Screen Body */}
      <LargeScreenLayout />

      {/* Main Mobile Screen Body */}
      <MobileScreenLayout />
    </main>
  );
}
