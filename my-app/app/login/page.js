'use client'

import { useRouter } from 'next/navigation';
import Styles from './login.module.css'
import { useEffect, useState } from 'react'

export default function LoginPage() {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    const [isAuth, setAuth] = useState(null);

    const router = useRouter();

    useEffect(() => {
        if (isAuth) {
            router.push('/admin');
        }
    }, [isAuth])

    const authorize = async () => {
        const user = {
            login: login,
            password: password,
        };

        const userJSON = JSON.stringify(user);

        const res = await fetch('http://127.0.0.1:5000/auth', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: userJSON
        })
        const status = await res.json()
        setAuth(status);
        localStorage.setItem('auth', true);
    }

    return (
        <main className={Styles['main']}>
            <div className={Styles['login-container']}>
                <h2>Авторизация</h2>
                {isAuth === false && <p style={{color: "red"}}>Неверный логин или пароль</p>}
                <input className={Styles['input']} placeholder='Логин' onChange={(e) => setLogin(e.target.value)} />
                <input className={Styles['input']} type="password" placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} />
                <button className={Styles['button']} onClick={authorize}>Войти</button>
            </div>
        </main>
    )
}