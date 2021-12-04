import '../styles/globals.css'
import {CartContext, useCartState} from '../hooks/use-cart'
import Nav from '../components/Nav'
import {AuthContext} from '../contexts/user-context'
import {useState, useEffect} from 'react'
import RegisterForm from './registerForm'

function MyApp({ Component, pageProps }) {
  const cart = useCartState()
  const [authState, setAuthState] = useState({username:''})

  useEffect(() => {
    const user = localStorage.getItem('username')
    setAuthState({username: user})
  }, [])

  return (
    <AuthContext.Provider value={{authState, setAuthState}}>
      {
        authState.username !== null ?
        <CartContext.Provider value={cart}>
          <Nav />
          <Component {...pageProps} />
        </CartContext.Provider> :
        <RegisterForm />
      }
    </AuthContext.Provider>
  )
}

export default MyApp