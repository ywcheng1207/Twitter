import styles from './PostContentItem.module.scss'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'

const PostContentItem = ({ tweet }) => {
  const {
    PostContentItemContainer, postInfo, posterInfo,
    userName, postDescription
  } = styles
  return (
    <div className={PostContentItemContainer}>
      <img src={avatarUrl} alt="" />
      <div className={postInfo}>
        <div className={posterInfo}>
          <span>user本人</span>
          <a>@user本人的account ・ <HoursPassed item={tweet}/></a>
        </div>
        <div className={userName}>
          <span>回覆</span>
          <a>@user回覆了哪個人</a>
        </div>
        <div className={postDescription}>
          user回覆的內容
        </div>
      </div>
    </div>
  )
}

export default PostContentItem
