import React from 'react'
import Navbar from './Navbar'
import Search from './search'

type Props = {}

const Header = (props: Props) => {
  return (
  <div className="container">
    <div className="navbar ">
      
        <div className="logo">
          <a href="/"><img src="../../img/logo-white.png" width="150px" /></a>
        </div>
        <nav className="p-2 flex flex-wrap">
        <Navbar/>
        
        <div className="absolute right-5">
          <span id="account" className="text-black" />
        </div>
      </nav>
    </div>
    <div className="row">
      <div className="col-2">
        <h1>Give Your Workout<br /> A New Style!</h1>
        <p>Success ins't always about greatness. It's about
          consistency. Consistent <br />hard work gains success. Greatness
          will come. </p>
        <a className="btn">MUA NGAY →</a>
      </div>
      <div className="col-2">
        <img src="../../img/image1.png" />
      </div>
    </div>
</div>


  )
}

export default Header