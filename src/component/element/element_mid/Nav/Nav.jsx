// -- import
// 元件
import UserPostModal from 'component/element/element_mid/UserPostModal/UserPostModal'
// 樣式/套件
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'
import { useUserPostModal } from 'contexts/UserMainPageContext'
// 圖片
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as HomeActive } from 'assets/icons/homeActive.svg'
import { ReactComponent as PersonInfo } from 'assets/icons/personInfo.svg'
import { ReactComponent as Setting } from 'assets/icons/setting.svg'
import { ReactComponent as Logout } from 'assets/icons/logout.svg'
import { ReactComponent as Home } from 'assets/icons/home.svg'
import { ReactComponent as PersonInfoActive } from 'assets/icons/personInfoActive.svg'
import { ReactComponent as SettingActive } from 'assets/icons/settingActive.svg'

// -- 元件
const Nav = ({ status, onNavSwitch }) => {
  // styles
  const {
    NavContainer, logoContainer, homeActiveContainer,
    personInfoContainer, settingContainer, postBtn, logoutContainer
  } = styles

  // 取得 Id
  const id = localStorage.getItem('id')

  // state
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [userTextNothing, setUserTextNoting] = useState(false)
  // context
  const { onAddHomeList } = useUserPostModal()
  // handle
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('id')
  }
  // modal handle
  const handleClose = () => {
    setShow(false)
    setText('')
    setUserTextNoting(false)
  }
  const handleShow = () => setShow(true)
  const handleChange = inputText => {
    if (inputText.length < 143) {
      setText(inputText)
    }
    if (inputText.length > 0) {
      setUserTextNoting(false)
    }
  }
  const handleUserTextWarning = value => {
    setUserTextNoting(value)
  }
  return (
    <div className={NavContainer}>
      <div className={logoContainer}>
        <Logo />
      </div>
      <Link to='/user/home/main'>
        <div className={homeActiveContainer} onClick={() => onNavSwitch?.('home')}>
          {status === 'home' ? <HomeActive /> : <Home/>}
        </div>
      </Link>
      <Link to='/user/personalinfo/main'>
        <div className={personInfoContainer}
          onClick={() => {
            localStorage.setItem('otherId', id)
            return onNavSwitch?.('personalinfo')
          }
        }>
          {status === 'personalinfo' ? <PersonInfoActive /> : <PersonInfo />}
        </div>
      </Link>
      <Link to='/user/infosetting/main'>
        <div className={settingContainer} onClick={() => onNavSwitch?.('infosetting')}>
          {status === 'infosetting' ? <SettingActive /> : <Setting />}
        </div>
      </Link>
      <UserPostModal
        show={show}
        onClose={handleClose}
        onShow={handleShow}
        text={text}
        onChange={handleChange}
        onAddHomeList={onAddHomeList}
        onUserTextWarning={handleUserTextWarning}
        userTextNothing={userTextNothing}
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
