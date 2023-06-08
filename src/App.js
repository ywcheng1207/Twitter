import './reset.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminTweetListPage from 'pages/AdminTweetListPage/AdminTweetListPage'
import AdminUsersPage from 'pages/AdminUserPage/AdminUsersPage'
import AdminLoginPage from 'pages/AdminLoginPage/AdminLoginPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'

import 'bootstrap/dist/css/bootstrap.min.css'
function App () {
  return (
    <div className="App">
      <BrowserRouter basename='Twitter'>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='admin' element={<AdminLoginPage />} />
          <Route path='admin_main' element={<AdminTweetListPage />} />
          <Route path='admin_users' element={<AdminUsersPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
