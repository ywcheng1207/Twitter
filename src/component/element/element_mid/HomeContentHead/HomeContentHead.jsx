import { useState } from 'react'
import styles from './HomeContentHead.module.scss'
import HeaderHome from 'component/element/element_basic/HeaderHome/HeaderHome'
import UserPostModal from 'component/element/element_mid/UserPostModal/UserPostModal'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'

const HomeContentHead = () => {
  const {
    HomeContentHeadContainer, postInputContainer, postInputContent,
    postInputHead, postBtnContainer, postBtn
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
    if (inputText.length <= 150) {
      setText(inputText)
    }
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
      >
        <div className={postInputContainer} onClick={handleShow}>
          <div className={postInputContent}>
            <div className={postInputHead}>
              <img src={avatarUrl} alt="Image"></img>
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
