import styles from "../assets/styles/global.module.scss"

import { useParams } from "react-router-dom"
import data from "../assets/data/data.json";
import Header from "../components/Header/Header";
import BannerFocusWorks from "../components/BannerFocusWork/BannerFocusWork";
import FocusWorkFeature from "../components/FocusWorkFeature/FocusWorkFeature";
import Footer from "../components/Footer/Footer"
import FocusWorkStack from "../components/FocusWorkStack/FocusWorkStack";
import PrevOrNextProject from "../components/PrevOrNextProject/PrevOrNextProject";

function FocusWorks() {

    const { id } = useParams();

    const workSelected = data.projects.find(work => work.id === Number(id));

    if (!workSelected) {
        return <div>Work non trouvé</div>;
    }

    return (
        <div className={styles.app}>
            <Header />
            <BannerFocusWorks 
                imageBanner={workSelected.logo}
                link={workSelected.link}
                linkText="Visiter le projet"
            />
            <div className={styles.mainContainer}>
                <FocusWorkFeature 
                    title={workSelected.title}
                    themeText={workSelected.theme}
                    natureText={workSelected.nature}
                    assignmentText={workSelected.description}
                    dateText={workSelected.date}
                    linkText={workSelected.link}
                />

                <FocusWorkStack 
                    workSelected={workSelected}
                    workLogo={workSelected.stackLogo}
                    workLogoColor={workSelected.workLogoId}
                />
            </div>
                <PrevOrNextProject />
            <Footer />
        </div>
    )
}

export default FocusWorks