import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import {Box} from "@mui/material"



const DashboardLayout = () => {
  return (
    <Box sx={{display: "flex", height: "100vh", backgroundColor: "#f5f6fa"}}>
        <Sidebar />
        <Box sx={{flex:1, display: "flex", flexDirection: "column"}}>
            <Header />
            <Box sx={{flex:1, padding: "24px", overflowY: "auto"}}>
            {/* place where the child page renders inside the parent layout */}
              <Outlet />
            </Box>
        </Box>
    </Box>
  )
}

export default DashboardLayout
