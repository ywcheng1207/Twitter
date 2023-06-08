import styles from './TweetListCard.module.scss'
import HoursPassed from '../../element/element_basic/HoursPassed/HoursPassed'
import { ReactComponent as X } from 'assets/icons/iconX.svg'

const TweetListCard = ({ data, onDelete }) => {
  const { cardContainer, avatatContainer, cardInfoContainer, name, tweetText, avatar, iconX, account } = styles
  return (
    data.map(item => {
      return (
              <div className={cardContainer} key={item.tweetId}>
                  <div className={avatatContainer}>
                      <img src={item.userId.avatar} alt="avatar" className={avatar} />
                  </div>
                  <div className={cardInfoContainer}>
                      <div>
                            <span className={name}>{item.userId.name}</span>
                            <span className={account}>
                                @{item.userId.account}．
                                <HoursPassed item={item}/>
                            </span>

                      </div>
                      <div className={tweetText}>
                          {item.description}
                      </div>
                  </div>
                  <X className={iconX} onClick={() => {
                    onDelete?.(item.tweetId)
                  }} />
              </div>
      )
    })

  )
}

export default TweetListCard
