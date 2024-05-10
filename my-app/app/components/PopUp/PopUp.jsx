'use client'

import Styles from './PopUp.module.css'
import { useState } from 'react'

export const PopUp = (props) => {
    const [title, setTitle] = useState(null);
    const [text, setText] = useState(null);

    const addPost = () => {
        const newPost = {
            title: title,
            text: text,
        }
        const newPostJSON = JSON.stringify(newPost);
        fetch('http://127.0.0.1:5000/add_post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newPostJSON,
        })
    }

    return (
        <div className={Styles['popup']}>
            <div className={Styles['popup-content']}>
                <input className={Styles['title']} type="text" placeholder='Название' onChange={(e) => setTitle(e.target.value)}/>
                <textarea className={Styles['text']} rows={20} placeholder='Текст' onChange={(e) => setText(e.target.value)}/>
                <div className={Styles['button-container']}>
                    <button className={Styles['button']} onClick={() => {addPost(); props.set();}}>Добавить</button>
                    <button className={Styles['button']} onClick={() => props.set()}>Отмена</button>
                </div>
            </div>
        </div>
    )
}