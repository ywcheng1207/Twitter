import styles from './HomeContentItem.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'
import homepageDummy from 'dummyData/homepageDummy'

const HomeContentItem = () => {
  const {
    HomeContentItemContainer, HomeContentItemHead, HomeContentItemDescreption,
    posterName, posterAccount, postDescription, postIcon, reply, replyCount, like, likeCount
  } = styles

  return (
    <div className={HomeContentItemContainer}>

      <div className={HomeContentItemHead}>
        <img src={homepageDummy[0].userId.avatar} alt="Image"></img>
      </div>

      <div className={HomeContentItemDescreption}>
        <div>
          <span className={posterName}>Apple</span>
          <span className={posterAccount}>@apple ‧ 3小時</span>
        </div>
        <p className={postDescription}>
          {homepageDummy[0].description}
        </p>
        <div className={postIcon}>

          <span className={reply}>
            <img src={replyIcon} alt="" />
            <div className={replyCount}>
              {homepageDummy[0].replyCount}
            </div>
          </span>

          <span className={like}>
            <img src={likeIcon} alt="" />
            <div className={likeCount}>
              {homepageDummy[0].likeCount}
            </div>
          </span>

        </div>
      </div>

    </div>
  )
}

export default HomeContentItem
