
import styles from "../assets/styles/global.module.scss"
import Header from "../components/Header/Header"
import Form from "../components/Form/Form"
import Footer from "../components/Footer/Footer"

function Contact() {
    return (
        <div className={styles.app}>
            <Header />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact