import { useState } from "react";
import Navbar from "../components/layout/navbar";
import { SECTION_WIDTH } from "../ultils/size";
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const MainPage = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = (isOpen?: boolean) => () => {
    setOpenNavbar(() => (isOpen ? isOpen : !openNavbar));
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Navbar isOpen={openNavbar} toggleNavbar={toggleNavbar} />

      <section
        className={`absolute left-0 w-full h-full
                transition-all duration-500 ease-in-out ${SECTION_WIDTH}`}
      >
        <div className="px-1 py-2.5 md:p-5 2xl:container w-full h-full mx-auto">
          <button
            name="toggle-navbar"
            className="md:hidden btn text-lg absolute top-2 left-3 min-h-0 h-fit p-3 rounded-lg"
            onClick={toggleNavbar()}
          >
            <AiOutlineMenu />
          </button>
          {<Outlet />}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
