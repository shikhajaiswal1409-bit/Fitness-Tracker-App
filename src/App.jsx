
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import SchedulePage from "./pages/Schedule/SchedulePage";
import StatisticsPage from "./pages/Statistics/StatisticsPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import GoalsPage from "./pages/Goals/GoalsPage";

import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout */}
        <Route path="/" element={<DashboardLayout />}>

          {/* 🔐 Protected Routes */}
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="goals"
            element={
              <ProtectedRoute>
                <GoalsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="schedule"
            element={
              <ProtectedRoute>
                <SchedulePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="statistics"
            element={
              <ProtectedRoute>
                <StatisticsPage />
              </ProtectedRoute>
            }
          />

          {/* ✅ Settings always accessible */}
          <Route path="settings" element={<SettingsPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;