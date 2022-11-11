import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import axios from 'axios'
import '../styles/Products.css'

import Product from '../components/Product'

const Products = () => {
    //redux
    const search = useSelector((state) => state.search)
    //redux
    const [mobiles, setMobiles] = useState([])
    const [filterMobile, setFilterMobile] = useState([])
    const api = axios.create({
        baseURL: 'https://front-test-api.herokuapp.com/'
    })
    //const a = "palo"
    async function getMobiles() {
        const {data} = await api('/api/product')
        console.log(data)
        setMobiles(data)
    }
    
    const handleSearch = () => {
        let result = [];
        result = mobiles.filter((data) => {
        return data.brand.search(search)  && data.model.search(search) != -1;
        });
        setFilterMobile(result);    
    }
    console.log(filterMobile)

   

    useEffect(() => {
        getMobiles()
        console.log('a')
    }, [])

    useEffect(() => {
        handleSearch()
    }, [search])
    
    console.log(search)

    return(
        <div className='container-products'>
                {search != "" ? 
                <div className='ac'>
                    {filterMobile.map((mobile) => (
                        <Product imgUrl={mobile.imgUrl} brand={mobile.brand} model={mobile.model} price={mobile.price} key={mobile.id} id={mobile.id} />
                    ))}
                </div> :
                <div className='ac'>
                    {mobiles.map((mobile) => (
                    <Product imgUrl={mobile.imgUrl} brand={mobile.brand} model={mobile.model} price={mobile.price} key={mobile.id} id={mobile.id} />
                ))}
                </div>
                }
        </div>
    )
}

export default Products