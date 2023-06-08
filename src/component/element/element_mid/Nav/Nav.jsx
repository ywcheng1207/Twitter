import { useState } from 'react'
import styles from './Nav.module.scss'
// import Button from 'component/element/element_basic/Button/Button'

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

  return (
    <div className={NavContainer}>
      <div className={logoContainer}>
        <Logo />
      </div>
      <div className={homeActiveContainer}>
        <HomeActive />
      </div>
      <div className={personInfoContainer}>
        <PersonInfo />
      </div>
      <div className={settingContainer}>
        <Setting />
      </div>

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

      <div className={logoutContainer}>
        <Logout />
      </div>
    </div>
  )
}

export default Nav
