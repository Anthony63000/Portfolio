
import styles from "./toolsSkills.module.scss";

import ToolSkill from "./ToolSkills";

import VscodeLogo from "../../assets/images/tools/visual-studio-code-1.svg";
import gimpLogo from "../../assets/images/tools/gimp.svg";
import notionLogo from "../../assets/images/tools/notion-2.svg";
import { useContext } from "react";
import { languageContext } from "../Context/ContextLang";
import traduction from "../../assets/data/traduction";
import { useTheme } from "../Context/ContextTheme";

function ToolsSkills() {

    const { language } = useContext(languageContext)
    const useLanguage = traduction[language]

    const { theme } = useTheme();
    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={`${styles.title} ${themeClass}`}>
                    {useLanguage.toolsSkillTitle}
                </h3>
                <p className={styles.subTitle}>
                    {useLanguage.toolsSkillSubTitle}
                </p>
                <div className={styles.bottom}>
                    <ToolSkill 
                        title="Visual Studio Code"
                        toolImage={VscodeLogo}
                        description={useLanguage.vsCodeDescription}
                    />
                    <ToolSkill 
                        title="Gimp"
                        toolImage={gimpLogo}
                        description={useLanguage.gimpDescription}
                    />
                    <ToolSkill 
                        title="Notion"
                        toolImage={notionLogo}
                        description={useLanguage.notionDescription}
                    />
                </div>
            </div>
        </div>
    )
}

export default ToolsSkills