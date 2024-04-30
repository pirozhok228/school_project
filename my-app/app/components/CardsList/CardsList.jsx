import { Card } from "../Card/Card"
import Styles from './CardsList.module.css'

export const CardsList = (props) => {
    return (
        <ul className={Styles['list-news']}>
            {props.data.map((item, index) => {
                return (
                    <li key={index}>
                        <Card id={index} title={item.title} text={item.text} date={item.date} time={item.time} admin={props.admin} />
                    </li>
                )
            })}
        </ul>

    )
}