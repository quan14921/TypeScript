import React from 'react'
import { ProductType } from './types/product'

type ProductManagerProps = {
   products: ProductType[],
   onRemove: (_id:string) => void
}


const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  return (
    <div>
      <h2>Admin Sản Phẩm</h2>
       <table className="table table-hover">
        <thead>
          <tr>
            <th className='text-start' >#</th>
            <th className='text-start' >Name</th>
            <th className='text-start' >Price</th>
            <th className='text-start' >Desc</th>
            <th className='text-start' >Remote</th>
            <th className='text-start' >Edit</th>
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
              <button className='btn btn-outline-primary' onClick={() => onRemove(item._id)}>Remove</button>
            </td>
            <td><button className='btn btn-outline-primary'><a href={`${item._id}/edit`}>Edit</a></button></td>
          </tr>
        })}
        </tbody>
      </table>
      <button className='btn btn-light'><a href="add">Add Sản Phẩm</a></button>
    </div>
       
  )
}

export default ProductManager