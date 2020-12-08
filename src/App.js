import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Store from './components/store'
import Nav from './components/nav';
import Canine from './pages/canine';
import Equine from './pages/equine';
import Home from './pages/home';
import { AuthProvider } from './config/Auth';
import PrivateRoute from './config/PrivateRoute';
import SignUp from './config/SignUp';
import Login from './config/Login';



const products = [
  {
      title: 'Target Progesterone',
      subtitle: 'Visual Canine Ovulation Timing Kit',
      stripeCode: ['price_1HvsdfQBWCWoh7chuJQxv19c5zB','price_1HvsdfQBWCWoh7chuJQxv19c5zB'],
      price: [90,146],
      img: 'https://www.targetvet.com/wp-content/uploads/2019/11/a-Target-Visual-600x491.jpg',
      type: 'canine',
      cube: null,
      test: [6,12],
      group: 2,
  },
  {
    title: 'Blood Collection',
    subtitle: 'for Target Progesterone Kits',
    stripeCode: ['price_1HvsdfQBWCWoh7chuJQxv19c5zB','price_1HvsdfQBWCWoh7chuJQxv19c5zB'],
    price: [2,4],
    img: 'https://www.targetvet.com/wp-content/uploads/2019/12/blood-collection-tubes-2.jpg',
    type: 'canine',
    cube: null,
    test: [6,12],
    group: 2,
},  {
  title: 'Quick P4 / Cube Quantitative',
  subtitle: 'Canine Ovulation Timing Only Kit',
  stripeCode: ['price_1HvsdfQBWCWoh7chuJQxv19c5zB','price_1HvsdfQBWCWoh7chuJQxv19c5zB'],
  price: [100,180],
  img: 'https://www.targetvet.com/wp-content/uploads/2019/10/CB-Quick-P4-1-600x450.jpg',
  type: 'canine',
  cube: true,
  test: [5,10],
  group: 2,
},  {
  title: 'Relaxin Pro',
  subtitle: 'Canine Pregnancy Kit',
  stripeCode: ['price_1HvsdfQBWCWoh7chuJQxv19c5zB','price_1HvsdfQBWCWoh7chuJQxv19c5zB'],
  price: [50,95],
  img: 'https://www.targetvet.com/wp-content/uploads/2019/11/c-Relaxin-Pro-600x490.jpg',
  type: 'canine',
  test: [2,5],
  group: 2,
},
]


export default function App() {



  return (
    <AuthProvider>
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route path="/canine">
              <Canine />
            </Route>
            <Route path="/equine">
              <Equine />
            </Route>
            <Route path="/store">
              <Store className='store' products={products} />
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/signup'>
              <SignUp/>
            </Route>
            <Route exact path='/' >
              <Home/>
            </Route>
            <PrivateRoute exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}




