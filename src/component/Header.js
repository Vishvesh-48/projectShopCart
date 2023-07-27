import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"
import { useCart } from "../context/CartContext"
import "./header.css"
export const Header = () => {

    const {cartList} = useCart()

  return (
   <>
    <header>
        <Link to="/" className="logo">
            <img src={Logo} alt="logo site"></img>
            <span>Shopping App</span>
        </Link> 
        <nav className="navigation">
            <NavLink to="/" className="link" end>Home</NavLink>
            <NavLink to="/card" className="link">Card</NavLink>
        </nav>
        <Link to="/card" className="items">
            <span>Card: {cartList.length}</span>
        </Link>
    </header>
   </>
  )
}
