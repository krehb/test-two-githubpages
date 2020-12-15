import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Store from './components/store/store';
import Nav from './components/nav/nav';
import Canine from './pages/canine';
import Equine from './pages/equine';
import Home from './pages/home';
import { AuthProvider } from './config/Auth';
import PrivateRoute from './config/PrivateRoute';
import SignUp from './config/SignUp';
import Login from './config/Login';
import products from './products';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/payment/success';

export default function App() {





  const [category, setCategory] = useState('none');
  const [group, setGroup] = useState(1)
  const [cart, setCart] = useState([])
  const [priceTotal, setPriceTotal] = useState(0);


  const categories = [
      {
        name: 'Target Canine Progesterone',
        group: 1,
        type: 'Canine',
        id: 124,
      },
      {
        name: 'Equine IgG',
        group: 5,
        type: 'Equine',
        id: 123,
      },
      {
        name: 'Equine SAA',
        group: 6,
        type: 'Equine',
        id: 154,
      },        
      {
          name: 'Canine Pregnancy Relaxin',
          group: 3,
          type: 'Canine',
          id: 224,
      },
      {
          name: 'Equine P4 Quick Progesterone',
          group: 4,
          type: 'Equine',
          id: 824,
      },
      {
          name: 'Canine Quick P4 Progesterone',
          group: 2,
          type: 'Canine',
          id: 924,
      }
  ]

  useEffect(() => {
    totalPriceHandler();
  },);
  
  const setCategoryHandler = (categorySelected) => {
      setCategory(categorySelected.name)
      setGroup(categorySelected.group)
  }

  const addToCartHandler = (itemSelected) => {

    setCart(cart => [...cart, itemSelected ] );

    cart.forEach(item => {
      if(item.id === itemSelected.id){
        let newDouble = {
          title: item.title,
          subtitle: item.subtitle,
          qty: item.qty + 1,
          img: item.img,
          price: item.price,
          test: item.test,
          id: item.id
        }
        setCart(cart.filter(item => item.id !== itemSelected.id))
        setCart(cart => [...cart, newDouble ] );
      }
    });



  }

  const clearCartHandler = () => {
    setCart([])
  }

  const removeItemHandler = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const totalPriceHandler = () => {
    const newGroup = [0]
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    cart.forEach(item => {
        newGroup.push(item.price * item.qty)
    });
    setPriceTotal(newGroup.reduce(reducer))
  }


  return (
    <AuthProvider>
      <Router>
        <div>
          <Nav cart={cart} />
          <Switch>
            <Route path="/canine">
              <Canine />
            </Route>
            <Route path="/equine">
              <Equine />
            </Route>
            <Route path="/store">
              <Store className='store'
              products={products}
              group={group} 
              categories={categories} 
              setCategoryHandler={setCategoryHandler} 
              category={category} 
              addToCartHandler={addToCartHandler} />
            </Route>
            <Route path='/cart' >
              <Cart cart={cart} clearCart={clearCartHandler} setPriceTotal={setPriceTotal} priceTotal={priceTotal} removeItemHandler={removeItemHandler} />
            </Route>
            <Route path='/checkout' >
              <Checkout cart={cart} priceTotal={priceTotal} />
            </Route>
            <Route path='/sign-in'>
              <Login/>
            </Route>
            <Route path='/create-account'>
              <SignUp/>
            </Route>
            <Route path='/success' >
              <Success setCart={setCart} />
            </Route>
            <Route exact path='/' >
              <Home/>
            </Route>
            {/* <PrivateRoute exact path='/' component={Home} /> */}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}




