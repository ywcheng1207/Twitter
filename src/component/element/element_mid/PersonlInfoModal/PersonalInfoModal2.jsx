import { useRef } from 'react'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import styles from './PersonInfoModal2.module.scss'
import { ReactComponent as Photo } from 'assets/icons/photo.svg'
import { ReactComponent as PhotoX } from 'assets/icons/photoX.svg'
import clsx from 'clsx'

function Example ({
  userHead, show, onShow,
  onClose, imageSrc, onOnPreview, onDeletePreview, onNameChange, onIntroductionChange, onSaveClick, onOnAvatar, modalAvatar, coverStatus, avatarStatus, onClickUpload, inputfileref
}) {
  const { btn, closeBtn, headerTitle, saveBtn, defaultAvatar, upAvatar, defaultCover, overUpload, photoContainer, photoXContainer } = styles

  // 上傳圖片
  // const inputFileRef = useRef()

  // const handleOnClickUpload = () => {
  //   inputFileRef.current.click()
  // }
  const avatarRef = useRef()

  const handleOnAvatarUpload = () => {
    avatarRef.current.click()
  }

  return (
    <>
      {/* <Button variant="primary" onClick={onShow}>
        編輯個人資料
      </Button> */}
      <button className={`rounded-pill ${btn}`} onClick={onShow}>編輯個人資料</button>
      <Modal contentClassName={styles.modalContainer} show={show} onHide={onClose} animation={false}>
        <Modal.Header className={styles.modalHeaderContainer} >
          <div onClick={onClose} className={closeBtn}>&times;</div>
          <div className={headerTitle}>編輯個人資料</div>
          <button className={`rounded-pill ${saveBtn}`} onClick={() => {
            onSaveClick()
            onClose()
          }} >儲存</button>
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
                  defaultValue={userHead.name}
                  onChange={(event) => onNameChange?.(event.target.value)}
                  />
            </div>
            <div className={styles.discriptionInputContainer}>
              <p>自我介紹</p>
                <textarea
                  className={styles.postTextarea}
                  cols="65"
                  rows="4"
                  placeholder='有什麼新鮮事？'
                  defaultValue={userHead.introduction}
                  onChange={(event) => onIntroductionChange?.(event.target.value)}
                />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Example
