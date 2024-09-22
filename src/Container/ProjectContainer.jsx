import MobileScreenLayout from "./MobileScreenLayout";
import LargeScreenLayout from "./LargeScreenLayout";
import NavBar from "./NavBar";
import { useContextData } from "../components/Context/UseContext";

export default function ProjectContainer() {
  const { content } = useContextData();
  return (
    <main
      className={`w-screen lg:md:h-screen flex flex-col items-center text-[#4F4F4F]  overflow-hidden ${
        content
          ? "h-screen bg-slate-950/95"
          : "min-h-screen bg-slate-950"
      }`}
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
