import { useTranslation } from "react-i18next";
import {
  SIDEBAR_CONTENT_TRANSLATE,
  SIDEBAR_CONTENT_WIDTH,
  SIDEBAR_WIDTH,
} from "../../ultils/size";
import SwitchLanguage from "../display/switch-language";
import SwitchTheme from "../display/switch-theme";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <aside
      id="sidebar"
      className={`relative z-50 bg-black bg-opacity-45 md:bg-transparent ${
        isOpen ? `w-full ${SIDEBAR_WIDTH}` : `w-0 ${SIDEBAR_WIDTH}`
      }`}
    >
      <div
        id="backdrop-sidebar"
        className="absolute top-0 left-0 right-0 bottom-0"
        onClick={toggleSidebar}
      />

      <div
        className={`z-51 ${SIDEBAR_CONTENT_WIDTH} flex flex-col h-full border-r p-4 shadow-xl
             border-gray-100 overflow-hidden transition-all duration-500 ease-in-out 
             ${
               isOpen
                 ? "translate-x-0"
                 : `${SIDEBAR_CONTENT_TRANSLATE} md:translate-x-0`
             }`}
      >
        {/* Sidebar Content */}

        <div className="flex justify-between items-center">
          <p className="font-bold">{t('welcome')}</p>
          <div className="flex gap-2">
            <SwitchTheme />
            <SwitchLanguage />
          </div>
        </div>
        
      </div>
    </aside>
  );
};

export default Sidebar;
