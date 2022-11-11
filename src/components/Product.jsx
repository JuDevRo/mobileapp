import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Product.css'


const Product = ({imgUrl, brand, model, price, id}) => {
    return(
        <div className='container-product-big'>
            <Link to={`/view/${id}`}>
            <div className='container-product'>
                <img className='img' src={imgUrl} alt="" />
                <div className='contain-info'>
                    <p>Marca: {brand}</p>
                    <p>Name: {model}</p>
                    <p>${price}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Product