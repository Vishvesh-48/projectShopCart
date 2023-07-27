import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"
import "./productcard.css"
export const ProductCard = ({ product }) => {

  const { addToCart, removeCart, cartList } = useCart()
  const { id, name, price, image } = product
  const [isincart, setIsInCart] = useState(false)

  useEffect(() => {
    const productIsInCart = cartList.find(cart => cart.id === id)

    if (productIsInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }

  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt={name}></img>
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isincart ? (<button className="remove" onClick={() => removeCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Card</button>)}

      </div>
    </div>
  )
}
