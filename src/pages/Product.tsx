import React from 'react'
import { useState } from 'react'
import { ProductType } from './types/product'

type Props = {
  products: ProductType[]
}

const ProductPage = (props: Props) => {
  return (
    <div className="App">
      <hr />
      <h2>Sẳn phẩm</h2>
      <div className="container">
      <div className="row ">
       {props.products.map(item =>
            <div className="col">
              <div className="card" style={{ width: '23rem' }}>
              <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
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