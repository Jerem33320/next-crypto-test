import styles from './Nav.module.css'
import { useCart } from '../hooks/use-cart'
import {useRouter} from 'next/router'

const Nav = () => {
    const router = useRouter()
    const {subTotal, totalItems} = useCart()
      
    return (
        <nav className={styles.nav}>
            <div onClick={() => router.push('/')}><strong>Mon portefeuille cryptocoins</strong></div>
            <div><strong>Coins</strong> : {totalItems}</div>
            <div><strong>Montant investi</strong> : {subTotal} $</div>
            <button className={styles.button} onClick={() => router.push('/my-account')}>Voir</button>
            <button className={styles.buttonRed} onClick={() => {
                localStorage.removeItem('username')
                router.reload('/')}
            }>Déco</button>
        </nav>
    )
}

export default Nav;