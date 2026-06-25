import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./Admin/components/ProtectedRoute";

import Login from "./Admin/pages/Login/Login";
import SuperAdmin from "./Admin/pages/SuperAdmin/SuperAdmin";
import ManualActivation from "./Admin/pages/ManualActivation/ManualActivation";
import NewsManagement from "./Admin/pages/NewsManagement/NewsManagement";
import Payments from "./Admin/pages/Payments/Payments";
import PaymentAnalytics from "./Admin/pages/PaymentAnalytics/PaymentAnalytics";
import SystemHealth from "./Admin/pages/SystemHealth/SystemHealth";
import Users from "./Admin/pages/Users/Users.jsx";

function App() {
  return (
    <Routes>
      {/* Redirect root to admin login */}
      <Route path="/" element={<Navigate to="/admin" replace />} />

      {/* Public Route */}
      <Route path="/admin" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <SuperAdmin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/manual-activation"
        element={
          <ProtectedRoute>
            <ManualActivation />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/news-management"
        element={
          <ProtectedRoute>
            <NewsManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/payments"
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/payments-analytics"
        element={
          <ProtectedRoute>
            <PaymentAnalytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/system-health"
        element={
          <ProtectedRoute>
            <SystemHealth />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}

export default App;