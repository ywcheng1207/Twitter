import styles from './HomeContentItem.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'
import likeIconClick from 'assets/icons/likeClick.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import UserReplyModal from 'component/element/element_mid/UserReplyModal/UserReplyModal'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'
import { userLikeTweet, userUnLikeTweet } from 'api/user'
// import { useOtherContext } from 'contexts/OtherContext'
import { useReplyList } from 'contexts/RelyLIstContext'
import { useUserPostModal, useUserReplyModal } from 'contexts/UserMainPageContext'

const HomeContentItem = ({ TweetId, tweet, id, onPostList, onUserLikeList }) => {
  // --- style
  const {
    HomeContentItemContainer, HomeContentItemHead, HomeContentItemDescreption,
    posterName, posterAccount, postDescription, postIcon, reply, like, likeCount, postTime
  } = styles

  // --- state
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const [userTextNothing, setUserTextNoting] = useState(false)

  // Home頁面的context
  const { onLike, onUnLike } = useUserPostModal()

  // Reply頁面的context
  const { onTheTweetId } = useReplyList()
  const { onUserReply } = useUserReplyModal()

  // --- handle
  // like功能：這裡要call api更新該篇tweet的like數據
  const handleLikeIcon = async (TweetId) => {
    const authToken = localStorage.getItem('authToken')
    try {
      if (tweet.isLiked === true) {
        await userUnLikeTweet({ authToken, TweetId })
        onUnLike(TweetId)
        onPostList?.({ TweetId, count: -1 })
        onUserLikeList?.({ TweetId, count: -1 })
      } else {
        await userLikeTweet({ authToken, TweetId })
        onLike(TweetId)
        onPostList?.({ TweetId, count: 1 })
        onUserLikeList?.({ TweetId, count: 1 })
      }
    } catch (error) {
      console.error(error)
    }
  }
  // 點擊切換至某一篇tweet，這邊要給那篇tweet的id，讓該篇文一進去就可以依照id去call api找資料
  const handleGoReplyList = () => {
    navigate('/user/replylist/main')
  }

  // modal功能
  const handleClose = () => {
    setShow(false)
    setText('')
    setUserTextNoting(false)
  }
  const handleShow = () => setShow(true)
  const handleChange = inputText => {
    setText(inputText)
    if (inputText.length > 0) {
      setUserTextNoting(false)
    }
  }
  const handleUserTextWarning = value => {
    setUserTextNoting(value)
  }

  // const setId = useOtherContext().setOtherId
  const handleAvatarClick = (e) => {
    console.log(e.target.id)
    const clickId = e.target.id
    localStorage.setItem('otherId', clickId)
    navigate('/user/other/main')
    // localStorage.setItem('otherId', e.target.id)
    // if (id === localStorage.getItem('id')) {
    //   navigate('/user/personalinfo/main')
    // } else {
    //   navigate('/user/other/main')
    // }
  }

  return (
    <div className={HomeContentItemContainer}>
      <div className={HomeContentItemHead}>
        <img src={tweet.tweetOwnerAvatar} alt="Image" onClick={handleAvatarClick} id={id}></img>
      </div>
      <div className={HomeContentItemDescreption}>
        <div>
          <span className={posterName}>{tweet.tweetOwnerName}</span>
          <span className={posterAccount}>@{tweet.tweetOwnerAccount}</span>
          <span className={postTime}>・<HoursPassed item={tweet.createdAt}/></span>
        </div>
        <p className={postDescription} onClick={() => {
          handleGoReplyList()
          onTheTweetId(TweetId)
        }
        }>
          {tweet.description}
        </p>

        <div className={postIcon}>
          <UserReplyModal
            show={show}
            onClose={handleClose}
            onShow={handleShow}
            text={text}
            tweet={tweet}
            onChange={handleChange}
            onUserReply={onUserReply}
            onUserTextWarning={handleUserTextWarning}
            userTextNothing={userTextNothing}
          >
            <div className={reply} onClick={handleShow}>
              <img src={replyIcon} alt="" />
              <div>
                {tweet.replyCount}
              </div>
            </div>
          </UserReplyModal>
          <div className={like}>
            <div onClick={() => handleLikeIcon(TweetId)}>
                {tweet.isLiked ? <img src={likeIconClick} alt="" /> : <img src={likeIcon} alt="" />}
            </div>
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
