import AboutUsModal from "../components/About/AboutUsModal";

export default function NavBar() {
  return (
    <nav
      className={`py-2.5 px-5 flex items-center bg-[#272832] text-[#F8F9FA] w-screen justify-between shadow-lg`}
    >
      <h3 className={`text-lg playwrite-cu-ba text-cyan-300/80`}>
        Air Quality Index
      </h3>
      <AboutUsModal />
    </nav>
  );
}
