import Head from 'next/head'
import styles from '../styles/Home.module.css'
import coins from '../cryptocoins.json'
import {useCart} from '../hooks/use-cart'
import Link from 'next/Link'

export default function Home() {
  const {addToCart} = useCart()

  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoCoins</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.banner}>
            <h1 className={styles.title}>
              CryptoCoins
            </h1>

            <p className={styles.description}>
              Bienvenue, soyez les premiers à investir dans la crypto du futur! <br/>
              Pour que vous ayez des résultats investissez 80% minimum de votre portefeuille!
            </p>
          </div>

          <ul className={styles.grid}>
            {
              coins.map(c => {
                const {id, image, name, description, price} = c;
                return (
                  <li key={id} className={styles.card}>
                    <Link href={`/coins/${id}`}>
                      <div>
                        <img src={image} alt={name} className={styles.imgcoin}/>
                        <h2>{name} &rarr; 1/{price}$</h2>
                      </div>
                    </Link>
                    <button className={styles.button} onClick={() =>
                      addToCart({id})
                    }>Investir</button>
                  </li>
                )
              })
            }
          </ul>
      </main>
    </div>
  )
}
