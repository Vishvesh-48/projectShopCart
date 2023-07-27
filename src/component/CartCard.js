import { useCart } from "../context/CartContext"
import "./cardcard.css"

export const CartCard = ({product}) => {

  const {removeCart} = useCart()

  return (
    <div className='cartCard'>
      <img src={product.image} alt=''></img>
      <p className='productName'>{product.name}</p>
      <p className='productPrice'>${product.price}</p>
      <button onClick={()=>removeCart(product)}>Remove</button>
    </div>
  )
}
