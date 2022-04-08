import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from './types/category'

type Props = {
    onAdd: (categorys: CategoryType) => void
}
type FormInputcate ={
    name: String
}
   

const Categoryadd = (props: Props) => {
    const {register, handleSubmit, formState} = useForm<FormInputcate>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputcate> = data => {
        props.onAdd(data);
        navigate('/admin/category')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
       Name <input type="text" {...register('name', {required: true})}/>
       <button className="btn btn-outline-primary">Add</button>

    </form>
  )
}

export default Categoryadd