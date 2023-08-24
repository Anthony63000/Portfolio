import styles from "../Header/header.module.scss"
import Logo from "../../assets/images/logo-entreprise/logo-entreprise.png"

import { useState } from "react";

import NavLinkItems from "./NavLinkItems"
import MyNetwork from "../MyNetwork/MyNetwork";

function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isFrench, setIsFrench] = useState(true);

    const openModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    const langage = "Français";
    const customLanguage = "English";

    const changeTextLang = () => {
        setIsFrench(!isFrench)
    }

    const langageClass = "fa-solid fa-language fa-xl";
    const burgerClass = "fa-solid fa-bars fa-xl"
    const closeClass = "fa-solid fa-circle-xmark fa-xl"

    return (
            <div className={styles.container}>
                <div className={styles.containerLogo}>
                    <img 
                        className={styles.logo}
                        src={Logo} 
                        alt="Logo du site"
                    />
                </div>
                <NavLinkItems />
                <div 
                    className={styles.langageContainer}
                    onClick={changeTextLang}
                >
                        <p 
                            className={styles.langue}
                        >
                            {isFrench ? langage : customLanguage}
                        </p>
                        <i className={langageClass}></i>
                </div>
                <div 
                    className={styles.burger}
                    onClick={openModal}
                >
                        <i className={burgerClass}></i>
                </div>  
                {modalIsOpen && (
                <div className={styles.modal}>
                    <div className={styles.top}>
                        <p className={styles.navigationTilte}>Navigation</p>
                        <i 
                            className={closeClass}
                            onClick={openModal}
                        >
                        </i>
                    </div>
                    <div className={styles.contentContainer}>
                        <NavLinkItems />
                    </div>
                    <div className={styles.network}>
                        <MyNetwork />
                    </div>
                </div>
            )}
            </div>
           
    )
}

export default Header