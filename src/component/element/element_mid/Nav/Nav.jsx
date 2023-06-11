import { useState } from 'react'
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as HomeActive } from 'assets/icons/homeActive.svg'
import { ReactComponent as PersonInfo } from 'assets/icons/personInfo.svg'
import { ReactComponent as Setting } from 'assets/icons/setting.svg'
import { ReactComponent as Logout } from 'assets/icons/logout.svg'
import { ReactComponent as Home } from 'assets/icons/home.svg'
import { ReactComponent as PersonInfoActive } from 'assets/icons/personInfoActive.svg'
import { ReactComponent as SettingActive } from 'assets/icons/settingActive.svg'
import UserPostModal from 'component/element/element_mid/UserPostModal/UserPostModal'

const Nav = () => {
  const {
    NavContainer, logoContainer, homeActiveContainer,
    personInfoContainer, settingContainer, postBtn, logoutContainer
  } = styles
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [status, setStatus] = useState('home')

  const handleSwitch = ({ page }) => {
    console.log(page)
    setStatus(page)
  }
  const handleLogout = () => {
    localStorage.removeItem('authToken')
  }
  // modal handle
  const handleClose = () => {
    setShow(false)
    setText('')
  }
  const handleShow = () => setShow(true)
  const handleChange = value => {
    const inputText = value
    console.log(inputText.length)
    if (inputText.length <= 1000) {
      setText(inputText)
    }
  }

  return (
    <div className={NavContainer}>
      <div className={logoContainer}>
        <Logo />
      </div>

      <Link to='/user/home/main'>
        <div className={homeActiveContainer} onClick={() => handleSwitch({ page: 'home' })}>
          {status === 'home' ? <HomeActive /> : <Home/>}
        </div>
      </Link>

      <Link to='/user/personalinfo/main'>
        <div className={personInfoContainer} onClick={() => handleSwitch({ page: 'person' })}>
          {status === 'person' ? <PersonInfoActive /> : <PersonInfo />}
        </div>
      </Link>

      <Link to='/user/infosetting/main'>
        <div className={settingContainer} onClick={() => handleSwitch({ page: 'setting' })}>
          {status === 'setting' ? <SettingActive /> : <Setting />}
        </div>
      </Link>

      <UserPostModal
        show={show}
        onClose={handleClose}
        onShow={handleShow}
        text={text}
        onChange={handleChange}
      >
        <button className={postBtn} onClick={handleShow}>
          推文
        </button>
      </UserPostModal>
      <Link to='/login'>
        <div className={logoutContainer} onClick={handleLogout}>
          <Logout />
        </div>
      </Link>

    </div>
  )
}

export default Nav
