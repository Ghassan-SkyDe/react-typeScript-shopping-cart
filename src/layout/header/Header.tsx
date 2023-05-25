import "./style.css";
import { Link } from "react-router-dom";
import { useActions } from "../../context/ActionsContext";
import { useShoppingCart } from "../../context/shoppingCartContext";

const Header = () => {
  const { isDark, dispatch } = useActions();
  const handleToggleMode = () => dispatch({type:'TOGGLE_MODE'});
  const handleToggleSideCart = () => dispatch({type: "TOGGLE_SIDE_CART"});
  const { getItemsCount } = useShoppingCart();
  return (
    <header className="header">
        <div className="header__content">
            <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} onClick={handleToggleMode}></i>
            <nav className='header__nav'>
              <Link to="/" className='header__nav--link'>Home</Link>
              <Link to="/store" className='header__nav--link'>Store</Link>
              <Link to="/about" className='header__nav--link'>About</Link>
            </nav>
            <div onClick={() => handleToggleSideCart()} className="header__content--cart">
              <i className='bx bxs-cart-add' ></i>
              <span>{getItemsCount()}</span>
            </div>
        </div>
      </header>
  )
}

export default Header;