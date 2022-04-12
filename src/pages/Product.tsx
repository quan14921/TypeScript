import React, { useEffect } from 'react'
import { useState } from 'react'
import { ProductType } from './types/product'
import NumberFormat from 'react-currency-format';
import { listcate } from '../api/category';
import { CategoryType } from './types/category';
import { useParams } from 'react-router-dom';
import Categorynav from '../components/Categorynav';
type Props = {
  products: ProductType[]

}


const ProductPage = (props: Props) => {
    
  return (
    <div className="App">
      <Categorynav/>
      <h2>Sẳn phẩm</h2>
      <div className="container">

        <div className="row ">
          {props.products.map(item =>
            <div className="col">
              <div className="card" style={{ width: '23rem' }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><a href={`product/${item._id}`}>{item.name}</a></h5>
                  <h3 className="card-title"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={''} /> vnd</h3>
                  <a href="#" className="btn btn-primary">BUY</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  )
}
export default ProductPage