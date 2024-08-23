import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from "./en/global.json";
import global_th from "./th/global.json";

i18n.use(initReactI18next).init({
    lng: "auto",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
        en: global_en,
        th: global_th
    },
});

export default i18n;