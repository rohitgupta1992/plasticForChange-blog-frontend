import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import EmailVerification from './components/auth/EmailVerification';
import BlogList from './components/blog/BlogList';
import EditBlog from './components/blog/EditBlog';
import PrivateRoute from './components/common/PrivateRoute';
import DrawerAppBar from './components/navBar'

const App = () => (
  <Router>

   <div className='Container'>
   <DrawerAppBar/>
   <div style={{marginTop:"80px"}}>
   <Routes>
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/forgot-password" element={<ForgotPassword/>} />
    <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
    <Route exact path="/verify-email/:token" element={<EmailVerification/>} />
    <Route
          path="/"
          element={<PrivateRoute  element={BlogList} />}
        />
        <Route
          path="/edit-blog/:id"
          element={<PrivateRoute  element={EditBlog} />}
        />
    </Routes>
    </div>
   </div>
   

  </Router>
);

export default App;
