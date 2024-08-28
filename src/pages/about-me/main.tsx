import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return <div>
    <h1 className="w-full text-center text-3xl">{t("about_me.title")}</h1>
    </div>;
};

export default AboutMe;
