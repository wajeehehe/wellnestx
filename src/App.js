import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './login.js'
import SignUp from './signup.js'
import './App.css'
import Chat from './chat.jsx'
import { useEffect, useState } from 'react'
import AuthProvider from './AuthProvider.js'


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')



  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<Chat email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App