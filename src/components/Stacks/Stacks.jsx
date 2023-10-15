import Stack from "./Stack";
import styles from "./stacks.module.scss";

import HtmlLogo from "../../assets/images/skills/html-1.svg";
import CssLogo from "../../assets/images/skills/css-3.svg";
import SassLogo from "../../assets/images/skills/sass-1.svg";
import JavaScriptLogo from "../../assets/images/skills/logo-javascript.svg";
import ReactLogo from "../../assets/images/skills/react-2.svg";
import ReduxLogo from "../../assets/images/skills/redux-logo.svg";
import NodeLogo from "../../assets/images/skills/nodejs-1.svg";
import MongoLogo from "../../assets/images/skills/mongodb-icon-2.svg";
import FirebaseLogo from "../../assets/images/skills/firebase-1.svg";
import GitHubLogo from "../../assets/images/skills/github-icon-1.svg";
import GitLogo from "../../assets/images/skills/git-icon.svg";
import { useContext } from "react";
import { languageContext } from "../Context/ContextLang";
import traduction from "../../assets/data/traduction"
import { useTheme } from "../Context/ContextTheme";

function Stacks() {

    const { language } = useContext(languageContext)
    const useLanguage = traduction[language]

    const { theme } = useTheme()
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
                   {useLanguage.stackTitle}
                </h3>
                <p className={styles.subTitle}>
                    {useLanguage.stackSubtitle}
                </p>
            </div>
            <div className={styles.bottom}>
                <Stack 
                    title={useLanguage.integrationWebTitle}
                    image1={HtmlLogo}
                    image2={CssLogo}
                    image3={SassLogo}
                    description={useLanguage.integrationWebDescription}
                />
                <Stack 
                    title="Front-End"
                    image1={JavaScriptLogo}
                    image2={ReactLogo}
                    image3={ReduxLogo}
                    description={useLanguage.frontEndDescription}
                />
                <Stack 
                    title="Back-End"
                    image1={NodeLogo}
                    image2={MongoLogo}
                    image3={FirebaseLogo}
                    description={useLanguage.backEndDescription}
                />
                <Stack 
                    title={useLanguage.toolsVersionningTitle}
                    image1={GitHubLogo}
                    image2={GitLogo}
                    description={useLanguage.toolsVersionningDescription}
                />
            </div>
        </div>
    )
}

export default Stacks