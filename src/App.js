import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './login.js'
import SignUp from './signup.js'
import './App.css'
import Chat from './chat.js'
import { useEffect, useState } from 'react'
import AuthProvider from './AuthProvider.js'
import PrivateRoute from './PrivateRoute.js'
import TimeslotList from './TimeslotList.js'
import Lms from './lms.js'


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
            <Route path="/test" element={<TimeslotList />} />
            <Route path="/lms" element={<Lms />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App