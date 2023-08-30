
import styles from "../assets/styles/global.module.scss"
import Header from "../components/Header/Header"
import Form from "../components/Form/Form"
import Footer from "../components/Footer/Footer"
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton"

function Contact() {
    return (
        <div className={styles.app}>
            <header>
                <Header />
            </header>
            <main>
                <Form />
            </main>
            <ScrollTopButton />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact