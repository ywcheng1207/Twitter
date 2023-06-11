import styles from './PersonalInfoHead.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import arrow from 'assets/icons/leftArrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import PersonInfoModal from '../PersonlInfoModal/PersonInfoModal'
import { useState } from 'react'
import defaultImg from 'assets/pngs/defaultBackground.png'
import defaultAvatar from 'assets/pngs/defaultAvatar.png'


const PersonalInfoHead = () => {
  const {
    container, headerText, selfInfoContainer, backgroundImg,
    btnContainer, selfInfo, avatar, name, account, description,
    followContainer, following, follower, tweetsCount, btnWidth, header
  } = styles

  const [show, setShow] = useState(false)
  const [userName, setUserName] = useState('hoe dow')
  const [discription, setDiscription] = useState('12345687545')
  const [personalBGC, setPersonalBGC] = useState(defaultImg)
  const [personalAvatar, setPersonalAvatar] = useState(defaultAvatar)

  const navigate = useNavigate()

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => setShow(true)

  const handleNameChange = value => {
    setUserName(value)
  }
  const handleDiscriptionChange = (value) => {
    setDiscription(value)
  }


  const handleBtnClick = (image, avatar) => {
    setPersonalBGC(image)
    setPersonalAvatar(avatar)
  }


  const handleText = () => {
    navigate(-1)
  }

  return (
    <div className={container}>
        <div className={header}>
            <img src={arrow} alt="" onClick={() => handleText()}/>
            <div className={headerText}>
              <h4 className='Bold'>john dow</h4>
              <span className={tweetsCount}>25 推文</span>
            </div>
        </div>
        <div className={selfInfoContainer}>
            <div className={backgroundImg}>
              <img src={personalBGC} alt="" />
            </div>
            <div className={btnContainer} onClick={handleShow}>
              <div className={btnWidth}>
                <Button value={'編輯個人資料'} type={'holePill'}/>
              </div>
            </div>
            <img className={avatar} src={personalAvatar} alt="avatar" />
            <div className={selfInfo} >
              <p className={name}>jofn dow</p>
              <p className={account}>@jeyjohn</p>
              <p className={description} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
              <div className={followContainer} >
                  <p className={following}>
                    <Link to='/user/follow/main'>34個</Link> <span>追隨中</span>
                  </p>
                  <p className={follower}>
                    <Link to='/user/follow/main' >59位</Link> <span>跟隨者</span>
                  </p>
              </div>
            </div>
        </div>
        <PersonInfoModal
             show={show}
             onClose={handleClose}
             onShow={handleShow}
             userName={userName}
             discription={discription}
             onNameChange={handleNameChange}
             onDiscriptionChange={handleDiscriptionChange}
             onBtnClick={handleBtnClick}
        />

    </div>
  )
}

export default PersonalInfoHead
