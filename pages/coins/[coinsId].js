import Head from "next/dist/shared/lib/head";
import coins from '../../cryptocoins.json'
import { useCart } from "../../hooks/use-cart";
import styles from './CoinsId.module.css'

export default function Product({coin}) {
    const {id, name, description, image, price} = coin
    const {addToCart, removeToCart} = useCart();

    return (
        <div className={styles.container}>
            <Head>
                <title>{name} - CryptoCoins</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.leftImgDiv}>
                        <img src={image} alt={name} className={styles.imgcoin}/>
                    </div>
                </div>
                <div className={styles.right}>
                    <h2>{name}</h2>
                    <p>{price}$</p>
                    <p>{description}</p>
                    <div>
                        <button className={styles.button} onClick={() => {
                            addToCart({id})
                        }}>Investir</button>&nbsp;&nbsp;
                        <button className={styles.button} onClick={() => {
                            removeToCart({id})
                        }}>Retirer</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps({params}){
    const coin = coins.find(({id}) => id.toString() === params.coinsId)
    return {
        props: {
            coin
        }
    }
}

export async function getStaticPaths(){
    const paths = coins.map((p) => {
        const id = p.id.toString()
        return {
            params: {
                coinsId: id
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}