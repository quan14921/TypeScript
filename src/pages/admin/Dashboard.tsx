import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand mb-0 h1" href="#">Dashboard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/admin/product">Product </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/admin/user">User </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/admin/category">Category </NavLink>
        </li>
      </ul>
      

    </div>
   
  </div>
   
</nav>


  )
}

export default Dashboard