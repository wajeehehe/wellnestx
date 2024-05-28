import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './login.js'
import SignUp from './signup.js'
import './App.css'
import Chat from './chat.jsx'
import { useEffect, useState } from 'react'
import AuthProvider from './AuthProvider.js'
import PrivateRoute from './PrivateRoute.js'
import AppointmentList from './test.js'



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
            <Route path="/test" element={<AppointmentList />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App