import React, { useEffect } from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useLocation } from 'react-router-dom';
import all_product from '../Assets/all_product';
import { KeyboardCommandKeyOutlined } from '@mui/icons-material';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
//const ProductDisplay = (props) => {
//const {product}=props;
const ProductDisplay=()=>{
  const location=useLocation();
  const res=location.state&&location.state;
  console.log(res)

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
   <>
   <Navbar/>
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={all_product[res-1].image} ></img>
            <img src={all_product[res-1].image} ></img>
            <img src={all_product[res-1].image} ></img>
            <img src={all_product[res-1].image} ></img>
            
            
        </div>
        <div className='productdisplay-img'>
            <img src={all_product[res-1].image} className='productdisplay-main-img'></img>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{all_product[res-1].name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon} ></img>
            <img src={star_icon} ></img>
            <img src={star_icon} ></img>
            <img src={star_icon} ></img>
            <img src={star_dull_icon} ></img>
            {/* <p>{all_product[res-1].new_price}</p> */}
            <p>(100)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${all_product[res-1].old_price}</div>
          <div className="productdisplay-right-price-new">${all_product[res-1].new_price}</div>
        </div>
        <div className="productdisplay-right-description">
       
Then we will make the back-end of the website using express, node js, mongo db and react js. Where we will create the APIs to add product, display product, update product, update cart items and login registration API. We will also make the admin panel of our eCommerce website to add product, update product on our e-commerce website.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <button>Add to Card</button>
        <p className='productdisplay-right-category'><span>Category :</span> Women,T-Shirt,Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
      </div>
    </div>
    <Footer/>
 </>  
  )
}

export default ProductDisplay

