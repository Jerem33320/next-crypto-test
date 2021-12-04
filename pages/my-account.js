import { useCart } from '../hooks/use-cart'
import styles from '../styles/Account.module.css'

function myaccount() {
    const {cartItems, totalItems, subTotal, addToCart, removeToCart} = useCart()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Gérer votre compte</h1>
            <p className={styles.subTitle}>Vous posséder actuellement un total de {totalItems} <strong>cryptocoins</strong> pour un montant de {subTotal}$.</p>
            <table className={styles.main}>
                <thead className={styles.label}>
                    <tr>
                        {
                            Object.values(cartItems).map(c => {
                                return <th key={c.id}>{c.name}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            Object.values(cartItems).map(c => {
                                return <th key={c.id}>
                                    <img src={c.image} alt={c.name} className={styles.imgcoin}/>
                                </th>
                            })
                        }
                    </tr>
                    <tr>
                        {
                            Object.values(cartItems).map(c => {
                                return <th key={c.id}>{c.quantity}</th>
                            })
                        }
                    </tr>
                    <tr>
                        {
                            Object.values(cartItems).map(c => {
                                return <th key={c.id}>
                                    <button className={styles.button} onClick={() => {
                                        addToCart({id: c.id})
                                    }}>Investir</button>&nbsp;&nbsp;
                                    {c.pricePerItem * c.quantity}$
                                    &nbsp;&nbsp;<button className={styles.button} onClick={() => {
                                        removeToCart({id: c.id})
                                    }}>Retirer</button>
                                </th>
                            })
                        }
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

export default myaccount
