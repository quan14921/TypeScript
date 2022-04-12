import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductType } from './types/product'

type Props = {
    onAdd: (products: ProductType) => void
}
type FormInput ={
    name: String,
    price: number,
    desc: string,
    img: string,
    categoryId: string
}

const ProductAdd = (props: Props) => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormInput>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInput> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
       Name <input type="text" {...register('name', {required: true})}/>
       <p>{ errors.name && <span>ko được bỏ trống</span>}</p> 
       ảnh <input type="text"{...register('img')} />
       Price <input type="number"{...register('price')} />
       Mô tả <input type="text" {...register('desc', {required: true})}/>
       <p>{ errors.desc && <span>ko được bỏ trống</span>}</p> 
       Danh mục <input type="text" {...register('categoryId', {required: true})}/>
       <p>{ errors.desc && <span>ko được bỏ trống</span>}</p> 
       <button className="btn btn-outline-primary">Add</button>

    </form>
  )
}

export default ProductAdd