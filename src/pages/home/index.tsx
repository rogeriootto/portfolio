import react from "react";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <p>{t("welcome")}</p>
    </div>
  );
};
