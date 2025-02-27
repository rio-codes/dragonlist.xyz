import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Components
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './auth/ProtectedRoute';
import AuthProvider from './auth/AuthProvider';

// We need this wrapper to solve the circular dependency between AuthProvider and Router
const AppRoutes: React.FC = () => {
  const { isLoading } = useAuth0();

  //if (isLoading) {
  //  return <div className="flex items-center justify-center h-screen">Loading...</div>;
  //}

  return (
    <Routes>
      {/* Show the Coming Soon page as the default for now */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Future home page with login */}
      <Route path="/home" element={<HomePage />} />
      
      {/* Protected dashboard route */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Special development route to directly access homepage in dev */}
      <Route path="/dev" element={<Dashboard />} />
      
      {/* Redirect any unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;