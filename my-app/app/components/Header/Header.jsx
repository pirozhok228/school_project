import Styles from './Header.module.css'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className={Styles['header']}>
            <div className={Styles['header-container']}>
                <Link href='http://127.0.0.1:3000/'>
                    <div className={Styles['logo']}>
                        <img src="/images/gerb.png" alt="Что-то пошло не так..." height="84" />
                        <h1 className={Styles['logo-title']}>Медиацентр<br />Гимназии №97<br />г. Ельца</h1>
                    </div>
                </Link>
                <nav>
                    <ul className={Styles['ul-links']}>
                        <Link className={Styles['link']} href="http://127.0.0.1:3000/news">Новости</Link>
                        <Link className={Styles['link']} href="http://127.0.0.1:3000/declorations">Объявления</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
