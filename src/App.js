import React, {useState} from "react";
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

export default function App() {





  const [category, setCategory] = useState('none');
  const [group, setGroup] = useState(1)
  const [cart, setCart] = useState([])


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

  
  
  const setCategoryHandler = (categorySelected) => {
      setCategory(categorySelected.name)
      setGroup(categorySelected.group)
  }

  const addToCartHandler = (itemSelected) => {
      setCart(cart => [...cart, itemSelected ] );
  }

  const clearCartHandler = () => {
    setCart([])
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
              <Cart cart={cart} clearCart={clearCartHandler} />
            </Route>
            <Route path='/sign-in'>
              <Login/>
            </Route>
            <Route path='/create-account'>
              <SignUp/>
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




