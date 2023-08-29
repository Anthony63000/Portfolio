/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useState, useEffect } from 'react';

import styles from "./form.module.scss"

import { useContext } from 'react';
import traduction from '../../assets/data/traduction';
import { languageContext } from '../Context/ContextLang';

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

    const { language } = useContext(languageContext);
    const useLanguage = traduction[language];

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    {useLanguage.contactTitle}
                </h3>
            </div>
            <div className={styles.bottom}>
                <div className={styles.right}>
                    <form 
                        action="https://formspree.io/f/mpzgdnow"
                        className={styles.form}
                        method="POST"
                    >
                        <label 
                            htmlFor="name"
                            className={styles.label}
                        >
                                {useLanguage.contactPrenom}
                        </label>
                        <input 
                            className={styles.input}
                            type="text" 
                            name="name" 
                            placeholder={useLanguage.contactPrenomplaceholder}
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
                            placeholder={useLanguage.contactEmailPlaceholder}
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
                            placeholder={useLanguage.contactMessagePlaceholder}
                        >
                        </textarea>
                        <button
                            className={styles.button}
                            type="submit"
                        >
                            {useLanguage.contactButtonSubmit}
                        </button>
                    </form>
                    <div className={styles.altContainer}>
                        <p className={styles.altText}>{useLanguage.contactOr}</p>
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