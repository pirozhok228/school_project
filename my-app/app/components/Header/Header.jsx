import Styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={Styles['header']}>
            <div className={Styles['header-container']}>
                <div className={Styles['logo']}>
                    <img src="/images/gerb.png" alt="Что-то пошло не так..." height="84"/>
                    <h1 className={Styles['logo-title']}>Медиацентр<br />Гимназии №97<br />г. Ельца</h1>
                </div>
                <nav>
                    <ul className={Styles['ul-links']}>
                        <a className={Styles['link']} href="http://127.0.0.1:5000/">Главная</a>
                        <a className={Styles['link']} href="http://127.0.0.1:5000/news">Новости</a>
                        <a className={Styles['link']} href="http://127.0.0.1:5000/declorations">Объявления</a>
                        <a className={Styles['link']} href="http://127.0.0.1:5000/about_us">О нас</a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
