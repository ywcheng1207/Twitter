// -- import
// 元件
import PersonInfoModal2 from 'component/element/element_mid/PersonlInfoModal/PersonalInfoModal2'
// 樣式/套件
import styles from './PersonalInfoHead.module.scss'
import { Link } from 'react-router-dom'
// 圖片
import arrow from 'assets/icons/leftArrow.svg'

// -- 元件
const PersonalInfoHead = ({
  userHead, inroduction, theUserName, followerCount,
  followingCount, onEditClick, onTextClick, show, onShow, onSaveInfo,
  onClose, imageSrc, onOnPreview, onDeletePreview, onNameChange, onIntroductionChange,
  onSaveClick, onOnAvatar, modalAvatar, avatarStatus, coverStatus, onClickUpload, inputfileref
}) => {
  const {
    container, headerText, selfInfoContainer, backgroundImg,
    btnContainer, selfInfo, userAvatar, account, introduction,
    followContainer, following, follower, tweetsCount, header, userName
  } = styles

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
    </div>
  )
}

export default PersonalInfoHead
