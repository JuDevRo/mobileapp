import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Breadcrumb.css'

const Breadcrumb = ({name, view}) => {
    const [hash, setHash] = useState("")
    

    useEffect(() => {
        if(view) {
            setHash("diferent")
        } else {
            setHash("/")
        }
        
    }, [window.location.pathname])

    const arrow = "/"

    console.log(window.location)
    return(
        <div className='container-breadcrumb'>
            {hash === "/" ? 
            <div className='container-arrow'>
                <Link to="/">
                <button className='button button-house'>Home</button>
                </Link>
            </div> 
                : ""}
            {hash != "/" ?
             <div className='container-arrow'>
                <Link to="/">
                    <button className='button button-home'>Home</button>
                </Link>
                <p className='arrow'>{arrow}</p>
                <button className='button button-name'>{name}</button>
             </div> 
             : 
             ""}
        </div>
    )
}

export default Breadcrumb