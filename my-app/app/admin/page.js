'use client'

import { useRouter } from 'next/navigation';
import Styles from '../admin/page.module.css'
import { CardsList } from "../components/CardsList/CardsList"
import { PopUp } from '../components/PopUp/PopUp';
import { useState, useEffect } from 'react';

export default function AdminPage() {
    const [data, setData] = useState(null);
    const [popup, setPopup] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const auth = localStorage.getItem('auth');

        if (!auth) {
            router.push('login')
        }

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
            <button className={Styles['button']} onClick={() => {localStorage.removeItem('auth'); router.push('/')}}>Выйти</button>
            <button className={Styles['button']} onClick={() => setPopup(true)}>Добавить запись</button>
            {data ? <CardsList data={data} admin={true} /> : <h1>Загрузка...</h1>}
            {popup && <PopUp set={setPopup} />}
        </main>
    )
}