import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductType } from './types/product'

type Props = {
    onAdd: (products: ProductType) => void
}
type FormInput ={
    name: String,
    price: number
}

const ProductAdd = (props: Props) => {
    const {register, handleSubmit, formState} = useForm<FormInput>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInput> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', {required: true})}/>
        <input type="number"{...register('price')} />
        <button>Add</button>
    </form>
  )
}

export default ProductAdd