import React from 'react'
import { useState } from 'react'

type Props = {}

const ProductPage = (props: Props) => {
  const [products, setProducts] = useState<{id: number, name: string}[]>([
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
    {id: 3, name: "Product C"}
  ]);
  return (
    <div className="App">
      <hr />
      Products: { products.map(item => <div>{item.name}</div>)}
      <hr />
      </div>
  )
}
export default ProductPage