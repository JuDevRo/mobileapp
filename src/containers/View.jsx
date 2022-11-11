import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setBreadcrumb } from '../actions/index';
import axios from 'axios'

import '../styles/View.css'
import Breadcrumb from '../components/Breadcrumb'

const View = () => {

    //Redux
    const breadcrumb = useSelector((state) => state.breadcrumb)
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const idHash = window.location.pathname

    useEffect(() => {
        
        if(idHash != "/") {
            dispatch(setBreadcrumb(false))
        }
    }, [])

    //Redux

    const id = idHash.substring(6,27)

    

    const [details, setDetails] = useState([])
    const [length, setLength] = useState()
    const [colors, setColors] = useState()

    const [color, setColor] = useState("")
    const [memory, setMemory] = useState("")
    const [ide, setIde] = useState("")

    const api = axios.create({
        baseURL: 'https://front-test-api.herokuapp.com/',
        headers: 'Content-Type: application/json'
    })
    
    async function getDetails() {
        const {data} = await api('/api/product/' + id)
        
        setDetails(data)
        setLength(data.internalMemory.length)
        setColors(data.colors.length)

        setIde(data.id)
        setColor(data.colors[0])
        
        setMemory(data.internalMemory[0])
    }

    useEffect(() => {
        getDetails()
    }, [])



    //Logica de compra

    //Create Cart
    async function postCart(color = details.colors[0], memory = details.internalMemory[0]) {
        setIde(details.id)
        const {data, status} = await api.post('api/cart', ({id: ide, colorCode: color, storageCode: memory}),)
        console.log(data)
        if(status !==200) {
            console.log('Error')
            
            
        } else {
            console.log('Guardado en el carro')
            sessionStorage.setItem(ide.toString(), JSON.stringify({color, memory}))
            const long = sessionStorage.length
            dispatch(addToCart(long))
            console.log(cart)
        }
    }

    console.log(localStorage.length)

    //Logica de compra

    return (
        <div className='container-view-real'>
            <div className='container-breadcrumb'>
                <Breadcrumb view={breadcrumb} name={details.model} />
            </div>
        <div className='container-view'>
            <div className='image-container'>
                <img className='image' src={details.imgUrl} alt="" />
            </div>
            <div className='description'>
                <h2>Description</h2>
                <p className='brand'>Brand: {details.brand}</p>
                <p className='model'>Model: {details.model}</p>
                <p className='price'>Price: ${details.price}</p>
                <p className='cpu'>CPU: {details.cpu}</p>
                <p className='ram'>RAM: {details.ram}</p>
                <p className='os'>OS: {details.os}</p>
                <p className='displayResolution'>Display Resolution: {details.displayResolution}</p>
                <p className='battery'>Battery: {details.battery}</p>
                <p className='primaryCamera'>Camera: {details.primaryCamera}</p>
                <p className='displaySize'>Display Size: {details.displaySize}</p>
                <p className='weight'>Weight: {details.weight}</p>
            </div>
            <div className='actions'>
                <h2 className='actions-h2'>Actions</h2>
                <p className='actions-p'>Almacenamiento</p>
                {length === 1 ? 
                    <button onClick={() => setMemory(details.internalMemory[0])}>{details.internalMemory[0]}</button> 
                : ""
                }
                {length === 2 ? 
                    <div>
                        <button onClick={() => setMemory(details.internalMemory[0])}>{details.internalMemory[0]}</button>
                        <button onClick={() => setMemory(details.internalMemory[1])}>{details.internalMemory[1]}</button>
                    </div> 
                    : ""
                }
                {length === 3 ? 
                <div>
                    <button onClick={() => setMemory(details.internalMemory[0])}>{details.internalMemory[0]}</button>
                    <button onClick={() => setMemory(details.internalMemory[1])}>{details.internalMemory[1]}</button>
                    <button onClick={() => setMemory(details.internalMemory[2])}>{details.internalMemory[2]}</button>
                    </div> 
                    : ""
                }
                <p className='actions-p'>Colors</p>
                {colors === 1 ? 
                    <button onClick={() => setColor(details.colors[0])}>{details.colors[0]}</button> : ""
                }
                {colors === 2 ? 
                <div>
                    <button onClick={() => setColor(details.colors[0])}>{details.colors[0]}</button>
                    <button onClick={() => setColor(details.colors[1])}>{details.colors[1]}</button>
                    </div> 
                    : ""
                }
                {colors === 3 ? 
                <div>
                    <button onClick={() => setColor(details.colors[0])}>{details.colors[0]}
                    </button>
                    <button onClick={() => setColor(details.colors[1])}>{details.colors[1]}</button>
                    <button onClick={() => setColor(details.colors[2])}>{details.colors[2]}</button>
                </div> 
                : ""
                }
                <h2 className='actions-h2'>Añadir a la cesta</h2>
                <button onClick={() => postCart(color, memory)} className='cart'>Add to cart</button>
            </div>
        </div>
        </div>
    )
}

export default View