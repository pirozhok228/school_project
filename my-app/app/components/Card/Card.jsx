import Styles from './Card.module.css'

export const Card = (props) => {
    return(
        <div className={Styles['card']}>
            <h3 className={Styles['title']}>{props.title}</h3>
            <p className={Styles['text']}>{props.text}</p>
            <p className={Styles['time']}>{props.date} {props.time}</p>
        </div>
    )
}