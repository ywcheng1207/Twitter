import HeaderTweet from 'component/element/element_basic/HeaderTweet/HeaderTweet'
import PostContentHead from 'component/element/element_mid/PostContentHead/PostContentHead'
import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import styles from './ReplyList.module.scss'

const ReplyList = () => {
  const { HeaderTweetContainer, PostContentList } = styles
  return (
    <div>
      <div className={HeaderTweetContainer}>
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
