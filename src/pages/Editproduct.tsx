import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { listcate } from '../api/category'
import { read } from '../api/product'
import { CategoryType } from './types/category'
import { ProductType } from './types/product'

type Props = {
    onUpdate: (product: ProductType) => void
}

type FormInput ={
    name: String,
    price: number,
    desc: string,
    img: string,
    category: number
}

const Editproduct = (props: Props) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm<FormInput>();
    const [categorys, setCategorys] = useState<CategoryType[]>([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        const getProducts = async () =>{
        const {data} = await read(id);
        reset(data)
    }
    getProducts();
    },[])
    useEffect(() => {
      const getCategory = async () => {
            const { data } = await listcate();
            setCategorys(data);
      }
      getCategory();
  }, []);
    const onSubmit: SubmitHandler<FormInput> = data =>{
        props.onUpdate(data);
        navigate('/admin/product')
        
    }
    
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
         Name <input type="text" {...register('name', {required: true})}/>
       <p>{ errors.name && <span>ko được bỏ trống</span>}</p> 
       Danh mục <select id="" {...register('category')}>
         {
           categorys.map((item) =>{
           return  <option value={item._id}>{item.name}</option>
           })
         }
       </select><br />
       ảnh <input type="text"{...register('img')} />
       Price <input type="number"{...register('price')} />
       Mô tả <input type="text" {...register('desc', {required: true})}/>
       <p>{ errors.desc && <span>ko được bỏ trống</span>}</p> 
        <button>Update</button>
    </form>
  )
}

export default Editproduct