import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ProductType } from './types/product'

type Props = {
  products: ProductType[]
}

const Homepage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="small-container">
      <h2 className="title text-4xl">Sản Phẩm Nổi Bật</h2>
      <div className="row">
        {props.products?.map(item => {
          return <div className="col-4">
            {/* <a href=""><img src={item.img} /></a> */}
            <NavLink className="p-2" to="/product/2"><img src={item.img}/></NavLink>
            <a href="">
              <h4>{item.name}</h4>
            </a>
            <p>{item.price}</p>
            <a href="#" className="btn btn-primary">BUY</a>
          </div>

        })}
      </div>
    </div>

  )
}
export default Homepage