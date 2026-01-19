import { useTranslation } from "react-i18next";

type HeaderProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

export const Header = ({
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: HeaderProps) => {
  const { t } = useTranslation();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex-row md:flex md:justify-between md:px-18 text-white">
      <div className="flex justify-center items-center p-2">
        <h1 className="text-3xl font-bold coolvetica">{t("header.logo")}</h1>
      </div>
      <div className="flex justify-center items-center gap-8 p-2 text-lg font-medium ">
        <h1
          className="cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          {t("header.aboutMe")}
        </h1>
        <h1
          className="cursor-pointer"
          onClick={() => scrollToSection(skillsRef)}
        >
          {t("header.skills")}
        </h1>
        <h1
          className="cursor-pointer"
          onClick={() => scrollToSection(projectsRef)}
        >
          {t("header.projects")}
        </h1>
        <h1
          className="cursor-pointer"
          onClick={() => scrollToSection(contactRef)}
        >
          {t("header.contact")}
        </h1>
      </div>
    </div>
  );
};
