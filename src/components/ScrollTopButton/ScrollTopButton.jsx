
import styles from "./scrollTopButton.module.scss";

import { useState, useEffect } from "react";

function ScrollTopButton() {
    
    const [showButton, setShowButton] = useState(false);
    
    const handleScroll = () => {
        if(window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const arrowTopLarge = "fa-solid fa-arrow-up fa-xl";
    const arrowTop = "fa-solid fa-arrow-up";

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className={styles.button}
                >
                    <i
                        className={window.innerWidth < 500 ? arrowTop : arrowTopLarge}
                    >

                    </i>
                </button>
            )}
        </>
    )
}

export default ScrollTopButton