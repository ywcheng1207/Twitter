// -- import
// 樣式
import styles from './AdminNav.module.scss'
// 圖片
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as AdminHome } from 'assets/icons/adminHome.svg'
import { ReactComponent as AdminHomeActive } from 'assets/icons/adminHomeActive.svg'
import { ReactComponent as AdminUserList } from 'assets/icons/adminUserList.svg'
import { ReactComponent as AdminUserListActive } from 'assets/icons/adminUserListActive.svg'
import { ReactComponent as Logout } from 'assets/icons/logout.svg'

// -- 元件
const AdminNav = ({ tweetListClick, userListClick, status, logoutClick }) => {
  const { navContainer, icon, logo, logout, iconUserlist } = styles
  return (
    <div className={navContainer}>
      <div>
        <Logo className={logo} />
      </div>
      <div
        onClick={() => {
          tweetListClick()
        }}
      >
        {status === 'tweetList' ? (<AdminHomeActive className={icon} />) : (<AdminHome className={icon} />)}
      </div>
      <div
        onClick={() => {
          userListClick()
        }}
      >
        {status === 'userList' ? (<AdminUserListActive className={iconUserlist} />) : (<AdminUserList className={iconUserlist} />)}
      </div>
      <div>
        <Logout
          className={logout}
          onClick={() => {
            logoutClick()
          }}
        />
      </div>
    </div>
  )
}

export default AdminNav
