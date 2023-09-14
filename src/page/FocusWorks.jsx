import styles from "../assets/styles/global.module.scss"

import { useParams } from "react-router-dom"
import data from "../assets/data/data.json";
import Header from "../components/Header/Header";
import BannerFocusWorks from "../components/BannerFocusWork/BannerFocusWork";

function FocusWorks() {

    const { id } = useParams();

    const workSelected = data.projects.find(work => work.id === Number(id));

    if (!workSelected) {
        // Gérer le cas où aucun élément n'a été trouvé
        return <div>Work non trouvé</div>;
    }

    return (
        <div className={styles.app}>
            <Header />
            <BannerFocusWorks 
                imageBanner={workSelected.logo}
            />
        </div>
    )
}

export default FocusWorks