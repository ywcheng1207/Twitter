import styles from './AdminNav.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as AdminHome } from 'assets/icons/adminHome.svg'
import { ReactComponent as AdminHomeActive } from 'assets/icons/adminHomeActive.svg'
import { ReactComponent as AdminUserList } from 'assets/icons/adminUserList.svg'
import { ReactComponent as AdminUserListActive } from 'assets/icons/adminUserListActive.svg'
import { ReactComponent as Logout } from 'assets/icons/logout.svg'
import { useState } from 'react'

const AdminNav = () => {
  const [status, setStatus] = useState('tweetList')
  const { navContainer, icon, logo, logout } = styles

  const handleTweetListClick = () => {
    setStatus('tweetList')
  }
  const handleUserListClick = () => {
    setStatus('userList')
  }

  return (
        <div className={navContainer}>
            <div>
                <Logo className={logo}/>
            </div>
            <div onClick={handleTweetListClick}>
                {status === 'tweetList' ? <AdminHomeActive className={icon}/> : <AdminHome className={icon} />}
            </div>
            <div onClick={handleUserListClick}>
                {status === 'userList' ? <AdminUserListActive className={icon}/> : <AdminUserList className={icon}/>}
            </div>
            <div>
                <Logout className={logout}/>
            </div>
        </div>
  )
}

export default AdminNav
