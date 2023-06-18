import { useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './PersonInfoModal2.module.scss'
import { ReactComponent as Photo } from 'assets/icons/photo.svg'
import { ReactComponent as PhotoX } from 'assets/icons/photoX.svg'
import clsx from 'clsx'

function Example ({
  userHead, show, onShow, theUserName, inroduction, onSaveInfo,
  onClose, imageSrc, onOnPreview, onDeletePreview, onNameChange, onIntroductionChange, onSaveClick, onOnAvatar, modalAvatar, coverStatus, avatarStatus, onClickUpload, inputfileref
}) {
  const { btn, closeBtn, headerTitle, saveBtn, defaultAvatar, upAvatar, defaultCover, overUpload, photoContainer, photoXContainer } = styles

  const avatarRef = useRef()

  const handleOnAvatarUpload = () => {
    avatarRef.current.click()
  }
  return (
    <>
      <button className={`rounded-pill ${btn}`} onClick={onShow}>編輯個人資料</button>
      <Modal contentClassName={styles.modalContainer} show={show} onHide={onClose} animation={false}>
        <Modal.Header className={styles.modalHeaderContainer} >
          <div onClick={onClose} className={closeBtn}>&times;</div>
          <div className={headerTitle}>編輯個人資料</div>
          <button className={`rounded-pill ${saveBtn}`} onClick={onSaveInfo} >儲存</button>
        </Modal.Header>
        <Modal.Body className={styles.modalBodyContainer}>
          <div className={styles.modalBody}>
              <div className={styles.bodyCover}>
                <img className={clsx(defaultCover, { [overUpload]: coverStatus })} src={userHead.cover} alt="" />
                <input
                  type="file"
                  accept="image/*"
                  className={styles.coverInput}
                  onChange={onOnPreview}
                  inputfileref={inputfileref}
                  ref={inputfileref}
                />
                <img className={styles.selectCover} src={imageSrc} alt="" />
                <div className={styles.photoIcon}>
                  <div className={photoContainer}>
                    <Photo onClick={onClickUpload} />
                  </div>
                  <div className={clsx(photoXContainer, { [overUpload]: !coverStatus })}>
                    <PhotoX onClick={onDeletePreview}/>
                  </div>
                </div>
              </div>
              <div className={styles.bodyAvatar}>
                <img src={userHead.avatar} alt="" className={clsx(defaultAvatar, { [overUpload]: avatarStatus })} />
                <img src={modalAvatar} alt="" className={upAvatar} />
                <input
                  type="file"
                  accept="image/*"
                  className={styles.coverInput}
                  onChange={onOnAvatar}
                  ref={avatarRef}
                />
                <div className={styles.photoIcon}>
                  <Photo onClick={handleOnAvatarUpload} />
                </div>
              </div>
          </div>
          <div className={styles.modalFooter}>
            <div className={styles.nameInputContainer}>
              <p>名稱</p>
                <input
                  className={styles.nameInput}
                  defaultValue={theUserName}
                  onChange={(event) => onNameChange?.(event.target.value)}
                  />
            </div>
            <div className={styles.descriptMessageContainer}>
              {theUserName.length > 50 && <span className={styles.error}>字數超出上限！</span>}
              <span className={styles.count}>{theUserName.length}/50</span>
            </div>
            <div className={styles.discriptionInputContainer}>
              <p>自我介紹</p>
                <textarea
                  className={styles.postTextarea}
                  cols="65"
                  rows="4"
                  placeholder='有什麼新鮮事？'
                  defaultValue={inroduction}
                  onChange={(event) => onIntroductionChange?.(event.target.value)}
                />
            </div>
            <div className={styles.descriptMessageContainer}>
              {inroduction.length > 160 && <span className={styles.error}>字數超出上限！</span>}
              <span className={styles.count}>{inroduction.length}/160</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Example
