import Modal from 'react-bootstrap/Modal'
import styles from './PersonInfoModal.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import { ReactComponent as Photo } from 'assets/icons/photo.svg'
import { ReactComponent as PhotoX } from 'assets/icons/photoX.svg'
// import defaultImg from 'assets/pngs/defaultBackground.png'
// import defaultAvatar from 'assets/pngs/defaultAvatar.png'
import { useState, useRef } from 'react'

function PersonInfoModal ({ show, onClose, userHead, onShow, onNameChange, onIntroductionChange, onBtnClick, formData, setUserHead }) {
  const modalAvatar = localStorage.getItem('modalAvatar')
  const modalCover = localStorage.getItem('modalCover')
  const fileInputRef = useRef(modalCover)
  const AvatarInputRef = useRef(modalAvatar)
  const [image, setImage] = useState(fileInputRef.current)
  const [avatar, setAvatar] = useState(AvatarInputRef.current)

  const handleBackgroundSVGClick = (event) => {
    fileInputRef.current.click()
    const file = event.target.files
    console.log('上传文件:', file)
  }
  const handleBackgroundChange = (event) => {
    console.log(event.target.files)
    const file = event.target.files[0]
    formData.append('cover', file)
    const reader = new FileReader()
    reader.addEventListener('load', function () {
      setImage(reader.result)
    }, false)

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  const handleXClick = () => {
    setImage(modalCover)
  }

  const handleAvatarSVGClick = (event) => {
    AvatarInputRef.current.click()
    const file = event.target.files
    console.log('上传文件:', file)
  }

  const handleAvatarChange = (event) => {
    console.log(event.target.files)
    const file = event.target.files[0]
    formData.append('avatar', file)
    const reader = new FileReader()
    reader.addEventListener('load', function () {
      setAvatar(reader.result)
    }, false)

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <Modal contentClassName={styles.modalContainer} show={show} onHide={onClose}>
        <Modal.Header className={styles.modalHeader} >
          <div onClick={onClose} className={styles.closeBtn}>
            &times;
          </div>
          <div className={styles.headerTitle}>編輯個人資料</div>
          <div className={styles.postSubmitBtnContainer} onClick={() => {
            onBtnClick?.(image, avatar)
          }}>
            <Button
                value='儲存'
                type='fullPill'
            />
          </div>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div className={styles.bodyContainer}>
            <div className={styles.backGround}>
                <div className={styles.iconPhoto}>
                  <div className={styles.photoContainer}>
                    <Photo onClick={handleBackgroundSVGClick}/>
                  </div>
                  <div className={styles.photoXContainer}>
                    <PhotoX onClick={handleXClick}/>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleBackgroundChange}
                  />
                </div>
                <img src={image} alt="imgBroken" className={styles.backGroundImg} />
            </div>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarBackgroundColor}>
                <img src={avatar} alt="Image" className={styles.avatar}></img>
                <div className={styles.iconPhoto}>
                <Photo onClick={handleAvatarSVGClick}/>
                <input
                      ref={AvatarInputRef}
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleAvatarChange}
                  />
              </div>
            </div>
            </div>
            <div className={styles.inputGroup}>
                <div className={styles.nameInputContainer}>
                    <p>名稱</p>
                    <input
                        className={styles.nameInput}
                        defaultValue={userHead.name}
                        onChange={(event) => onNameChange?.(event.target.value)}
                    />
                    {/* {userHead.name.length !== 0 &&
                        <div className={styles.inputNotice} >
                            <div className={styles.lengthRule}>
                                {userHead.name.length}/50
                            </div>
                        </div>
                    } */}

                </div>
                <div className={styles.discriptionInputContainer}>
                    <p>自我介紹</p>
                    <textarea
                        className={styles.postTextarea}
                        cols="65"
                        rows="5"
                        placeholder='有什麼新鮮事？'
                        defaultValue={userHead.introduction}
                        onChange={(event) => onIntroductionChange?.(event.target.value)}
                    />
                    {/* {userHead.introductionn.length !== 0 &&
                        <div className={styles.inputNotice} >
                            <div className={styles.lengthRule}>
                                {userHead.introduction.length}/160
                            </div>
                        </div>
                    } */}

                </div>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PersonInfoModal
