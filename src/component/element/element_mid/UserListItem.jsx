import styles from './UserListItem.module.scss'
import { ReactComponent as Tweet } from 'assets/icons/tweet.svg'
import { ReactComponent as Like } from 'assets/icons/like.svg'

const dummyList =
  {
    id: 12,
    name: 'user1',
    account: 'user1',
    avatar: 'https://loremflickr.com/320/240/people/?random=9.556532493647829',
    cover: 'https://loremflickr.com/320/240/mountain/?random=61.42141615044277',
    tweetCount: 10,
    follower: 0,
    following: 0,
    likeCount: 0
  }

const UserListItem = () => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardBgImgContainer}>
            <img src={dummyList.cover} alt="cover" />
        </div>
        <div className={styles.cardAvatarContainer}>
            <img src={dummyList.avatar} alt="" />
        </div>
        <div className={styles.cardInfoContainer}>
            <div className={styles.name}>
                <p>{dummyList.name}</p>
            </div>
            <div className={styles.account}>
                <p>@{dummyList.account}</p>
            </div>
            <div className={styles.tweetsAndLikes}>
                <div className={styles.tweets}>
                    <Tweet/>
                    <p>{dummyList.tweetCount}</p>
                </div>
                <div className={styles.likes}>
                    <Like />
                    <p>{dummyList.likeCount}</p>
                </div>
            </div>
            <div className={styles.followerAndIng}>
                <div className={styles.following}>
                    <p>
                        <a href="">{dummyList.following}個</a>跟隨中
                    </p>
                </div>
                <div className={styles.follower}>
                    <p>
                        <a href="">{dummyList.follower}位</a>
                        追隨者
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserListItem
