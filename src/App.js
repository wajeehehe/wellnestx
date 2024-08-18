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
import Site from './lmsResources/trauma.js'
import Dsite from './lmsResources/depression.js'
import Asite from './lmsResources/anxiety.js'
import Stsite from './lmsResources/stress.js'

import Support from './support.js'

import Docdash from './doctorDasboard.js'



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
            <Route path="/trauma" element={<Site />} />
            <Route path="/depression" element={<Dsite />} />
            <Route path="/anxiety" element={<Asite />} />
            <Route path="/stress" element={<Stsite />} />
            <Route path="/support" element={<Support />} />

            <Route path="/doc-dash" element={<Docdash />} />

          </Routes >
        </BrowserRouter >
      </AuthProvider >
    </div >
  )
}

export default App