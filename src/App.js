import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, isCartIsShown] = useState(false)

  const showCartHandler = ()=>{
    isCartIsShown(true)
  }

  const hideCartHandler = () =>{
    isCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
