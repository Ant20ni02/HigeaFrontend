import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Layout from './views/Layout';
//import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/home' element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;