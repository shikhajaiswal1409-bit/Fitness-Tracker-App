import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from './layout/DashboardLayout';
import SchedulePage from './pages/Schedule/SchedulePage';
import StatisticsPage from './pages/Statistics/StatisticsPage';
import SettingsPage from './pages/Settings/SettingsPage';
import GoalsPage from './pages/Goals/GoalsPage';


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
              {/* parent  */}
        <Route path='/' element={<DashboardLayout />}>  
             {/* These are the child route  */}
        <Route index element={<Dashboard />} />                
        <Route path='goals' element={ <GoalsPage /> } />
        <Route path='schedule' element={<SchedulePage />} />
        <Route path='statistics' element={<StatisticsPage />} />
        <Route path='settings' element={<SettingsPage />} />


        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
