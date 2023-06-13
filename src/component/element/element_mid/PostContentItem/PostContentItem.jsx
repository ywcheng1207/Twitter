import styles from './PostContentItem.module.scss'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'
// const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'

const PostContentItem = ({ tweet }) => {
  const {
    PostContentItemContainer, postInfo, posterInfo,
    userName, postDescription, replyerName, posterAccount
  } = styles
  return (
    <div className={PostContentItemContainer}>
      <img src={tweet.replyerAvatar} alt="" />
      <div className={postInfo}>
        <div className={posterInfo}>
          <span className={replyerName}>{tweet.replyerName}</span>
          <a>@{tweet.replyerAccount}・</a>
          <span className={posterAccount}><HoursPassed item={tweet.createdAt}/></span>
        </div>
        <div className={userName}>
          <span>回覆</span>
          <a>@{tweet.tweetOwnerName}</a>
        </div>
        <div className={postDescription}>
          {tweet.comment}
        </div>
      </div>
    </div>
  )
}

export default PostContentItem
