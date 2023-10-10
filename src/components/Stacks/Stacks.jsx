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


function Stacks() {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                   Ma stack de développeur Front-End
                </h3>
                <p className={styles.subTitle}>
                    Zoom sur mes compétences
                </p>
            </div>
            <div className={styles.bottom}>
                <Stack 
                    title="Intégration Web"
                    image1={HtmlLogo}
                    image2={CssLogo}
                    image3={SassLogo}
                    description="L'intégration web est l'art de donner vie à une vision artistique à travers le code. HTML, le squelette de la page, définit la structure, CSS, la couche stylisée, ajoute la beauté, tandis que Sass, le préprocesseur CSS, offre des fonctionnalités avancées pour rendre le style plus flexible et maintenable. Ensemble, ces langages forment l'épine dorsale de l'expérience utilisateur sur le web, créant des sites interactifs et visuellement captivants."
                />
                <Stack 
                    title="Front-End"
                    image1={JavaScriptLogo}
                    image2={ReactLogo}
                    image3={ReduxLogo}
                    description="Dans le monde du développement web, JavaScript est le moteur qui alimente l'interactivité, React, la bibliothèque front-end, apporte la facilité et la réactivité dans la construction des interfaces utilisateur, tandis que Redux, un gestionnaire d'état prévisible, assure une gestion efficace des données à travers toute l'application. Ensemble, ces technologies forment une trinité puissante, offrant des expériences utilisateur dynamiques et des applications web robustes"
                />
                <Stack 
                    title="Back-End"
                    image1={NodeLogo}
                    image2={MongoLogo}
                    image3={FirebaseLogo}
                    description="Dans l'écosystème du développement web, Node.js sert de fondation robuste côté serveur, permettant l'exécution de JavaScript côté serveur. Firebase, avec ses services cloud, offre une plateforme complète pour le développement rapide d'applications web et mobiles, tandis que MongoDB, une base de données NoSQL, assure une gestion flexible et évolutive des données. Ensemble, Node.js, Firebase et MongoDB forment une synergie puissante, facilitant la création d'applications web modernes, agiles et extensibles (En cours d'apprentissage)"
                />
                <Stack 
                    title="Outils de versionning"
                    image1={GitHubLogo}
                    image2={GitLogo}
                    description="Git et GitHub sont des piliers essentiels du processus de développement collaboratif. Git, un système de contrôle de version décentralisé, permet aux développeurs de gérer efficacement les changements de code. GitHub, en tant que plateforme d'hébergement de code, offre un espace collaboratif où les équipes peuvent partager, contribuer et suivre les versions de leur code. Ensemble, Git et GitHub simplifient la gestion du code source, favorisant une collaboration transparente et un développement itératif dans le monde du développement web"
                />
            </div>
        </div>
    )
}

export default Stacks