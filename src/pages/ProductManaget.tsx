import React from 'react'
import { ProductType } from './types/product'

type ProductManagerProps = {
   products: ProductType[],
   onRemove: (id:number) => void
}


const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  return (
    <div>
       <table className="table table-striped">
        <thead>
          <tr>
            <th className='text-start' >#</th>
            <th className='text-start' >Name</th>
            <th className='text-start' >Price</th>
            <th className='text-start' >Desc</th>
            <th className='text-start' >Remote</th>
          </tr>
        </thead>
        <tbody>
        {products?.map((item, index) => {
          return <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
       
  )
}

export default ProductManager