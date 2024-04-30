'use client'

import Styles from '../admin/page.module.css'
import { CardsList } from "../components/CardsList/CardsList"
import { useState, useEffect } from 'react';

export default function AdminPage() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://127.0.0.1:5000/get_posts')
            const data = await res.json()
            setData(data)
        }
        fetchData();
    }, [])
    return (
        <main className={Styles['main']}>
            <h1>Админ-панель</h1>
            <button className={Styles['button']}>Добавить запись</button>
            {data ? <CardsList data={data} admin={true} /> : <h1>Загрузка...</h1>}
        </main>
    )
}