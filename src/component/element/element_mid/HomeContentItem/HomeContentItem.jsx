import styles from './HomeContentItem.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'
import likeIconClick from 'assets/icons/likeClick.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import UserReplyModal from 'component/element/element_mid/UserReplyModal/UserReplyModal'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'

const HomeContentItem = ({ tweet }) => {
  // --- style
  const {
    HomeContentItemContainer, HomeContentItemHead, HomeContentItemDescreption,
    posterName, posterAccount, postDescription, postIcon, reply, like, likeCount
  } = styles

  // --- state
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [isLike, setIsLike] = useState(tweet.isLiked)
  const [tweetLikeCount, setTweetLikeCount] = useState(tweet.likeCount)
  const navigate = useNavigate()

  // --- handle
  // like功能：這裡要call api更新該篇tweet的like數據
  const handleLikeIcon = () => {
    if (isLike === true) {
      setIsLike(false)
      setTweetLikeCount(tweetLikeCount - 1)
      console.log(tweetLikeCount)
    } else {
      setIsLike(true)
      setTweetLikeCount(tweetLikeCount + 1)
      console.log(tweetLikeCount)
    }
  }
  // 點擊切換至某一篇tweet，這邊要給那篇tweet的id，讓該篇文一進去就可以依照id去call api找資料
  const handleReplyList = () => {
    navigate('/user/replylist/main')
  }

  // modal功能
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
        <img src={tweet.tweetOwnerAvatar} alt="Image"></img>
      </div>
      <div className={HomeContentItemDescreption}>
        <div>
          <span className={posterName}>{tweet.tweetOwnerName}</span>
          <span className={posterAccount}>@{tweet.tweetOwnerAccount}・
              <HoursPassed item={tweet}/>
          </span>
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
            <div onClick={handleLikeIcon}>
                {isLike ? <img src={likeIconClick} alt="" /> : <img src={likeIcon} alt="" />}
            </div>
            <div className={likeCount}>
              {tweetLikeCount}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeContentItem
