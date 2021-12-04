import {useState, createContext, useContext, useEffect} from 'react'
import coins from '../cryptocoins.json'

const defaultCart = {
    coins: {}
}

export const CartContext = createContext()

export function useCartState() {
    const [cart, updateCart] = useState(defaultCart)

    useEffect(() => {
      const stateFromStorage = window.localStorage.getItem('coincart')
      const data = stateFromStorage && JSON.parse(stateFromStorage)
      if(data){
        updateCart(data)
      }
    }, []);

    useEffect(() => {
      const data = JSON.stringify(cart)
      window.localStorage.setItem('coincart', data)
    }, [cart]);

    const cartItems = Object.keys(cart.coins).map(key => {
        const coin = coins.find(({id}) => `${id}` === `${key}`)
        return {
            ...cart.coins[key],
            pricePerItem: coin.price,
            name: coin.name,
            description: coin.description,
            image: coin.image
        }
    })

    const subTotal = cartItems.reduce((acc, {pricePerItem, quantity}) => {
        return acc + (pricePerItem * quantity)
    }, 0)
    
    const totalItems = cartItems.reduce((acc, {quantity}) => {
        return acc + quantity
    }, 0)
    
    const addToCart = ({id} = {}) => {
        updateCart(prev => {
            let cartState = JSON.parse(JSON.stringify(prev));
            // let cartState = {...prev} // PB duplicate coin
            if(cartState.coins[id]){
                cartState.coins[id].quantity = cartState.coins[id].quantity + 1;
            } else {
                cartState.coins[id] = {
                    id,
                    quantity : 1
                }
            }
            return cartState
        })
    }

    const removeToCart = ({id} = {}) => {
        updateCart(prev => {
            if (!prev.coins[id]) return prev;
            let cartState = JSON.parse(JSON.stringify(prev));
            if(cartState.coins[id] && cartState.coins[id].quantity > 1){
                cartState.coins[id].quantity = cartState.coins[id].quantity - 1;
            } else {
                cartState.coins[id] = {
                    id,
                    quantity : 0
                }
            }
            return cartState
        })
    }

    return {
        cart,
        // updateCart,
        subTotal,
        totalItems,
        cartItems,
        addToCart,
        removeToCart
    }
}

export function useCart() {
    const cart = useContext(CartContext)
    return cart
}