/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useState, useEffect } from 'react';

import styles from "./form.module.scss"

import { useContext } from 'react';
import traduction from '../../assets/data/traduction';
import { languageContext } from '../Context/ContextLang';

function Form() {

    const { language } = useContext(languageContext);
    const useLanguage = traduction[language];

    const [textIsCopied, setTextIsCopied] = useState(false)
    const [resetTimeout, setResetTimeout] = useState(null);

    const email = "anthony.borel02@gmail.com";
    const clickEmail = useLanguage.contactCopy

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

    // Contrôle des entrées dans le formulaire

    const [firstNameControl, setFirstNameControl] = useState("");
    const [emailControl, setEmailControl] = useState("");
    const [messageControl, setMessageControl] = useState("");

    const [formIsValidate, setFormIsValidate] = useState(false)

    const handleChange = (event, setStateControl) => {
        setStateControl(event.target.value);
    }

    useEffect(() => {
        if(firstNameControl !== "" && emailControl !== "" && emailControl.includes("@")
        && messageControl !== "") {
            setFormIsValidate(true)
        } else {
            setFormIsValidate(false)
        }
    }, [firstNameControl, emailControl, messageControl])

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
                            className={`${styles.input} ${firstNameControl !== "" ? 
                            styles.inputOk
                            :
                            styles.inputFalse
                            }`}
                            type="text" 
                            name="name" 
                            placeholder={useLanguage.contactPrenomplaceholder}
                            value={firstNameControl}
                            onChange={(event) => { handleChange(event, setFirstNameControl)
                            }}
                        />
                        <label 
                            htmlFor="email"
                            className={styles.label}
                        >
                                *Email :
                        </label>
                        <input 
                            className={`${styles.input} ${emailControl !== "" && emailControl.includes("@") ? 
                            styles.inputOk
                            :
                            styles.inputFalse
                            }`}
                            type="email" 
                            name="email" 
                            value={emailControl}
                            placeholder={useLanguage.contactEmailPlaceholder}
                            onChange={(event) => { handleChange(event, setEmailControl)
                            }}
                        />
                        <label 
                            htmlFor="message"
                            className={styles.label}
                        >
                            *Message :
                        </label>
                        <textarea 
                            className={`${styles.input} ${styles.message}
                            ${messageControl.length < 800 && messageControl !== "" ? styles.inputOk : styles.inputFalse}
                            `}
                            name="message"
                            placeholder={useLanguage.contactMessagePlaceholder}
                            value={messageControl}
                            onChange={(event) => { handleChange(event, setMessageControl)
                            }}
                        >
                        </textarea>
                        <button
                            disabled={!formIsValidate}
                            className={`${styles.button} ${formIsValidate === true ? styles.isValid : ""}`}
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