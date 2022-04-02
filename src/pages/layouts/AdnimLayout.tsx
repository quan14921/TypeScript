import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../admin/Dashboard'

type Props = {}

const AdnimLayout = (props: Props) => {
  return (
    <div>
        <header><Dashboard /> </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdnimLayout