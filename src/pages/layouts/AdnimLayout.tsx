import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdnimLayout = (props: Props) => {
  return (
    <div>
        <header>Header Admin</header>
        <aside>Aside</aside>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdnimLayout