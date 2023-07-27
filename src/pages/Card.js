import { CartCard } from "../component/CartCard"
import { useTitle } from "../hooks/useTitle"
import { useCart } from "../context/CartContext"


export const Card = ({title}) => {
  const {total,cartList} = useCart()
  
  useTitle(title)

  // const products = [
  //   {"id":1,"name":"Apple watch","price":25,"image":"/assets/watch.jpg"},
  //   {"id":2,"name":"Sony TV","price":200,"image":"/assets/sonytv.jpg"},

  // ]

  return (
    <section className="cart">
      <h1>Cart items :{cartList.length} / ${total}</h1>
      {
        cartList.map((product)=>(
          <CartCard key={product.id} product={product}/>
        ))
      }
    </section>
  )
}
