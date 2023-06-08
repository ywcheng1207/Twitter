import './reset.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminTweetListPage from 'pages/AdminTweetListPage/AdminTweetListPage'
import AdminUsersPage from 'pages/AdminUserPage/AdminUsersPage'
import AdminLoginPage from 'pages/AdminLoginPage/AdminLoginPage'

function App () {
  return (
    <div className="App">
      <BrowserRouter basename='Twitter'>
        <Routes>
          <Route path='admin' element={<AdminLoginPage />} />
          <Route path='admin_main' element={<AdminTweetListPage />} />
          <Route path='admin_users' element={<AdminUsersPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
