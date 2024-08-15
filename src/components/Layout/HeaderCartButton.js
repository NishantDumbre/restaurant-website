import { FaShoppingCart } from "react-icons/fa";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const showCartHandler = () =>{
    props.onShowCart()
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span className={classes.icon}>
      <FaShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
