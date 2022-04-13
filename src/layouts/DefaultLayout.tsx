import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const DefaultLayout: React.FC = () => {
    return (
        <>
             <Navbar />
            <div>
                <Outlet />
            </div>
        </>

    )
}

export default DefaultLayout