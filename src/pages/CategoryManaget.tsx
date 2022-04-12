import React from 'react'
import { CategoryType } from './types/category'

type Props = {
    category : CategoryType[]
    onRemove : (_id:string) => void
}

const CategoryManaget = ({category , onRemove}: Props) => {
    return (
      <div>
        <h2>Admin Danh Mục</h2>
         <table className="table table-hover">
          <thead>
            <tr>
              <th className='text-start' >#</th>
              <th className='text-start' >Name</th>
              <th className='text-start' >Remote</th>
            </tr>
          </thead>
          <tbody>
          {category?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td><button className='btn btn-outline-primary' onClick={() => onRemove(item._id)}>Remove</button></td>
              <td></td>
            </tr>
          })}
          </tbody>
        </table>
        <button className='btn btn-light'><a href="category/add">Add Danh Mục</a></button>
      </div>
         
    )
  }

export default CategoryManaget