import React, { Fragment, useEffect } from 'react';
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from '../layout/MetaData.js';
import { clearErrors, getProduct } from '../../actions/productAction.js';
import {useSelector, useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader.js';
import toast from 'react-hot-toast';

const Home = () => {

  const dispatch = useDispatch();
  const {loading, error, products} = useSelector(state=>state.products);

  useEffect(() => {
    
    if (error) {
        toast.error(error);
        dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
        { loading ? <Loader /> 
        : <Fragment>
        <MetaData title="Ecommerce"/>

        <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
                <button>
                    Scroll
                </button>
            </a>
        </div>

        <h2 className='homeHeading'>Featured Products</h2>

        <div className='container' id='container'>
            
            { products && products.map( product => (
                <Product product={product}/>
            ))}

        </div>
    </Fragment>
    }
    </Fragment>
  )
}

export default Home