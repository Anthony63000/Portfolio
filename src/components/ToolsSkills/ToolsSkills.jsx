
import styles from "./toolsSkills.module.scss";

import ToolSkill from "./ToolSkills";

import VscodeLogo from "../../assets/images/tools/visual-studio-code-1.svg";
import gimpLogo from "../../assets/images/tools/gimp.svg";
import notionLogo from "../../assets/images/tools/notion-2.svg";

function ToolsSkills() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    Outils de développement
                </h3>
                <p className={styles.subTitle}>
                    Zoom sur les outils de développement que j'utilise
                </p>
                <div className={styles.bottom}>
                    <ToolSkill 
                        title="Visual Studio Code"
                        toolImage={VscodeLogo}
                        description="Visual Studio Code (VS Code) émerge comme l'outil de prédilection pour les développeurs web. En tant qu'éditeur de code léger et puissant, VS Code offre une expérience de développement exceptionnelle. Ses fonctionnalités étendues, son support pour divers langages, ses extensions personnalisables et son intégration native avec les outils de contrôle de version font de VS Code un compagnon inestimable pour les développeurs. Avec son interface intuitive et ses mises à jour régulières, VS Code contribue à optimiser le flux de travail du développeur, faisant de lui un choix incontournable dans l'arsenal des outils de développement web."
                    />
                    <ToolSkill 
                        title="Gimp"
                        toolImage={gimpLogo}
                        description="GIMP, acronyme de GNU Image Manipulation Program, se positionne comme une solution libre et puissante pour l'édition de photos. En tant qu'alternative robuste aux logiciels d'édition d'image propriétaires, GIMP offre une gamme complète d'outils permettant aux créatifs et aux professionnels de retoucher, de composer et d'améliorer des images. Doté de fonctionnalités avancées telles que la retouche non destructive, les calques, les filtres et les scripts, GIMP se distingue par sa polyvalence et son accessibilité. Pour ceux qui cherchent à maîtriser l'art de la retouche photo, GIMP représente une solution puissante, gratuite et open-source, offrant une liberté créative sans compromis."
                    />
                    <ToolSkill 
                        title="Notion"
                        toolImage={notionLogo}
                        description="Notion émerge comme une plateforme tout-en-un révolutionnaire pour la gestion des tâches, la collaboration et la création de contenu. En fusionnant la prise de notes, la gestion de projet, les bases de données et plus encore, Notion offre une flexibilité exceptionnelle. Les utilisateurs peuvent créer des pages personnalisées, les structurer à leur guise et intégrer des éléments tels que des bases de données, des tableaux, des listes de tâches et des médias. La nature modulaire de Notion permet une adaptation à divers besoins, du suivi personnel des tâches à la gestion de projets d'équipe complexes. En résumé, Notion se positionne comme un outil polyvalent qui redéfinit la manière dont nous organisons et collaborons, offrant une approche moderne et intuitive de la productivité."
                    />
                </div>
            </div>
        </div>
    )
}

export default ToolsSkills