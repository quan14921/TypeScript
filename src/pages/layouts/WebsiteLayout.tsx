import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Header2 from '../../components/Header2'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header className="header">
            <Header2 />
        </header>
        <main>
            <Outlet />
        </main>

        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default WebsiteLayout