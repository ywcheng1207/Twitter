import styles from './PostContentItem.module.scss'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'

const PostContentItem = () => {
  const { PostContentItemContainer } = styles
  return (
    <div className={PostContentItemContainer}>
      <img src={avatarUrl} alt="" />
      <div>
        <div>
          <span>Devon Lane</span>
          <a>@devon_lane・12 小時</a>
        </div>
        <div>
          回覆 @apple
        </div>
        <div>
          former apple engineer shares a simple DIY fix
          to seal your surgical mask
        </div>
      </div>
    </div>
  )
}

export default PostContentItem
