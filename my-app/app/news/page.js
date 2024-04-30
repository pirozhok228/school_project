'use client'

import Styles from './page.module.css'
import { CardsList } from '../components/CardsList/CardsList'
import { useEffect, useState } from 'react';

export default function NewsPage() {
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
            <h1>Новости</h1>
            {data ? <CardsList data={data} admin={false} /> : <h1>Загрузка...</h1>}
        </main>
    )
}