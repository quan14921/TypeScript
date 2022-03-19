import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type Props = {}
type ProductType = {
    _id: number,
    name: string,
    price: number
}
const ProductDetail = (props: Props) => {
    const { id} = useParams();
    const [product, setProduct] = useState<ProductType>(); // 1
    console.log(id);
    
    useEffect(() => { // 3
        const getProduct = async () => {
            const response = await fetch('http://localhost:8000/api/products/'+id);
            const data = await response.json();
            setProduct(data);
            
        }   
        getProduct();
    }, []);
  return ( // 2
    <div>fgfnhg</div>
  )
}

export default ProductDetail