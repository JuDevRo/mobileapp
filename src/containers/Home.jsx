import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBreadcrumb, setSearch } from '../actions/index';
import '../styles/Home.css'
import Breadcrumb from '../components/Breadcrumb'

import Products from '../components/Products'

const Home = () => {
    //Redux
    const breadcrumb = useSelector((state) => state.breadcrumb)
    const search = useSelector((state) => state.search)
    const dispatch = useDispatch()
    console.log(search)

    const idHash = window.location.pathname

    useEffect(() => {
        
        if(idHash === "/") {
            dispatch(setBreadcrumb(true))
        }
    }, [window.location.pathname])
    
    return(
        <div className='contenedor-home'>
            <Breadcrumb view={breadcrumb}/>
            <div className='container-input'>
                <input className='input' type="text" placeholder='Busca el nombre de tu movil aquí...' name="" id="" onChange={e => dispatch(setSearch(e.target.value))} />
            </div>
            <div className='container'>
                <Products />
            </div>
        </div>
        
    )
}

export default Home