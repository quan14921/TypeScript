import React from 'react'
import { Navigate } from 'react-router-dom';
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const email = JSON.parse(localStorage.getItem("user") as string ).user.email
    if(email == 'qyieuf@gmail.com.vn'){
      
        return props.children
        
    }
    return <Navigate to="/" />
}

export default PrivateRouter