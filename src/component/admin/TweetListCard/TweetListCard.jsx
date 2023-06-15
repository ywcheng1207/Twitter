import styles from './TweetListCard.module.scss'
import HoursPassed from '../../element/element_basic/HoursPassed/HoursPassed'
import { ReactComponent as X } from 'assets/icons/iconX.svg'

const TweetListCard = ({ data, onDelete }) => {
  const { cardContainer, avatatContainer, cardInfoContainer, name, tweetText, avatar, iconX, account } = styles
  return (
    data.map(item => {
      return (
              <div className={cardContainer} key={item.TweetId}>
                  <div className={avatatContainer}>
                      <img src={item.tweetOwnerAvatar} alt="avatar" className={avatar} />
                  </div>
                  <div className={cardInfoContainer}>
                      <div>
                            <span className={name}>{item.tweetOwnerName}</span>
                            <span className={account}>
                                @{item.tweetOwnerAccount}．
                                <HoursPassed item={item.createdAt}/>
                            </span>

                      </div>
                      <div className={tweetText}>
                          {item.description}
                      </div>
                  </div>
                  <X className={iconX} onClick={() => {
                    onDelete?.(item.TweetId)
                  }} />
              </div>
      )
    })

  )
}

export default TweetListCard
