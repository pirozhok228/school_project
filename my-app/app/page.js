import Styles from './page.module.css'
import { Slider } from './components/Slider/Slider'

export default function Home() {
    return (
        <main className={Styles["main"]}>
            <div className={Styles["titles"]}>
                <h1 className={Styles["title"]}>Школьный медиацентр МБОУ Гиманзии №97 г.Ельца</h1>
                <h2 className={Styles["title"]}>Самые свежие новости из школьной жизни</h2>
            </div>

            <div className={Styles["main-container"]}>
                <div className={Styles["main-div"]}>
                    <img src='/images/школа.jpg' className={Styles["main-img"]} />
                    <div className={Styles["text-container"]}>
                        <h3 className={Styles["main-h3"]}>Немного о нашей школе</h3>
                        <p className={Styles["main-p"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className={Styles["main-div"]}>
                    <div className={Styles["text-container"]}>
                        <h3 className={Styles["main-h3"]}>Немного о нашем проекте</h3>
                        <p className={Styles["main-p"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <img src='/images/room.png' className={Styles["main-img"]} />
                </div>
                <div className={Styles["main-div"]}>
                    <img src='/images/2.jpg' className={Styles["main-img"]} />
                    <div className={Styles["text-container"]}>
                        <h3 className={Styles["main-h3"]}>И ещё немного о нашей команде</h3>
                        <p className={Styles["main-p"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
