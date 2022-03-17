import React from 'react'
import { useState } from 'react'

type Props = {}

const ProductPage = (props: Props) => {
  const [products, setProducts] = useState<{ id: number, name: string, desc: string }[]>([
    { id: 1, name: "Product A", desc: "Mô tả A" },
    { id: 2, name: "Product B", desc: "Mô tả B" },
    { id: 3, name: "Product C", desc: "Mô tả C" }
  ]);
  return (
    <div className="App">
      <hr />
      <div className="container">
      <div className="row">
       {products.map(item =>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img src="http://placeimg.com/640/480/cats" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
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