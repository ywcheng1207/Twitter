// -- import
// 元件
import HeaderHome from 'component/element/element_basic/HeaderHome/HeaderHome'
import UserPostModal from 'component/element/element_mid/UserPostModal/UserPostModal'
// 樣式/套件
import { useState } from 'react'
import styles from './HomeContentHead.module.scss'
// -- 元件
const HomeContentHead = ({ onAddHomeList }) => {
  let avatar
  if (localStorage.getItem('avatar')) {
    avatar = localStorage.getItem('avatar')
  } else {
    avatar =
      'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=878'
  }
  // styles
  const {
    HomeContentHeadContainer,
    postInputContainer,
    postInputContent,
    postInputHead,
    postBtnContainer,
    postBtn
  } = styles
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [userTextNothing, setUserTextNoting] = useState(false)
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
    <div className={HomeContentHeadContainer}>
      <HeaderHome />
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
        <div className={postInputContainer} onClick={handleShow}>
          <div className={postInputContent}>
            <div className={postInputHead}>
              <img src={avatar} alt='Image'></img>
            </div>
            <h4>有什麼新鮮事？</h4>
          </div>
          <div className={postBtnContainer}>
            <button className={postBtn}>推文</button>
          </div>
        </div>
      </UserPostModal>
    </div>
  )
}

export default HomeContentHead
