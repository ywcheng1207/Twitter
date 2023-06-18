import styles from './OtherPostContent.module.scss'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'

const OtherPostContent = ({ item }) => {
  const {
    PostContentItemContainer, postInfo, posterInfo,
    userName, postDescription, replyerName, posterAccount
  } = styles

  return (
    <div className={PostContentItemContainer}>
      <img src={item.replyerAvatar} alt="" />
      <div className={postInfo}>
        <div className={posterInfo}>
          <span className={replyerName}>{item.replyerName}</span>
          <a>@{item.replyerAccount}・</a>
          <span className={posterAccount}><HoursPassed item={item.createdAt}/></span>
        </div>
        <div className={userName}>
          <span>回覆</span>
          <a>@{item.tweetOwnerAccount}</a>
        </div>
        <div className={postDescription}>
          {item.comment}
        </div>
      </div>
    </div>
  )
}

export default OtherPostContent
