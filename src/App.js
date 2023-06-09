import './reset.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminTweetListPage from 'pages/AdminTweetListPage/AdminTweetListPage'
import AdminUsersPage from 'pages/AdminUserPage/AdminUsersPage'
import AdminLoginPage from 'pages/AdminLoginPage/AdminLoginPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import UserMainPage from 'pages/UserMainPage/UserMainPage'
import HomePage from 'pages/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'

const basename = process.env.PUBLIC_URL

function App () {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='user/main' element={<UserMainPage />} />
          {/* <Route path='user/self' element={<UserMainPage />} />
          <Route path='user/other' element={<UserMainPage />} /> */}

          <Route path='admin' element={<AdminLoginPage />} />
          <Route path='admin/main' element={<AdminTweetListPage />} />
          <Route path='admin/users' element={<AdminUsersPage />} />

          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
