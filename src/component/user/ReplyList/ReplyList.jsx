import HeaderTweet from 'component/element/element_basic/HeaderTweet/HeaderTweet'
import PostContentHead from 'component/element/element_mid/PostContentHead/PostContentHead'
import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import styles from './ReplyList.module.scss'
import { useNavigate } from 'react-router-dom'

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
        <PostContentItem />
        <PostContentItem />
        <PostContentItem />
        <PostContentItem />
        <PostContentItem />
        <PostContentItem />
        <PostContentItem />
        <PostContentItem />
      </div>
    </div>
  )
}

export default ReplyList
