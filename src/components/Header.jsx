import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import '../styles/Header.css'


const Header = () => {
    const cart = useSelector((state) => state.cart)

    return(
        <div className='container-header'>
            <div className='container-title'>
                <Link to="/">
                    <h1 className='container-h1'>MobileApp</h1>
                </Link>
                <p className='container-p'>cart</p>
                <p className='cuantity'>{cart}</p>
            </div>
        </div>
    )
}

export default Header