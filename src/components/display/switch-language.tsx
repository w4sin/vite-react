import { useTranslation } from "react-i18next";

import flag_th from "../../assets/flag_th.png";
import flag_en from "../../assets/flag_en.png";

const sizeFlag = "w-7 h-7";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    i18n.changeLanguage(checked ? "th" : "en");
  };

  return (
    <div className="layout-rounded">
      <label className="swap swap-flip text-xl">
        <input type="checkbox" onChange={toggleLanguage} />

        <div className="swap-on">
          <img
            className={`${sizeFlag}`}
            src={flag_th}
            alt="thailand flag icons"
          />
        </div>
        <div className="swap-off">
          <img
            className={`${sizeFlag}`}
            src={flag_en}
            alt="english flag icons"
          />
        </div>
      </label>
    </div>
  );
};

//<a href="https://www.flaticon.com/free-icons/thailand" title="thailand icons">Thailand icons created by Freepik - Flaticon</a> th
//<a href="https://www.flaticon.com/free-icons/england" title="england icons">England icons created by Marcus Christensen - Flaticon</a> en

export default SwitchLanguage;
