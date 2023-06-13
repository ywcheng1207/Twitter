import HeaderTweet from 'component/element/element_basic/HeaderTweet/HeaderTweet'
import PostContentHead from 'component/element/element_mid/PostContentHead/PostContentHead'
import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import styles from './ReplyList.module.scss'
import { useNavigate } from 'react-router-dom'
import { getSingleTweet } from 'api/user'
import { useEffect, useState } from 'react'

const ReplyListContent = () => {
  const [replyList, setReplyList] = useState([])

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    const TweetId = localStorage.getItem('TweetId')
    console.log(TweetId)
    const getUserDataAsync = async ({ authToken, TweetId }) => {
      try {
        const data = await getSingleTweet({ authToken, TweetId })
        if (data.length > 0) {
          setReplyList(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    if (authToken) {
      getUserDataAsync({ authToken, TweetId })
    }
  }, [])

  if (replyList.length > 0) {
    return replyList.map((item) => <PostContentItem key={item.replyId} tweet={item} reply='true' />)
  }
}

const ReplyList = () => {
  const { HeaderTweetContainer, PostContentList } = styles
  const navigate = useNavigate()
  return (
    <div>
      <div className={HeaderTweetContainer} onClick={() => navigate(-1)}>
        <HeaderTweet />
      </div>
      <PostContentHead />
      <div className={PostContentList}>
          <ReplyListContent />
      </div>
    </div>
  )
}

export default ReplyList
