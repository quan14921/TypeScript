import React from 'react'
import Navbar from './Navbar'
import Search from './search'

type Props = {}

const Header2 = (props: Props) => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href="/"><img src="../../img/logo.png" width="125px" /></a>
                </div>
                <nav>
                <Navbar/>
                </nav>
            </div>
        </div>


    )
}

export default Header2