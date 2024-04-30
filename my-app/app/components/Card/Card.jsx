'use client'

import { useEffect, useState } from 'react'
import Styles from './Card.module.css'

export const Card = (props) => {
    const [state, setState] = useState(null);
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    const [newTitle, setNewTitle] = useState(props.title);
    const [newText, setNewText] = useState(props.text);

    useEffect(() => {
        if (state === 'delete') {
            console.log('элемент удален')
        }
    }, [state])

    return (
        <>
            {(state !== 'delete' && state !== 'set') &&
                (<div className={Styles['card']} >
                    <h3 className={Styles['title']}>{title}</h3>
                    <p className={Styles['text']}>{text}</p>
                    <p className={Styles['time']}>{props.date} {props.time}</p>
                    {props.admin &&
                        (
                            <div className={Styles['button-container']}>
                                <button className={Styles['button-del']} onClick={() => setState('delete')}>Удалить</button>
                                <button className={Styles['button-set']} onClick={() => setState('set')}>Редактировать</button>
                            </div>
                        )}
                </div >
                )
            }
            {
                state === 'set' && (
                    <div className={Styles['card']} >
                        <input className={Styles['title']} type="text" value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}} />
                        <textarea className={Styles['text']} value={newText} rows={20} onChange={(e) => {setNewText(e.target.value)}}/>
                        <p className={Styles['time']}>{props.date} {props.time}</p>
                        <button onClick={() => {setTitle(newTitle); setText(newText); setState(null)}}>Сохранить</button>
                        <button onClick={() => setState(null) }>Отмена</button>
                    </div>
                )
            }
        </>
    )
}