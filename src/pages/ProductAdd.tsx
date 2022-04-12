import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { listcate } from '../api/category'
import { CategoryType } from './types/category'
import { ProductType } from './types/product'

type Props = {
    onAdd: (products: ProductType) => void
}
type FormInput ={
    name: String,
    price: number,
    desc: string,
    img: string,
    category: number
}
const ProductAdd = (props: Props) => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormInput>();
    const [categorys, setCategorys] = useState<CategoryType[]>([]);
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInput> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }

    useEffect(() => {
      const getCategory = async () => {
            const { data } = await listcate();
            setCategorys(data);
      }
      getCategory();
  }, []);
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
       Name <input type="text" {...register('name', {required: true})}/>
       <p>{ errors.name && <span>ko được bỏ trống</span>}</p> 
       ảnh <input type="text"{...register('img')} />
       Price <input type="number"{...register('price')} />
       Mô tả <input type="text" {...register('desc', {required: true})}/>
       <p>{ errors.desc && <span>ko được bỏ trống</span>}</p> 
       Danh mục <select id="" {...register('category')}>
         {
           categorys.map((item) =>{
           return  <option value={item._id}>{item.name}</option>
           })

         }
         
       </select>
       <p>{ errors.desc && <span>ko được bỏ trống</span>}</p> 
       <button className="btn btn-outline-primary">Add</button>

    </form>
  )
}

export default ProductAdd