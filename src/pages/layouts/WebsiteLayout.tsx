import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <aside>Aside</aside>
        <main>
            <Outlet />
        </main>

        <footer>footer</footer>
    </div>
  )
}

export default WebsiteLayout