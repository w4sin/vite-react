import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import {
  NAVBAR_CONTENT_TRANSLATE,
  NAVBAR_CONTENT_WIDTH,
  NAVBAR_WIDTH,
} from "../../ultils/size";

import SwitchLanguage from "../display/switch-language";
import SwitchTheme from "../display/switch-theme";

import { TNavbar } from "../../types/navbar-item";

import Icon from "../../assets/icon.png"

import { BsPersonExclamation } from "react-icons/bs";
import { MdOutlineThumbUp } from "react-icons/md";

type NavbarProps = {
  isOpen: boolean;
  toggleNavbar: (isOpen?: boolean) => () => void;
};

const Navbar = ({ isOpen, toggleNavbar }: NavbarProps) => {
  const { t } = useTranslation();

  const navbarItems: TNavbar[] = [
    { name: "about_me", to: "/main/about_me", icon: <BsPersonExclamation /> },
    { name: "credit", to: "/main/credit", icon: <MdOutlineThumbUp /> },
  ];

  return (
    <aside
      id="navbar"
      className={`relative z-50 bg-black bg-opacity-45 md:bg-transparent ${
        isOpen ? `w-full ${NAVBAR_WIDTH}` : `w-0 ${NAVBAR_WIDTH}`
      }`}
    >
      <div
        id="backdrop-navbar"
        className="absolute top-0 left-0 right-0 bottom-0"
        onClick={toggleNavbar()}
      />

      <div
        className={`z-51 ${NAVBAR_CONTENT_WIDTH} bg-base-100 flex flex-col h-full border-r p-4 shadow-xl
             border-gray-100 overflow-hidden transition-all duration-500 ease-in-out 
             ${
               isOpen
                 ? "translate-x-0"
                 : `${NAVBAR_CONTENT_TRANSLATE} md:translate-x-0`
             }`}
      >
        {/*** Navbar Content ***/}

        {/* Navbar Header */}
        
        <div className="flex justify-between items-center">
          <img src={Icon} className="w-8 h-8"/>
          <p className="font-bold">{t("welcome")}</p>
          <div className="flex gap-2">
            <SwitchTheme />
            <SwitchLanguage />
          </div>
        </div>

        {/***  Navbar Header ***/}

        {/*** Navbar Items ***/}

        <ul className="mt-4">
          {navbarItems.map((item) => (
            <NavbarItem
              key={item.name}
              data={item}
              closeNavbar={toggleNavbar(false)}
            />
          ))}
        </ul>

        {/*** Navbar Items ***/}
      </div>
    </aside>
  );
};

export default Navbar;

const NavbarItem: React.FC<{
  data: TNavbar;
  closeNavbar: VoidFunction;
}> = ({ data, closeNavbar }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { name, icon } = data;

  const isActive = pathname.includes(name);

  const handleNavigate = (to: string) => () => {
    navigate(to, { replace: true });
    closeNavbar();
  };

  return (
    <li className="list-none mt-1.5">
      <details
        className={
          "w-full p-1 px-3 flex items-center justify-between rounded-md " +
          (isActive
            ? "bg-gradient-to-br from-transparent to-secondary cursor-default"
            : "hover:bg-gradient-to-br hover:from-transparent hover:to-secondary-light cursor-pointer")
        }
        onClick={handleNavigate(data.to)}
      >
        <summary className="w-full flex p-1 text-md items-center">
          <span className="text-xl mr-3">{icon}</span>
          {t(`${name}.title`)}
        </summary>
      </details>
    </li>
  );
};
