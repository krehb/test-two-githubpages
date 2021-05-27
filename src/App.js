import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import firebase from 'firebase';




//pages
import Home from './pages/home';
import HomePar from './pages/homeParallax'

import Canine from './pages/canine/canine';
import Progesterone from './pages/canine/progestrone/progestrone';
import QuickP4Canine from './pages/canine/progestrone-cube/quickp4';
import Relaxin from './pages/canine/relaxin/relaxin';

import Equine from './pages/equine/equine';
import IgG from './pages/equine/igg/igg';
import QuickP4Equine from './pages/equine/quickp4/quickp4';
import Saa from './pages/equine/saa/saa';

import AccountInfo from './pages/AccountPage/accountInfoPage';

import EmailTest from './pages/EmailTest';

//store
import StoreFront from './pages/store/front'
import StoreDeck from './pages/store/deck'
import ProductInfo from './pages/store/product-info'

//components
import Store from './components/store/store';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/payment/success';


//config
import { AuthProvider } from './config/Auth';
import SignUp from './config/SignUp';
import Login from './config/Login';
import ForgetPassword from './pages/AccountPage/forgetPassword';

import app from './config/base'
import products from './products';




export default function App() {

  // firebase requirements
  const database = firebase.database();
  const ref = database.ref('products');





  // firebase products array for showing either product is in stock or not
  const [instockArray, setInstockArray] = useState([]);

  const [category, setCategory] = useState('none');
  const [group, setGroup] = useState(1)
  const [cart, setCart] = useState([])
  const [priceTotal, setPriceTotal] = useState(0);
  

  //side nav state
  const [canine, setCanine] = useState(false);
  const [igg, setIgg] = useState(false);
  const [saa, setSaa] = useState(false);
  const [equick, setEQuick] = useState(false);
  const [equine, setEquine] = useState(false);

  const passingData = {
      canine: canine,
      setCanine: setCanine,

      equine: equine,
      setEquine: setEquine,
      igg: igg,
      setIgg: setIgg,
      saa: saa,
      setSaa: setSaa,
      equick: equick,
      setEQuick: setEQuick,
  }






  useEffect(() => {
    ref.on('value', gotDataHandler, errDataHandler);


  },[])

  const gotDataHandler = (data) => {
    const dataBookings = data.val();
    const keys = Object.keys(dataBookings);
    for (let i = 0; i < keys.length; i ++){
      let k = keys[i]
      const list = dataBookings[k]
      setInstockArray(instockArray => [...instockArray, list]);
    }
  }
  const errDataHandler = (err) => {
    console.log('Error!')
    console.log(err)
  }


  const categories = [
      {
        name: 'Target Canine Progesterone',
        group: 1,
        type: 'Canine',
        class: 'img-cat-1',
        id: 124,
        img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/store-top-img/dog-with-puppy-300x200.jpg',
        pathname: '/store/canine-progesterone',
        highlight: ['9 minute results', 'On-site testing', 'One Year shelf-life', 'Cut your costs', 'Filter format']
      },      
      {
          name: 'Canine Pregnancy Relaxin',
          group: 3,
          type: 'Canine',
          class: 'img-cat-4',
          id: 224,
          img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/store-top-img/vets-use-relaxin-pro-300x200.jpg',
          pathname: '/store/canine-relaxin',
          highlight: ['Detect dog pregnancy earlier', 'Accurate results in minutes', 'Reliable and specific', 'Cut your costs', 'Get a head start on nutritional supplements', 'Indicates loss in pregnancy']
      },
      {
        name: 'Canine Quick P4 Progesterone',
        group: 2,
        type: 'Canine',
        class: 'img-cat-6',
        id: 924,
        img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/store-top-img/p-5-shutterstock_205679125-300x200.jpg',
        pathname: '/store/canine-quick-p4',
        highlight: ['10 minute number results with optical cube reader', 'On-site testing', 'Visual not fluorescence technology', 'Result lines are visible to the eye', 'Room temperature stable', 'Long shelf life stability']
      },
      {
        name: 'Equine P4 Quick Progesterone',
        group: 4,
        type: 'Equine',
        class: 'img-cat-5',
        id: 824,
        img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/store-top-img/two-ladies-with-horse-300x200.jpg',
        pathname: '/store/equine-progesterone',
        highlight: ['10-minute number results with optical cube reader', 'On-site testing','Visual, not fluorescence technology', 'Room temperature stable', 'Long shelf life stability']
    },
      {
        name: 'Equine IgG',
        group: 5,
        type: 'Equine',
        class: 'img-cat-2',
        id: 123,
        img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/store-top-img/foal-standing-beside-horse-500x412.jpg',
        pathname: '/store/equine-igg',
        highlight: ['On-site, 10-minute results', 'Easy to use and interpret','Test & Treat immediately','No refrigeration required','Accurate & Reliable over Long shelf life (2+ years)']
      },
      {
        name: 'Equine SAA',
        group: 6,
        type: 'Equine',
        class: 'img-cat-3',
        id: 154,
        img: 'https://storage.googleapis.com/www.inputllc.net/TargetVet%20PDF%20instructions/store-top-img/checking-horse-leg-injury-for-infection-300x200.jpg',
        pathname: '/store/equine-saa',
        highlight: ['10 minute number results with optional optical Cube reader', 'On-site testing', 'Result lines are visible to the eye','Room temperature stable', 'Long shelf life stability']
      },  


  ]

  useEffect(() => {
    totalPriceHandler();
  },);
  
  const setCategoryHandler = (categorySelected) => {

    if (categorySelected.name === 'none'){
      setCategory('none')
    } else {
      setCategory(categorySelected.name)
      setGroup(categorySelected.group)
    }
  }

  const addToCartHandler = (itemSelected) => {


    let newProduct = {
      title: itemSelected.product.title,
      subtitle: itemSelected.product.subtitle,
      qty: itemSelected.productQty ,
      img: itemSelected.product.img,
      price: itemSelected.product.price,
      test: itemSelected.product.test,
      id: itemSelected.product.id,
      icon: itemSelected.product.icon
    }

    setCart(cart => [...cart, newProduct ] );

    cart.forEach(item => {
      if(item.id === itemSelected.product.id){
        let newDouble = {
          title: item.title,
          subtitle: item.subtitle,
          qty: item.qty + itemSelected.productQty,
          img: item.img,
          price: item.price,
          test: item.test,
          id: item.id,
          icon: itemSelected.icon
        }
        setCart(cart.filter(item => item.id !== itemSelected.product.id))
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

  const [parallaxDom, setParallaxDom] = useState('')
  let history = useHistory();
  function handleClick() {
    history.push(`/${parallaxDom}`);
  }
  const parallaxRouter = (e) => {
    console.log('parallax router was clicked',e)
    history.push("/store");
    // setParallaxDom(e)
    // handleClick();
    window.scroll(0,0)
  }






  return (
    <AuthProvider>
      <Router>
        <div>
          <Nav cart={cart} setCategory={setCategory} setCart={setCart} />
          <Switch>
            <Route path="/canine">
              <Canine passingData={passingData}/>
            </Route>
            <Route path="/canine-progesterone">
              <Progesterone passingData={passingData} setCategoryHandler={setCategoryHandler} setGroup={setGroup} />
            </Route>
            <Route path="/canine-quickp4">
              <QuickP4Canine passingData={passingData} setCategoryHandler={setCategoryHandler} setGroup={setGroup} />
            </Route>
            <Route path="/canine-relaxin">
              <Relaxin passingData={passingData} setCategoryHandler={setCategoryHandler} setGroup={setGroup} />
            </Route>
            <Route path="/equine">
              <Equine passingData={passingData}/>
            </Route>
            <Route path="/equine-igg">
              <IgG passingData={passingData} setCategoryHandler={setCategoryHandler} setGroup={setGroup} />
            </Route>
            <Route path="/equine-saa">
              <Saa passingData={passingData} setCategoryHandler={setCategoryHandler}  setGroup={setGroup}/>
            </Route>
            <Route path="/equine-quickp4">
              <QuickP4Equine passingData={passingData} setCategoryHandler={setCategoryHandler} setGroup={setGroup} />
            </Route>
            <Route path="/test">
                <EmailTest/>
            </Route>
            <Route path="/store" exact >
              <Store className='store'
              products={products}
              group={group} 
              categories={categories} 
              setCategoryHandler={setCategoryHandler} 
              category={category} 
              addToCartHandler={addToCartHandler}
              cart={cart}
              setCart={setCart}
              instockArray={instockArray} />
            </Route>
            <Route  path="/store/gallery" exact>
              <StoreFront               categories={categories} 
              setCategoryHandler={setCategoryHandler}  />
            </Route>
            <Route path="/store/:id">
              <StoreDeck               
              products={products}
              group={group} 
              categories={categories} 
              setCategoryHandler={setCategoryHandler} 
              category={category} 
              addToCartHandler={addToCartHandler}
              cart={cart}
              setCart={setCart}
              instockArray={instockArray}
               />
            </Route>
            <Route path="/product-info/:id">
              <ProductInfo addToCartHandler={addToCartHandler} />
            </Route>
            <Route path='/cart' >
              <Cart cart={cart} clearCart={clearCartHandler} cart={cart} setCart={setCart} setPriceTotal={setPriceTotal} priceTotal={priceTotal} removeItemHandler={removeItemHandler} />
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
            <Route path='/forget-password' >
              <ForgetPassword/>
            </Route>
            <Route path='/success' >
              <Success setCart={setCart} />
            </Route>
            <Route path='/account' >
              <AccountInfo cart={cart} clearCart={clearCartHandler} cart={cart} setCart={setCart} setPriceTotal={setPriceTotal} priceTotal={priceTotal} removeItemHandler={removeItemHandler} />
            </Route>
            <Route exact  path='/parallax' >
              <HomePar parallaxRouter={parallaxRouter} passingData={passingData}/>
            </Route>
            <Route exact  path='/' >
              <Home passingData={passingData}/>
            </Route>
            {/* <PrivateRoute exact path='/' component={Home} /> */}
          </Switch>
          <Footer category={category} />
        </div>
      </Router>
    </AuthProvider>
  );
}




