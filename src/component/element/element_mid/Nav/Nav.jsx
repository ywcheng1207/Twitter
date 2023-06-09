import { useState } from 'react'
import styles from './Nav.module.scss'
// import Button from 'component/element/element_basic/Button/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as HomeActive } from 'assets/icons/homeActive.svg'
import { ReactComponent as PersonInfo } from 'assets/icons/personInfo.svg'
import { ReactComponent as Setting } from 'assets/icons/setting.svg'
import { ReactComponent as Logout } from 'assets/icons/logout.svg'
import UserPostModal from 'component/element/element_mid/UserPostModal/UserPostModal'

const Nav = () => {
  const {
    NavContainer, logoContainer, homeActiveContainer,
    personInfoContainer, settingContainer, postBtn, logoutContainer
  } = styles
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')

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
  const handleLogout = () => {
    localStorage.removeItem('authToken')
  }

  return (
    <div className={NavContainer}>
      <div className={logoContainer}>
        <Logo />
      </div>

      <Link to='/user/home/main'>
        <div className={homeActiveContainer}>
          <HomeActive />
        </div>
      </Link>

      <Link to='/user/personalinfo/main'>
        <div className={personInfoContainer}>
          <PersonInfo />
        </div>
      </Link>

      <Link to='/user/infosetting/main'>
        <div className={settingContainer}>
          <Setting />
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
