import React, {useState, useEffect} from 'react';
import './Product.css';

const Product = ({product, loading}) => {

    if(!loading){
    return (
    <div className='product'>
        <h3>{product.title}</h3>
        <img className='productImage' src={product.image} alt={product.title} />
        <div className='productDesc'>
            <span className='price'>Price: {product.price}</span>
            <br />
            <span className='rating'>Rating: {product.rating.rate}</span>
            <br />
            <span className='votes'>Votes: {product.rating.count}</span>
            <br />
            <p className='description'>{product.description}</p>
        </div>
    </div>
    )}
    
    else{
        return(
        <div className='product loading'>
            <h3>Loading...</h3>
        </div>
        )}
}

export default Product;