import styles from './PostContentItem.module.scss'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'
// const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'

const PostContentItem = ({ tweet, reply, onAvatarClick }) => {
  let Avatar
  let ReplyerName
  let ReplyerAccount
  if (reply) {
    Avatar = tweet.replyOwnerAvatar
    ReplyerName = tweet.replyOwnerName
    ReplyerAccount = tweet.replyOwnerAccount
  } else {
    Avatar = tweet.replyerAvatar
    ReplyerName = tweet.replyerName
    ReplyerAccount = tweet.replyerAccount
  }

  const {
    PostContentItemContainer, postInfo, posterInfo,
    userName, postDescription, replyerName, posterAccount
  } = styles

  return (
    <div className={PostContentItemContainer}>
      <img src={Avatar} alt="" onClick={() => onAvatarClick?.(tweet.replyOwnerId)} />
      <div className={postInfo}>
        <div className={posterInfo}>
          <span className={replyerName}>{ReplyerName}</span>
          <a>@{ReplyerAccount}・</a>
          <span className={posterAccount}><HoursPassed item={tweet.createdAt}/></span>
        </div>
        <div className={userName}>
          <span>回覆</span>
          <a>@{tweet.tweetOwnerAccount}</a>
        </div>
        <div className={postDescription}>
          {tweet.comment}
        </div>
      </div>
    </div>
  )
}

export default PostContentItem
