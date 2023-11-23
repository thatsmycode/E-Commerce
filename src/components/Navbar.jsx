import './navbar.css'
import {Link} from "react-router-dom";
// more imports if required goes here

const NavBar = () => {

    // Here goes the handlebars if required

return (
    <nav id="navbar">
        <Link to="/"><img src="../public/images/planetaria-logo.png" alt="" /></Link>
        <p>Planetaria Music</p>
        <img src="../public/images/e-commerce.png" alt="carrito-ecomerce" />
        <img src="../public/images/navbar-filter.png" alt="navbar-filter"/>
        <img src="../public/images/navbar-button.png" alt="navbar-button"/>
    </nav>
)
}

export default NavBar;