import styles from './UserListItem.module.scss'
import { ReactComponent as Tweet } from 'assets/icons/tweet.svg'
import { ReactComponent as Like } from 'assets/icons/like.svg'

const Card = ({ item }) => {
  return (
        <div className={styles.cardContainer}>
            <div className={styles.cardBgImgContainer}>
                <img src={item.cover} alt="cover" />
            </div>
            <div className={styles.cardAvatarContainer}>
                <img src={item.avatar} alt="" />
            </div>
            <div className={styles.cardInfoContainer}>
                <p className={styles.name}>
                    {item.name}
                </p>
                <p className={styles.account}>
                    @{item.account}
                </p>
                <div className={styles.tweetsAndLikes}>
                    <div className={styles.tweets}>
                        <Tweet/>
                        <p>{item.tweetCount}</p>
                    </div>
                    <div className={styles.likes}>
                        <Like />
                        <p>{item.likeCount}</p>
                    </div>
                </div>
                <div className={styles.followerAndIng}>
                    <div className={styles.following}>
                        <p>
                            <a href="">{item.following}個</a>跟隨中
                        </p>
                    </div>
                    <div className={styles.follower}>
                        <p>
                            <a href="">{item.follower}位</a>
                            跟隨者
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

const UserListItem = ({ data }) => {
  return (
    data.map(item => {
      return (
            <Card key={item.id} item={item} />
      )
    })
  )
}

export default UserListItem
