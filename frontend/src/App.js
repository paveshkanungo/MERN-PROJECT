import './App.css';
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Switch } from '@mui/material';
import WebFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile";
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping'
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Payment' ; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess'
import MyOrders from './component/Order/MyOrders.js'
import OrderDetails from './component/Order/OrderDetails.js'
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";

function App() {

  const {isAuthenticated, user} = useSelector(state=>state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");


  async function getStripeApiKey() {
    try{
        const {data} = await axios.get("/api/v1/stripeapikey");
        setStripeApiKey(data.stripeApiKey);
    }
    catch(error){
      console.error("Error fetching Stripe API key:", error); 
    }
  }

  useEffect( () => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    }); 

      store.dispatch(loadUser());
      getStripeApiKey();

  }, []);

  return (
    <Router>
    <Header />

    {isAuthenticated && <UserOptions user={user}/>}

    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/product/:id' element={<ProductDetails />} />
    <Route exact path='/products' element={<Products />} />
    <Route exact path='/products/:keyword' element={<Products/>} />
    <Route exact path='/search' element={<Search />} />
    <Route exact path='/login' element={<LoginSignUp />} /> 
    <Route exact path='/password/forgot' element={<ForgotPassword/>} />
    <Route exact path='/password/reset/:token' element={<ResetPassword/>} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/contact' element={<Contact />} />

    <Route exact path='/cart' element={<Cart/>} />

    {/* {isAuthenticated && 
      <Route exact path='/account' element={<Profile />} />
    } */}
    
    </Routes>

    <ProtectedRoute exact path='/account' component={Profile} />
    <ProtectedRoute exact path='/me/update' component={UpdateProfile} />
    <ProtectedRoute exact path='/password/update' component={UpdatePassword} />
    <ProtectedRoute exact path='/shipping' component={Shipping} />
    <ProtectedRoute exact path='/orders' component={MyOrders} />


    
    {stripeApiKey && (
    <Elements stripe={loadStripe(stripeApiKey)}>
    <ProtectedRoute exact path='/process/payment' component={Payment} />
    </Elements>
    )}

    <ProtectedRoute exact path='/success' component={OrderSuccess} />

    <ProtectedRoute exact path='/order/confirm' component={ConfirmOrder} />
    {/* <ProtectedRoute exact path='/order/:id' component={OrderDetails} /> */}

    <Footer />
    </Router>
  );
}

export default App;
