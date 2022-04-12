import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/Product'
import About from './pages/About'
import Header from './components/Header'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdnimLayout from './pages/layouts/AdnimLayout'
import ProductDetail from './pages/ProductDetail'
import { ProductType } from './pages/types/product'
import ProductManager from './pages/ProductManaget'
import { add, list, remove, update } from './api/product'
import ProductAdd from './pages/ProductAdd'
import Editproduct from './pages/Editproduct'
import Signup from './pages/signup'
import { listuser, signup } from './api/user'
import { UserType } from './pages/types/user'
import Signin from './pages/signin'
import { CategoryType } from './pages/types/category'
import { addcate, listcate, removecate } from './api/category'
import CategoryManaget from './pages/CategoryManaget'
import Categoryadd from './pages/Categoryadd'
import UserManaget from './pages/UserManaget'
import Showcate from './pages/Showcate'
import PrivateRouter from './components/PrivateRouter'
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [categorys, setCategorys] = useState<CategoryType[]>([]);

  useEffect(() => {
      const getUsers = async () => {
            const { data } = await listuser();
            setUsers(data);
      }
      getUsers();
  }, []);
  useEffect(() => {
    const getProducts = async () => {
          const { data } = await list();
          setProducts(data);
    }
    getProducts();
}, []);
  useEffect(() => {
    const getCategory = async () => {
          const { data } = await listcate();
          setCategorys(data);
    }
    getCategory();
}, []);


const removecategory = (_id:string) =>{
  removecate(_id);

  setCategorys(categorys.filter(item => item._id !== _id));
}



  const removeItem = (_id:string) =>{
    remove(_id);

    setProducts(products.filter(item => item._id !== _id));
  }
  const onHanldeAddcate = (data) =>{
    addcate(data);
    setCategorys([...categorys,data])
  }
  const onHanldeAdd = (data) =>{
    add(data);
    setProducts([...products,data])
  }
  const onHanldeUpdate = async (product : ProductType) =>{
    const {data} = await update(product);

    setProducts(products.map(item => item._id == data._id ? data : item));
  }


  const onHanldesignup = (data) =>{
      signup(data);
      setUsers([...users,data])
    }



  return (

    <div>

      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Homepage products={products}/>} />
              <Route path='signup' element={<Signup onsignup={onHanldesignup}/>}/>
              <Route path='signin' element={<Signin/>}/>
              <Route path='product'>
                <Route index element={<ProductPage  products={products}/>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path=":id" element={<Showcate />} />
            </Route>
            

            <Route path="admin" element={<PrivateRouter><AdnimLayout /></PrivateRouter>  }>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              <Route path="product" element={<ProductManager products={products} onRemove={removeItem} />} />
              <Route path="add" element={<ProductAdd onAdd={onHanldeAdd}/>} />
              <Route path=":id/edit" element={<Editproduct onUpdate={onHanldeUpdate}/>}/>
              <Route path='category'>
                  <Route index element={<CategoryManaget category={categorys} onRemove={removecategory} />}/>
                  <Route path="add" element={<Categoryadd onAdd={onHanldeAddcate}/>} />
              </Route>
              <Route path='user'>
              <Route index element={<UserManaget users={users}/>} />
              </Route>
            </Route>
        </Routes>
      </main>
    </div>
  )
}
                                                                                                                                  
export default App


// npm init vite@latest my-app -- --template react-ts