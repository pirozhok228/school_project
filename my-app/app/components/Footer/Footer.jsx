import Styles from './Footer.module.css'

export const Footer = () => {
    return(
        <footer className={Styles["footer"]}>
        <div className={Styles["support"]}>
            <h3 className={Styles['footer-title']}>Обратная связь</h3>
            <p>support@gmail.com</p>
        </div>
        <div className={Styles["pages"]}>
            <h3 className={Styles['footer-title']}>Разделы</h3>
            <p>Новости</p>
            <p>Обявления</p>
            <p>О нас</p>
        </div>
    </footer>
    )
}