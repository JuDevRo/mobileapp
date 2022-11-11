import React from 'react'
import Header from './Header'

const Layout = ({children, ruta}) => {
    return(
        <div>
            <Header ruta={ruta}/>
                {children}
        </div>
    )
}

export default Layout