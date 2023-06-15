import HeaderTweet from 'component/element/element_basic/HeaderTweet/HeaderTweet'
import PostContentHead from 'component/element/element_mid/PostContentHead/PostContentHead'
import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import styles from './ReplyList.module.scss'
import { useNavigate } from 'react-router-dom'
import { getSingleTweet } from 'api/user'
import { useEffect, useState } from 'react'

const ReplyListContent = ({ onAvatarClick }) => {
  const [replyList, setReplyList] = useState([])

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    const TweetId = localStorage.getItem('TweetId')

    const getUserDataAsync = async ({ authToken, TweetId }) => {
      try {
        const data = await getSingleTweet({ authToken, TweetId })
        if (data.length > 0) {
          setReplyList(data)
        }
        localStorage.setItem('replyListLength', data.length)
      } catch (error) {
        console.error(error)
      }
    }
    if (authToken) {
      getUserDataAsync({ authToken, TweetId })
    }
  }, [localStorage.getItem('replyListLength')])

  if (replyList.length > 0) {
    return replyList.map((item) => <PostContentItem key={item.replyId} tweet={item} reply='true' onAvatarClick={(clickId) => onAvatarClick?.(clickId) } />)
  }
}

const ReplyList = () => {
  const { HeaderTweetContainer, PostContentList } = styles
  const navigate = useNavigate()

  // 點擊 avatar 至 other 頁面
  const handleAvatarClick = (clickId) => {
    console.log(clickId)
    const userId = localStorage.getItem('id')
    if (Number(clickId) === Number(userId)) {
      navigate('/user/personalinfo/main')
    } else {
      localStorage.setItem('otherId', clickId)
      navigate('/user/other/main')
    }
  }

  return (
    <div>
      <div className={HeaderTweetContainer} onClick={() => navigate(-1)}>
        <HeaderTweet />
      </div>
      <PostContentHead/>
      <div className={PostContentList}>
          <ReplyListContent onAvatarClick={handleAvatarClick} />
      </div>
    </div>
  )
}

export default ReplyList
