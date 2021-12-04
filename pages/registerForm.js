import styles from '../styles/Register.module.css'
import {useState} from 'react'
import { useRouter } from 'next/router'

function RegisterForm() {
    const [err, setErr] = useState()
    const router = useRouter()

    const registerUser = async event => {
        event.preventDefault()

        const res = await fetch('/api/register', {
            body: JSON.stringify({
                name: event.target.name.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        if(event.target.name.value !== result.user){
            setErr('Mauvais pseudo...')
        } else {
            localStorage.setItem('username',  result.user)
            setErr()
            router.reload(window.location.pathname)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1 className={styles.title}>CryptoCoins</h1>
                <h2 className={styles.subTitle}>Loggez vous!</h2>
                <form onSubmit={registerUser} className={styles.card}>
                    <label htmlFor="name" className={styles.label}>Pseudo</label>
                    <input className={styles.input} id="name" name="name" type="text" autoComplete="name" required />
                    <button type="submit" className={styles.button}>Connection</button>
                </form>
                <div className={styles.err}>{err}</div>
            </div>
        </div>
    )
   
}

export default RegisterForm
