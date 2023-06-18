// -- import
// API
import { getUsers } from 'api/admin'
// 元件
import AdminNav from 'component/element/element_basic/AdminNav/AdminNav'
import UserListItem from 'component/admin/UserListItem/UserListItem'
// 樣式/套件
import styles from './AdminUserPage.module.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// -- 元件
const AdminUsersPage = () => {
  const [status, setStatus] = useState('userList')
  const [userList, setUserList] = useState([])
  const navigate = useNavigate()

  const handleTweetListClick = () => {
    setStatus('tweetList')
    navigate('/admin/main')
  }
  const handleUserListClick = () => {
    setStatus('userList')
  }
  const handleLogoutClick = () => {
    localStorage.removeItem('authToken')
    navigate('/admin')
  }

  useEffect(() => {
    const getUsersAsync = async authToken => {
      try {
        const data = await getUsers(authToken)
        setUserList(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (localStorage.getItem('authToken')) {
      getUsersAsync(localStorage.getItem('authToken'))
    }
  }, [])

  const { container, mainContainer, cardContainer } = styles
  return (
    <div className={container}>
      <AdminNav
        status={status}
        tweetListClick={handleTweetListClick}
        userListClick={handleUserListClick}
        logoutClick={handleLogoutClick}
      />
      <div className={mainContainer}>
        <header>
          <h4 className='Bold'>使用者列表</h4>
        </header>
        <main className={cardContainer}>
          <UserListItem data={userList} />
        </main>
      </div>
    </div>
  )
}
export default AdminUsersPage
