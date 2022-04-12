import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductType } from './types/product'
import NumberFormat from 'react-currency-format';
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
            <a href={`product/${item._id}`}><img src={item.img} /></a>
            <a href="">
              <h4><a href={`product/${item._id}`}>{item.name}</a></h4>
            </a>
            <p><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={''} /> vnd</p>
            <a className="btn btn-danger">BUY</a>
          </div>
        
        })}
      </div>
    </div>

  )
}
export default Homepage