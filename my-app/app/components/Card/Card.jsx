'use client'

import { useState } from 'react'
import Styles from './Card.module.css'

export const Card = (props) => {
    const [state, setState] = useState(null);
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    const [newTitle, setNewTitle] = useState(props.title);
    const [newText, setNewText] = useState(props.text);


    function deletePost() {
        setState('delete')
        fetch(`http://127.0.0.1:5000/delete_post/${props.id}`)
    }

    function editPost() {
        setTitle(newTitle);
        setText(newText);
        setState(null)
        const newPost = {
            title: newTitle,
            text: newText,
        }
        const newPostJSON = JSON.stringify(newPost)
        fetch(`http://127.0.0.1:5000/edit_post/${props.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newPostJSON
        })
    }

    return (
        <>
            {(state !== 'delete' && state !== 'edit') &&
                (<div className={Styles['card']} >
                    <h3 className={Styles['title']}>{title}</h3>
                    <p className={Styles['text']}>{text}</p>
                    <p className={Styles['time']}>{props.date} {props.time}</p>
                    {props.admin &&
                        (
                            <div className={Styles['button-container']}>
                                <button className={Styles['button-del']} onClick={deletePost}>Удалить</button>
                                <button className={Styles['button-set']} onClick={() => setState('edit')}>Редактировать</button>
                            </div>
                        )}
                </div >
                )
            }
            {
                state === 'edit' && (
                    <div className={Styles['card']} >
                        <input className={Styles['title']} type="text" value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} />
                        <textarea className={Styles['text']} value={newText} rows={20} onChange={(e) => { setNewText(e.target.value) }} />
                        <p className={Styles['time']}>{props.date} {props.time}</p>
                        <div className={Styles['button-container']}>
                            <button className={Styles['button']} onClick={editPost}>Сохранить</button>
                            <button className={Styles['button']} onClick={() => setState(null)}>Отмена</button>
                        </div>

                    </div>
                )
            }
        </>
    )
}