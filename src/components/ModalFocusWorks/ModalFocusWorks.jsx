import styles from "./modalFocusWorks.module.scss";
import { useState, useEffect } from "react";

function ModalFocusWorks({ image, altImage, toggleModal }) {
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
    };

    useEffect(() => {
        if (closing) {
            setTimeout(() => {
                toggleModal();
            }, 450);
        }
    }, [closing, toggleModal]);

    return (
        <div
            onClick={handleClose}
            className={styles.container}
        >
            <img
                src={image}
                alt={altImage}
                className={`${styles.image} ${closing ? styles.closing : ""}`}
            />
        </div>
    );
}

export default ModalFocusWorks;
