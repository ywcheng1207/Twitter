import { useState, useEffect } from 'react'
import styles from './PostContentHead.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'
import UserReplyModal from 'component/element/element_mid/UserReplyModal/UserReplyModal'
import { getSingleTweetInfo } from 'api/user'

const PostContentHead = () => {
  const {
    PostContentHeadContainer, postHead, info, postDescription,
    postTime, postCount, postIcon, reply, like, replyBtn, likeBtn
  } = styles

  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [tweetOwnerInfo, setTweetOwner] = useState([])

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

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    const TweetId = localStorage.getItem('TweetId')
    // console.log(TweetId)
    const getDataAsync = async ({ authToken, TweetId }) => {
      try {
        const data = await getSingleTweetInfo({ authToken, TweetId })
        setTweetOwner(data)
        console.log(data)
        console.log(tweetOwnerInfo)
      } catch (error) {
        console.error(error)
      }
    }
    if (authToken) {
      getDataAsync({ authToken, TweetId })
    }
  }, [])

  return (
    <div className={PostContentHeadContainer}>
      <div className={postHead}>
        <img src={tweetOwnerInfo.tweetOwnerAvatar} alt="" />
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
        >
          <img className={replyBtn} src={replyIcon} alt="" onClick={handleShow}/>
        </UserReplyModal>
        <img className={likeBtn} src={likeIcon} alt="" />
      </div>
    </div>
  )
}
export default PostContentHead
