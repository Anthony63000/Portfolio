/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useState, useEffect } from 'react';

import styles from "./form.module.scss"

function Form() {

    const [textIsCopied, setTextIsCopied] = useState(false)
    const [resetTimeout, setResetTimeout] = useState(null);

    const email = "anthony.borel02@gmail.com";
    const clickEmail = "L'email à était copier dans ton presse-papier" 

    const pressPaperClass ="fa-regular fa-clipboard fa-lg";
    const trueClass = "fa-solid fa-check fa-lg";

    const textRef = useRef(null);

    const handleButtonClick = () => {
        if (!textIsCopied) {
            const textToCopy = email;
    
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                setTextIsCopied(true);
                console.log('Adresse e-mail copiée dans le presse-papier:', textToCopy);
    
                const timeout = setTimeout(() => {
                    setTextIsCopied(false);
                }, 5000); 
                setResetTimeout(timeout);
            } catch (err) {
                console.error('Erreur lors de la copie de l\'adresse e-mail :', err);
            } finally {
                document.body.removeChild(textArea);
            }
        }
    };

    useEffect(() => {
        return () => {
            if (resetTimeout) {
                clearTimeout(resetTimeout);
            }
        };
    }, [resetTimeout]);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    Contacte - moi
                </h3>
            </div>
            <div className={styles.bottom}>
                <div className={styles.right}>
                    <form 
                        action="https://formspree.io/anthony.borel02@gmail.com"
                        className={styles.form}
                        method="POST"
                    >
                        <label 
                            htmlFor="name"
                            className={styles.label}
                        >
                                *Prénom :
                        </label>
                        <input 
                            className={styles.input}
                            type="text" 
                            name="name" 
                            placeholder="Votre Prénom"
                        />
                        <label 
                            htmlFor="email"
                            className={styles.label}
                        >
                                *Email :
                        </label>
                        <input 
                            className={styles.input}
                            type="email" 
                            name="email" 
                            placeholder="Votre Email"
                        />
                        <label 
                            htmlFor="message"
                            className={styles.label}
                        >
                            *Message :
                        </label>
                        <textarea 
                            className={`${styles.input} ${styles.message}`}
                            name="message"
                            placeholder="Votre message"
                        >
                        </textarea>
                        <button
                            className={styles.button}
                            type="submit"
                        >
                            Envoyer
                        </button>
                    </form>
                    <div className={styles.altContainer}>
                        <p className={styles.altText}>Ou</p>
                        <div 
                            className={`${styles.mailContainer} ${textIsCopied ? 
                            styles.active
                            :
                            ""}`}
                            onClick={handleButtonClick}
                        >
                            <p 
                                className={styles.mail}
                                ref={textRef}
                            >
                                 {textIsCopied ? clickEmail : email}
                            </p>
                            <i className={`${textIsCopied ?
                            trueClass
                            :
                            pressPaperClass}`}
                            >
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form