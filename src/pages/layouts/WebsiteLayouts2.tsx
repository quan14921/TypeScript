import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const WebsiteLayouts2 = (props: Props) => {
  return (
    <div>
        <header className="header">
            <Header />
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

export default WebsiteLayouts2