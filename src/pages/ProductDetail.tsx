import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from './types/product';
import NumberFormat from 'react-currency-format';
type Props = {}

const ProductDetail = (props: Props) => {
    const { id} = useParams();
    const [product, setProduct] = useState<ProductType>(); // 1
    useEffect(() => { // 3
        const getProduct = async () => {
            const {data}= await read(id);
            setProduct(data);
        }   
        getProduct();
    }, []);
  return ( // 2
  <div className="small-container single-product">
  <div className="row">
    <div className="col-2">
      <img src={product?.img} width="100%" id="productImg" />
    </div>
    <div className="col-2">
      <p>Home / T-Shirt</p>
      <h1>{product?.name}</h1>
      <h4><NumberFormat value={product?.price} displayType={'text'} thousandSeparator={true} prefix={''} /> vnd</h4>
      <select>
        <option>Select Size</option>
        <option>XXL</option>
        <option>XL</option>
        <option>Large</option>
        <option>Medium</option>
        <option>Small</option>
      </select><input type="number" defaultValue={1} />
      <a  className="btn btn-primary">Mua ngay</a>
      <h3>Product Detail
        <i className="fa fa-indent" />
      </h3>
      <br />
      <p>{product?.desc} </p>
    </div>
  </div>
</div>

  )
}

export default ProductDetail