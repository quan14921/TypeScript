import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { listcate } from '../api/category';
import { CategoryType } from '../pages/types/category';

type Props = {
}

const Categorynav = (props: Props) => {
    const [categorys, setCategorys] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getCategory = async () => {
              const { data } = await listcate();
              setCategorys(data);
        }
        getCategory();
    }, []);
  return (
   <div>
       <ul className="nav justify-content-center">

    <li className="nav-item">
        <h4>Danh mục</h4>
        {categorys?.map(item =>
        <a href={`${item.id}`} className="p-2 fs-4">{item.name}</a>
        )}
        
    </li>
    
  </ul>
  </div>


  )
}

export default Categorynav