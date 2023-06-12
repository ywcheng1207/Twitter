import styles from './OtherHead.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import arrow from 'assets/icons/leftArrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { clsx } from 'clsx'
import { ReactComponent as Bell } from 'assets/icons/bell.svg'
import { ReactComponent as Mail } from 'assets/icons/mail.svg'

const OtherHead = ({ data }) => {
  const {
    container, headerText, selfInfoContainer, backgroundImg,
    btnContainer, selfInfo, userAvatar, userName, account, description,
    followContainer, following, follower, tweetsCount, header, follow, btnWidth
  } = styles

  const navigate = useNavigate()

  const handleText = () => {
    navigate(-1)
  }

  const handleClick = () => {

  }
  return (
    <div className={container}>
        <div className={header}>
            <img src={arrow} alt="" onClick={() => handleText()}/>
            <div className={headerText}>
              <h4 className='Bold'>{data.name}</h4>
              <span className={tweetsCount}>{data.tweetCount} 貼文</span>
            </div>
        </div>
        <div className={selfInfoContainer}>
            <div className={backgroundImg}>
              <img src={data.cover} alt="" />
            </div>
            <div className={btnContainer} onClick={handleClick}>
                <div className={btnContainer} onClick={handleClick} >
                    <Mail/>
                    <Bell />
                    <div className={clsx(btnWidth, { [follow]: data.followed })}>
                        <Button
                            value={ data.followed ? '正在跟隨' : '跟隨'}
                            type={ data.followed ? 'fullPill' : 'holePill' }
                        />
                    </div>
                </div>
            </div>
            <img className={userAvatar} src={data.avatar} alt="avatar" />
            <div className={selfInfo} >
              <p className={userName}>{data.name}</p>
              <p className={account}>{data.account}</p>
              <p className={description} >{data.introduction}</p>
              <div className={followContainer} >
                  <p className={following}>
                    <Link to='/user/follow/main'>{data.followingCount}個</Link> <span>追隨中</span>
                  </p>
                  <p className={follower}>
                    <Link to='/user/follow/main' >{data.followerCount}位</Link> <span>跟隨者</span>
                  </p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default OtherHead
