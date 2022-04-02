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
import { signup } from './api/user'
import { UserType } from './pages/types/user'
import Signin from './pages/signin'
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
      }
      getProducts();
  }, [])



  const removeItem = (id) =>{
    remove(id);

    setProducts(products.filter(item => item.id !== id));
  }

  const onHanldeAdd = (data) =>{
    add(data);
    setProducts([...products,data])
  }
  const onHanldeUpdate = async (product : ProductType) =>{
    const {data} = await update(product);

    setProducts(products.map(item => item.id == data.id ? data : item));
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
                <Route index element={<ProductPage products={products}/>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
            </Route>
            

            <Route path="admin" element={<AdnimLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              <Route path="product" element={<ProductManager products={products} onRemove={removeItem} />} />
              <Route path="add" element={<ProductAdd onAdd={onHanldeAdd}/>} />
              <Route path=":id/edit" element={<Editproduct onUpdate={onHanldeUpdate}/>}/>
            </Route>
        </Routes>
      </main>
    </div>
  )
}
    
export default App


// npm init vite@latest my-app -- --template react-ts