import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-currency-format';
import { useParams } from 'react-router-dom';
import { showcate } from '../api/category';

import Categorynav from '../components/Categorynav';
import { CategoryType } from './types/category';
import { ProductType } from './types/product';

type Props = {}

const Showcate = (props: Props) => {
  const { id} = useParams();
  const [product, setProduct] = useState<ProductType[]>([]);
  const [categorys, setCategorys] = useState<CategoryType[]>([]); 
  
  useEffect(() => { // 3
      const getCategorys = async () => {
          const {data} = await showcate(id);
          console.log(data);
          setProduct(data.product);
          
      }   
      getCategorys();
  }, []);
  return (
    <div className='App'>
      <div className="small-container">
      <Categorynav/>
      
    <div className="row">
      <h2 className="title text-4xl">Products</h2>
      {product.map(item => {
       return <div className="col-4">
          <a href={`product/${item._id}`}><img src={item.img} /></a>
          <a href="">
            <h4><a href={`product/${item._id}`}>{item.name}</a></h4>
          </a>
          <p><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={''} /> vnd</p>
          <a className="btn btn-danger">BUY</a>
        </div>
      })
         
      
      }
    </div>
  </div>
    </div>
    
  )
}

export default Showcate