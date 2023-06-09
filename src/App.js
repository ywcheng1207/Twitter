import './reset.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminTweetListPage from 'pages/AdminTweetListPage/AdminTweetListPage'
import AdminUsersPage from 'pages/AdminUserPage/AdminUsersPage'
import AdminLoginPage from 'pages/AdminLoginPage/AdminLoginPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import UserMainPage from 'pages/UserMainPage/UserMainPage'
import Content from 'pages/UserMainPage/Content'
import HomePage from 'pages/HomePage/HomePage'
import { SwitchCotextProvider } from 'contexts/NavContext'
import { ReplyListContextProvider } from 'contexts/RelyLIstContext'

const basename = process.env.PUBLIC_URL

function App () {
  return (
  <SwitchCotextProvider>
      <ReplyListContextProvider>
        <div className="App">
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<SignUpPage />} />

              <Route path='/user/:page' element={<UserMainPage />}>
                <Route path="main" element={<Content />} />
              </Route>

              <Route path='/admin' element={<AdminLoginPage />} />
              <Route path='/admin/main' element={<AdminTweetListPage />} />
              <Route path='/admin/users' element={<AdminUsersPage />} />

              <Route path='*' element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ReplyListContextProvider>
   </SwitchCotextProvider>
  )
}

export default App
