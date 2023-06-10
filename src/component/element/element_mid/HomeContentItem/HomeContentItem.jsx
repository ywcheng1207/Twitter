import styles from './HomeContentItem.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import UserReplyModal from 'component/element/element_mid/UserReplyModal/UserReplyModal'

const HomeContentItem = ({ tweet }) => {
  const {
    HomeContentItemContainer, HomeContentItemHead, HomeContentItemDescreption,
    posterName, posterAccount, postDescription, postIcon, reply, like, likeCount
  } = styles
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const handleReplyList = () => {
    navigate('/user/replylist/main')
    console.log(tweet)
  }
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
    <div className={HomeContentItemContainer}>
      <div className={HomeContentItemHead}>
        <img src={tweet.avatar} alt="Image"></img>
      </div>
      <div className={HomeContentItemDescreption}>
        <div>
          <span className={posterName}>Apple</span>
          <span className={posterAccount}>@apple ‧ 3小時</span>
        </div>
        <p className={postDescription} onClick={() => handleReplyList?.()}>
          {tweet.description}
        </p>

        <div className={postIcon}>
          <UserReplyModal
            show={show}
            onClose={handleClose}
            onShow={handleShow}
            text={text}
            onChange={handleChange}
          >
            <div className={reply} onClick={handleShow}>
              <img src={replyIcon} alt="" />
              <div>
                {tweet.replyCount}
              </div>
            </div>
          </UserReplyModal>
          <div className={like}>
            <img src={likeIcon} alt="" />
            <div className={likeCount}>
              {tweet.likeCount}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeContentItem
