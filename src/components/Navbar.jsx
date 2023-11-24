import './navbar.css'
import {Link} from "react-router-dom";
// more imports if required goes here

const NavBar = () => {

    // Here goes the handlebars if required

return (
    <nav id="navbar">
        <Link to="/"><img src="/images/planetaria-logo.png" alt="" /></Link>
        <p>Planetaria Music</p>
        <img src="/images/e-commerce.png" alt="carrito-ecomerce" />
        <img src="/images/navbar-filter.png" alt="navbar-filter"/>
        <img src="/images/navbar-button.png" alt="navbar-button"/>
    </nav>
)
}

export default NavBar;