import styles from './HomeContentItem.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'
// import homepageDummy from 'dummyData/homepageDummy'
import { useNavigate } from 'react-router-dom'

const HomeContentItem = ({ tweet }) => {
  const {
    HomeContentItemContainer, HomeContentItemHead, HomeContentItemDescreption,
    posterName, posterAccount, postDescription, postIcon, reply, like, likeCount
  } = styles
  const navigate = useNavigate()

  const handleReplyList = () => {
    navigate('/user/replylist/main')
    console.log(tweet)
  }
  return (
    <div className={HomeContentItemContainer}>
      <div className={HomeContentItemHead}>
        <img src={tweet.avatar} alt="Image"></img>
      </div>
      <div className={HomeContentItemDescreption}>
        <div>
          <span className={posterName}>Apple</span>
          <span className={posterAccount}>@apple ‧ 3小時</span>
        </div>
        <p className={postDescription} onClick={() => handleReplyList?.()}>
          {tweet.description}
        </p>

        <div className={postIcon}>
          <div className={reply}>
            <img src={replyIcon} alt="" />
            <div>
              {tweet.replyCount}
            </div>
          </div>
          <div className={like}>
            <img src={likeIcon} alt="" />
            <div className={likeCount}>
              {tweet.likeCount}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeContentItem
