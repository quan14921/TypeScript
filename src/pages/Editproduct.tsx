import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from './types/product'

type Props = {
    onUpdate: (product: ProductType) => void
}

type FormInput ={
    name: String,
    price: number,
    desc: string,
    img: string
}

const Editproduct = (props: Props) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm<FormInput>();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        const getProducts = async () =>{
        const {data} = await read(id);
        reset(data)
    }
    getProducts();
    },[])

    const onSubmit: SubmitHandler<FormInput> = data =>{
        props.onUpdate(data);
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
        <button>Update</button>
    </form>
  )
}

export default Editproduct