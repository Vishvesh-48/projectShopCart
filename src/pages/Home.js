import { ProductCard } from "../component/ProductCard"
import { useTitle } from "../hooks/useTitle"

export const Home = ({title}) => {

  useTitle(title)

    const products=[
        {"id":101,"name":"Apple Watch","price":25,"image":"/assets/watch.jpg"},
        {"id":102,"name":"Sony Tv","price":200,"image":"/assets/sonytv.jpg"},
        {"id":103,"name":"Iphone Se","price":90,"image":"/assets/iphonse.jpg"},
        {"id":104,"name":"Computer Mouse","price":20,"image":"/assets/mouse.jpg"},
        {"id":105,"name":"Laptop","price":85,"image":"/assets/laptop.jpg"},
        {"id":106,"name":"whirlpool 517","price":50,"image":"/assets/frig.jpg"},


    ]

  return (
    <>
      <main>
        <section className="products">
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
        </section>
      </main>
    </>
  )
}
