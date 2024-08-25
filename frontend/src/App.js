import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './Layout/Layout';
import PrivateRoute from './utils/PrivateRoute';
import Allusers from './pages/Allusers';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/all-users" 
            element={<PrivateRoute element={Allusers} />} 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
