import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/user';

type FormInputs = {
  name: string,
  email: string,
  password: string | number
}

const Signin = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = async data => {
    const { data: user } = await signin(data);
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/admin/product')
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
              <h3>Đăng Nhập</h3>
              <form action="" id="RegForm" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Username" {...register('email', { required: true })} />
                <input type="password" placeholder="Password" {...register('password', { required: true })} />
                <button type="submit" className="btn btn-danger">Đăng Nhập</button><br />
                <p>Bạn có muốn <a href="/signup">Đăng ký</a> ko</p>
              </form>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Signin