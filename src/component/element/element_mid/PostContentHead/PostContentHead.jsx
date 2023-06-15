import { useState, useEffect } from 'react'
import styles from './PostContentHead.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'
import likeIconClick from 'assets/icons/likeClick.svg'
import UserReplyModal from 'component/element/element_mid/UserReplyModal/UserReplyModal'
import { getSingleTweetInfo, userLikeTweet, userUnLikeTweet } from 'api/user'
import { useUserPostModal, useUserReplyModal } from 'contexts/UserMainPageContext'
import { useNavigate } from 'react-router-dom'

const PostContentHead = () => {
  const {
    PostContentHeadContainer, postHead, info, postDescription,
    postTime, postCount, postIcon, reply, like, replyBtn, likeBtn
  } = styles

  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [tweetOwnerInfo, setTweetOwner] = useState([])
  const [userTextNothing, setUserTextNoting] = useState(false)
  const navigate = useNavigate()
  //
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

  // Home頁面的context
  const { onLike, onUnLike } = useUserPostModal()
  const { onUserReply } = useUserReplyModal()

  //
  const handleLikeIcon = async () => {
    const authToken = localStorage.getItem('authToken')
    const TweetId = localStorage.getItem('TweetId')
    try {
      if (tweetOwnerInfo.isLiked === true) {
        await userUnLikeTweet({ authToken, TweetId })
        setTweetOwner(pre => {
          return { ...pre, isLiked: false, likeCount: tweetOwnerInfo.likeCount - 1 }
        })
        onUnLike(TweetId)
      } else {
        await userLikeTweet({ authToken, TweetId })
        setTweetOwner(pre => {
          return { ...pre, isLiked: true, likeCount: tweetOwnerInfo.likeCount + 1 }
        })
        onLike(TweetId)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    const TweetId = localStorage.getItem('TweetId')
    const getDataAsync = async ({ authToken, TweetId }) => {
      try {
        const data = await getSingleTweetInfo({ authToken, TweetId })
        setTweetOwner(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (authToken) {
      getDataAsync({ authToken, TweetId })
    }
  }, [localStorage.getItem('replyListLength')])

  // 點擊頭像移動
  const handleAvatarClick = () => {
    const clickId = tweetOwnerInfo.tweetOwnerId
    const userId = localStorage.getItem('id')
    if (Number(clickId) === Number(userId)) {
      navigate('/user/personalinfo/main')
    } else {
      localStorage.setItem('otherId', clickId)
      navigate('/user/other/main')
    }
  }

  return (
    <div className={PostContentHeadContainer}>
      <div className={postHead}>
        <img src={tweetOwnerInfo.tweetOwnerAvatar} alt="" onClick={handleAvatarClick}/>
        <div className={info}>
          <div>{tweetOwnerInfo.tweetOwnerName}</div>
          <span>@{tweetOwnerInfo.tweetOwnerAccount}</span>
        </div>
      </div>
      <div className={postDescription}>
          {tweetOwnerInfo.description}
      </div>
      <div className={postTime}>
        <span>{tweetOwnerInfo.createdAt}</span>
      </div>
      <div className={postCount}>
        <div className={reply}>
          <span>{tweetOwnerInfo.replyCount}</span>
          <a>回覆</a>
        </div>
        <div className={like}>
          <span>{tweetOwnerInfo.likeCount}</span>
          <a>喜歡次數</a>
        </div>
      </div>
      <div className={postIcon}>
        <UserReplyModal
          show={show}
          onClose={handleClose}
          onShow={handleShow}
          text={text}
          onChange={handleChange}
          tweet={tweetOwnerInfo}
          onUserReply={onUserReply}
          onUserTextWarning={handleUserTextWarning}
          userTextNothing={userTextNothing}
        >
          <img className={replyBtn} src={replyIcon} alt="" onClick={handleShow}/>
        </UserReplyModal>
         <div onClick={() => handleLikeIcon()}>
             {tweetOwnerInfo.isLiked
               ? <img className={likeBtn} src={likeIconClick} alt="" />
               : <img className={likeBtn} src={likeIcon} alt="" />}
         </div>
      </div>
    </div>
  )
}
export default PostContentHead
