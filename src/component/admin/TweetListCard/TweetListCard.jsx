// -- import
// 樣式
import styles from './TweetListCard.module.scss'
// 元件
import HoursPassed from '../../element/element_basic/HoursPassed/HoursPassed'
import AdminDeleteModal from 'component/element/element_mid/AdminDeleteModal/AdminDeleteModal'

// -- 元件
const TweetListCard = ({ data, onDelete }) => {
  const {
    cardContainer,
    avatatContainer,
    cardInfoContainer,
    name,
    tweetText,
    avatar,
    account
  } = styles

  return data.map(item => {
    return (
      <div className={cardContainer} key={item.TweetId}>
        <div className={avatatContainer}>
          <img src={item.tweetOwnerAvatar} alt='avatar' className={avatar} />
        </div>
        <div className={cardInfoContainer}>
          <div>
            <span className={name}>{item.tweetOwnerName}</span>
            <span className={account}>
              @{item.tweetOwnerAccount}．
              <HoursPassed item={item.createdAt} />
            </span>
          </div>
          <div className={tweetText}>{item.description}</div>
        </div>
        <AdminDeleteModal onDelete={onDelete} TweetId={item.TweetId} />
      </div>
    )
  })
}

export default TweetListCard
