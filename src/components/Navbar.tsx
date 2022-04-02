import React from 'react'
import { NavLink } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
  return (
      <ul id="MenuItems" className="p-2 flex flex-wrap content-center absolute right-5">
    <li className="text-lg py-2 px-4">
      <NavLink className="p-2" aria-current="page" to="/">Home</NavLink>
      </li>
    <li className="text-lg py-2 px-4">
    <NavLink className="p-2" to="/product">Product </NavLink>
      </li>
    <li className="text-lg py-2 px-4">
    <NavLink className="p-2" to="/Signin">Signin </NavLink>
      </li>
   </ul>
    
  )
}

export default Navbar