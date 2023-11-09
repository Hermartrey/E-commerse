import {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

// let count = 0
const Navbar = () => {
    const [menu, setMenu] = useState("shop")

    const listItem = [
        {
            id: 0,
            category: 'shop',
            path: "/", 
        },
        {
            id: 1, 
            category: 'men',
            path: "/men"

        },
        {
            id: 2, 
            category: 'women',
            path: "/women" 
        },
        {
            id: 3,
            category: 'kids',
            path: "/kids"
        }
    ]

    const navbarMenu = (category) =>{
        setMenu(category);
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="org logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                {listItem.map((item)=>{return (
                <li onClick={()=>{navbarMenu(item.category)}} key={item.id}>
                    <Link className="link" to={item.path}>
                        {item.category}
                    </Link>
                    {/* <Link className="link" to={item.id == 0? `/`:`/${item.category}`}>
                        {item.category}
                    </Link> */}
                    {menu == item.category? <hr/>:<></>}</li>
                )})}
                
            </ul>
            <div className="nav-login-cart">
                <Link className="link" to='/login'>
                    <button>login</button>
                </Link>
                <Link className="link" to='/cart'>
                    <img src={cart_icon} alt="cart-icon" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar