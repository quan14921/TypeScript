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
        
        
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
       name: <input type="text" {...register('name', {required: true})}/><br/>
       password: <input type="text"{...register('password', {required: true})} /><br/>
       email: <input type="text"{...register('email', {required: true})} /><br/>
        <button>Signup</button>
    </form>
  )
}

export default Signup