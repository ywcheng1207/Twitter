import styles from './OtherHead.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import arrow from 'assets/icons/leftArrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import { ReactComponent as Bell } from 'assets/icons/bell.svg'
import { ReactComponent as Mail } from 'assets/icons/mail.svg'

const OtherHead = ({ otherUser, onFollowClick }) => {
  const {
    container, headerText, selfInfoContainer, backgroundImg,
    btnContainer, selfInfo, userAvatar, userName, account, description,
    followContainer, following, follower, tweetsCount, header, follow, btnWidth
  } = styles

  const navigate = useNavigate()

  const handleText = () => {
    navigate(-1)
  }

  return (
    <div className={container}>
        <div className={header}>
            <img src={arrow} alt="" onClick={() => handleText()}/>
            <div className={headerText}>
              <h4 className='Bold'>{otherUser.name}</h4>
              <span className={tweetsCount}>{otherUser.tweetCount} 貼文</span>
            </div>
        </div>
        <div className={selfInfoContainer}>
            <div className={backgroundImg}>
              <img src={otherUser.cover} alt="" />
            </div>
            <div className={btnContainer}>
                <div className={btnContainer} >
                    <Mail/>
                    <Bell />
                    <div className={clsx(btnWidth, { [follow]: otherUser.isFollowed })} onClick={onFollowClick} >
                        <Button
                            value={ otherUser.isFollowed ? '正在跟隨' : '跟隨'}
                            type={ otherUser.isFollowed ? 'fullPill' : 'holePill' }
                        />
                    </div>
                </div>
            </div>
            <img className={userAvatar} src={otherUser.avatar} alt="avatar" />
            <div className={selfInfo} >
              <p className={userName}>{otherUser.name}</p>
              <p className={account}>{otherUser.account}</p>
              <p className={description} >{otherUser.introduction}</p>
              <div className={followContainer} >
                  <p className={following}>
                    <Link to='/user/follow/main'>{otherUser.followingCount}個</Link> <span>追隨中</span>
                  </p>
                  <p className={follower}>
                    <Link to='/user/follow/main' >{otherUser.followerCount}位</Link> <span>跟隨者</span>
                  </p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default OtherHead
