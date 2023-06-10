import styles from './PostContentItem.module.scss'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'

const PostContentItem = () => {
  const {
    PostContentItemContainer, postInfo, posterInfo,
    userName, postDescription
  } = styles
  return (
    <div className={PostContentItemContainer}>
      <img src={avatarUrl} alt="" />
      <div className={postInfo}>
        <div className={posterInfo}>
          <span>Devon Lane</span>
          <a>@devon_lane・12 小時</a>
        </div>
        <div className={userName}>
          <span>回覆</span>
          <a>@apple</a>
        </div>
        <div className={postDescription}>
          former apple engineer shares a simple DIY fix
          to seal your surgical mask
        </div>
      </div>
    </div>
  )
}

export default PostContentItem
