import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Roadmap from "./pages/Roadmap";
import DSA from "./pages/DSA";
import Interview from "./pages/Interview";
import InterviewSession from "./pages/InterviewSession";
import ProtectedRoute from "./routes/ProtectedRoute";

// 1. Import your layout here!
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      {/* Public Routes (No Sidebar) */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes (With Sidebar) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
              <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/roadmap"
        element={
          <ProtectedRoute>
              <Roadmap />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dsa"
        element={
          <ProtectedRoute>
              <DSA />
          </ProtectedRoute>
        }
      />

      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Interview />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/interview/:id"
        element={
          <ProtectedRoute>
            <InterviewSession />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
