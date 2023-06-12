import styles from './PersonalInfoHead.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import arrow from 'assets/icons/leftArrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import PersonInfoModal from '../PersonlInfoModal/PersonInfoModal'
import { useState } from 'react'
// import defaultImg from 'assets/pngs/defaultBackground.png'
// import defaultAvatar from 'assets/pngs/defaultAvatar.png'

// const dummyData = {
//   id: 204,
//   name: 'user1',
//   account: 'user1',
//   email: 'user1@example.com',
//   avatar: 'https://loremflickr.com/320/240/icon?lock=3',
//   cover: 'https://loremflickr.com/320/240/mountain?lock=3',
//   role: 'user',
//   introduction: '333',
//   createdAt: '2023-06-12T04:26:56.000Z',
//   updatedAt: '2023-06-12T12:33:15.000Z',
//   tweetCount: 2,
//   followerCount: 0,
//   followingCount: 0
// }

const PersonalInfoHead = ({ userHead, setUserHead }) => {
  const {
    container, headerText, selfInfoContainer, backgroundImg,
    btnContainer, selfInfo, userAvatar, account, description,
    followContainer, following, follower, tweetsCount, btnWidth, header, userName
  } = styles
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => setShow(true)

  const handleText = () => {
    navigate(-1)
  }

  const handleNameChange = (value) => {
    setUserHead({
      ...userHead,
      name: value
    })
  }

  const handleIntroductionChange = (value) => {
    setUserHead({
      ...userHead,
      introduction: value
    })
  }

  const handleBtnClick = (image, avatar) => {
    setUserHead({
      ...userHead,
      avatar,
      cover: image
    })
  }

  return (
    <div className={container}>
        <div className={header}>
            <img src={arrow} alt="" onClick={() => handleText()}/>
            <div className={headerText}>
              <h4 className='Bold'>{userHead.name}</h4>
              <span className={tweetsCount}>{userHead.tweetCount} 貼文</span>
            </div>
        </div>
        <div className={selfInfoContainer}>
            <div className={backgroundImg}>
              <img src={userHead.cover} alt="" />
            </div>
            <div className={btnContainer} onClick={handleShow}>
              <div className={btnWidth}>
                  <Button value={'編輯個人資料'} type={'holePill'}/>
              </div>
            </div>
            <img className={userAvatar} src={userHead.avatar} alt="avatar" />
            <div className={selfInfo} >
              <p className={userName}>{userHead.name}</p>
              <p className={account}>{userHead.account}</p>
              <p className={description} >{userHead.introduction}</p>
              <div className={followContainer} >
                  <p className={following}>
                    <Link to='/user/follow/main'>{userHead.followingCount}個</Link> <span>追隨中</span>
                  </p>
                  <p className={follower}>
                    <Link to='/user/follow/main' >{userHead.followerCount}位</Link> <span>跟隨者</span>
                  </p>
              </div>
            </div>
        </div>
        <PersonInfoModal
             show={show}
             onClose={handleClose}
             onShow={handleShow}
             onNameChange={handleNameChange}
             onIntroductionChange={handleIntroductionChange}
             onBtnClick={handleBtnClick}
             userHead={userHead}

        />

    </div>
  )
}

export default PersonalInfoHead
