import styles from './OtherHead.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import arrow from 'assets/icons/leftArrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { clsx } from 'clsx'
import { ReactComponent as Bell } from 'assets/icons/bell.svg'
import { ReactComponent as Mail } from 'assets/icons/mail.svg'
// import defaultImg from 'assets/pngs/defaultBackground.png'
// import defaultAvatar from 'assets/pngs/defaultAvatar.png'

const dummyData = {
  id: 304,
  name: 'ray',
  account: 'ray',
  email: 'ray@example.com',
  avatar: 'https://i.imgur.com/q6bwDGO.png',
  cover: 'https://i.imgur.com/1jDf2Me.png',
  role: 'user',
  introduction: null,
  createdAt: '2023-06-12T12:48:48.000Z',
  updatedAt: '2023-06-12T12:48:48.000Z',
  tweetCount: 0,
  followerCount: 0,
  followingCount: 0,
  followed: false
}

const OtherHead = () => {
  const {
    container, headerText, selfInfoContainer, backgroundImg,
    btnContainer, selfInfo, userAvatar, userName, account, description,
    followContainer, following, follower, tweetsCount, header, follow, btnWidth
  } = styles

  const [userInfo, setUserInfo] = useState(dummyData)

  const navigate = useNavigate()

  const handleText = () => {
    navigate(-1)
  }

  const handleClick = () => {
    setUserInfo({
      ...userInfo,
      followed: !userInfo.followed
    })
  }
  const isFollowed = userInfo.followed

  return (
    <div className={container}>
        <div className={header}>
            <img src={arrow} alt="" onClick={() => handleText()}/>
            <div className={headerText}>
              <h4 className='Bold'>{userInfo.name}</h4>
              <span className={tweetsCount}>{userInfo.tweetCount} 貼文</span>
            </div>
        </div>
        <div className={selfInfoContainer}>
            <div className={backgroundImg}>
              <img src={userInfo.cover} alt="" />
            </div>
            <div className={btnContainer} onClick={handleClick}>
                <div className={btnContainer} onClick={handleClick} >
                    <Mail/>
                    <Bell />
                    <div className={clsx(btnWidth, { [follow]: isFollowed })}>
                        <Button
                            value={ userInfo.followed ? '正在跟隨' : '跟隨'}
                            type={ userInfo.followed ? 'fullPill' : 'holePill' }
                        />
                    </div>
                </div>
            </div>
            <img className={userAvatar} src={userInfo.avatar} alt="avatar" />
            <div className={selfInfo} >
              <p className={userName}>{userInfo.name}</p>
              <p className={account}>{userInfo.account}</p>
              <p className={description} >{userInfo.introduction}</p>
              <div className={followContainer} >
                  <p className={following}>
                    <Link to='/user/follow/main'>{userInfo.followingCount}個</Link> <span>追隨中</span>
                  </p>
                  <p className={follower}>
                    <Link to='/user/follow/main' >{userInfo.followerCount}位</Link> <span>跟隨者</span>
                  </p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default OtherHead
