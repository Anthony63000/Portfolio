import styles from "./bannerFocusWork.module.scss"

//import data from "../../assets/data/data.json"

function BannerFocusWorks({ imageBanner, altTextBanner }) {
    return (
        <div className={styles.container}>
            <img 
                className={styles.image}
                src={imageBanner} 
                alt={altTextBanner}
            />
        </div>
    )
}

export default BannerFocusWorks