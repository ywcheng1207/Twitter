import styles from './PersonalInfoHead.module.scss'
// import Button from 'component/element/element_basic/Button/Button'
import arrow from 'assets/icons/leftArrow.svg'
import { Link } from 'react-router-dom'
import PersonInfoModal2 from 'component/element/element_mid/PersonlInfoModal/PersonalInfoModal2'
// import PersonInfoModal from '../PersonlInfoModal/PersonInfoModal'

const PersonalInfoHead = ({
  userHead, inroduction, theUserName, followerCount,
  followingCount, onEditClick, onTextClick, show, onShow, onSaveInfo,
  onClose, imageSrc, onOnPreview, onDeletePreview, onNameChange, onIntroductionChange, onSaveClick, onOnAvatar, modalAvatar, avatarStatus, coverStatus, onClickUpload, inputfileref
}) => {
  const {
    container, headerText, selfInfoContainer, backgroundImg,
    btnContainer, selfInfo, userAvatar, account, introduction,
    followContainer, following, follower, tweetsCount, header, userName
  } = styles
  // const navigate = useNavigate()
  // const handleClose = () => { setShow(false) }
  // const handleShow = () => {setShow(true)}
  // const handleText = () => { navigate(-1) }

  return (
    <div className={container}>
        <div className={header}>
            <img src={arrow} alt="" onClick={() => onTextClick()}/>
            <div className={headerText}>
              <h4 className='Bold'>{userHead.name}</h4>
              <span className={tweetsCount}>{userHead.tweetCount} 貼文</span>
            </div>
        </div>
        <div className={selfInfoContainer}>
            <div className={backgroundImg}>
              <img src={userHead.cover} alt="" />
            </div>
            <div className={btnContainer} onClick={onEditClick}>
              {/* <div className={btnWidth}>
                  <Button value={'編輯個人資料'} type={'holePill'}/>
              </div> */}
               <PersonInfoModal2
                userHead={userHead}
                show={show}
                onClose={onClose}
                onShow={onShow}
                imageSrc={imageSrc}
                onOnPreview={onOnPreview}
                onOnAvatar={onOnAvatar}
                onDeletePreview={onDeletePreview}
                onIntroductionChange={(changeIntroduction) => onIntroductionChange?.(changeIntroduction)}
                onNameChange = {onNameChange}
                onSaveClick={onSaveClick}
                modalAvatar={modalAvatar}
                coverStatus={coverStatus}
                avatarStatus={avatarStatus}
                onClickUpload={onClickUpload}
                inputfileref={inputfileref}
                theUserName={theUserName}
                inroduction={inroduction}
                onSaveInfo={onSaveInfo}
               />
            </div>
            <img className={userAvatar} src={userHead.avatar} alt="avatar" />
            <div className={selfInfo} >
              <p className={userName}>{userHead.name}</p>
              <p className={account}>{userHead.account}</p>
              <p className={introduction} >{userHead.introduction}</p>
              <div className={followContainer} >
                  <p className={following}>
                    <Link to='/user/follow/main'>{followingCount}個</Link> <span>追隨中</span>
                  </p>
                  <p className={follower}>
                    <Link to='/user/follow/main' >{followerCount}位</Link> <span>跟隨者</span>
                  </p>
              </div>
            </div>
        </div>
        {/* <PersonInfoModal
             show={show}
             onClose={handleClose}
             onShow={handleShow}
             onNameChange={(value) => onNameChange?.(value)}
             onIntroductionChange={(value) => onIntroductionChange?.(value)}
             onBtnClick={(image, avatar) => onBtnClick?.(image, avatar)}
             userHead={userHead}
             formData={formData}
        /> */}

    </div>
  )
}

export default PersonalInfoHead
