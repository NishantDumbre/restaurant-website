import { FaShoppingCart } from "react-icons/fa";
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context'
import { useContext } from "react";

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)

  let quantity = 0
  cartCtx.items.forEach((item) =>{
    quantity = quantity + item.quantity
  })

  const showCartHandler = () =>{
    props.onShowCart()
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span className={classes.icon}>
      <FaShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
