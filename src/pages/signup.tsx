import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserType } from './types/user'

type Props = {
    onsignup: (users: UserType) => void
}
type FormInput ={
    name: string,
    password: string,
    email: string
}

const Signup = (props: Props) => {
    const {register, handleSubmit, formState} = useForm<FormInput>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInput> = data => {
        props.onsignup(data);
        navigate('/signin')
        
    }
  return (
    <div className="account-page">
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src="../../img/image1.png" width="100%" />
        </div>
        <div className="col-2">
          <div className="form-container">
            <h3>Đăng ký</h3>
            <form action="" id="RegForm" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Username" {...register('name', { required: true })} />
              <input type="email" placeholder="Email" {...register('email', {required: true})} /><br/>
              <input type="password" placeholder="Password" {...register('password', { required: true })} /><br/>
              <button type="submit" className="btn">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup