import styles from "../Header/header.module.scss"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/images/logo-entreprise/logo-entreprise.png"

import { useState } from "react";

import NavLinkItems from "./NavLinkItems"
import MyNetwork from "../MyNetwork/MyNetwork";

function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    const gitHubLogoClass = "fa-brands fa-github fa-2xl";
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
                <div className={styles.containerGithub}>
                    <NavLink
                        className={styles.linkGithub}
                        to="https://github.com/Anthony63000?tab=repositories"
                        target="_blank"
                    >
                        <i className={`${gitHubLogoClass} ${styles.gitIcon}`}></i>
                    </NavLink>
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