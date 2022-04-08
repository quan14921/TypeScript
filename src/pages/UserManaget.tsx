import React from 'react'
import { UserType } from './types/user'

type Props = {
    users: UserType[]
}

const UserManaget = (props: Props) => {
  return (
    <div>
      <h2>Admin Người Dùng</h2>
       <table className="table table-hover">
        <thead>
          <tr>
            <th className='text-start' >#</th>
            <th className='text-start' >Name</th>
            <th className='text-start' >Email</th>
            <th className='text-start' >Password</th>
          </tr>
        </thead>
        <tbody>
        {props.users?.map((item, index) => {
          return <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td></td>
            
          </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

export default UserManaget