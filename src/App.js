import './reset.css'
import './App.css'
import { BrowserRouter, Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

import AdminTweetListPage from 'pages/AdminTweetListPage/AdminTweetListPage'
import AdminUsersPage from 'pages/AdminUserPage/AdminUsersPage'
import AdminLoginPage from 'pages/AdminLoginPage/AdminLoginPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import UserMainPage from 'pages/UserMainPage/UserMainPage'
import HomePage from 'pages/HomePage/HomePage'

import InfoSetting from 'component/user/InfoSetting/InfoSetting'
import Home from 'component/user/Home/Home'
import PersonalInfo from 'component/user/PersonalInfo/PersonalInfo'
import Other from 'component/user/Other/Other'
import ReplyList from 'component/user/ReplyList/ReplyList'
import 'bootstrap/dist/css/bootstrap.min.css'

function Content () {
  const { page } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (page !== 'home' && page !== 'personalinfo' &&
     page !== 'infosetting' && page !== 'replylist' && page !== 'other') {
      navigate('/user/home/main')
    }
  }, [page, navigate])

  let content
  if (page === 'home') {
    content = <Home />
  } else if (page === 'infosetting') {
    content = <InfoSetting />
  } else if (page === 'personalinfo') {
    content = <PersonalInfo />
  } else if (page === 'replylist') {
    content = <ReplyList />
  } else if (page === 'other') {
    content = <Other />
  }
  return content
}

const basename = process.env.PUBLIC_URL
function App () {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />

          <Route path='user' element={<Navigate to="/user/Home/main" replace />} />
          <Route path='user/:page' element={<UserMainPage />}>
               <Route path="main" element={<Content />}/>
          </Route>

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
