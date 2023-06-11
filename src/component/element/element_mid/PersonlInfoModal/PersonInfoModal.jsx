import Modal from 'react-bootstrap/Modal'
import styles from './PersonInfoModal.module.scss'
import homepageDummy from 'dummyData/homepageDummy'
import Button from 'component/element/element_basic/Button/Button'
import { ReactComponent as Photo } from 'assets/icons/photo.svg'
import { ReactComponent as PhotoX } from 'assets/icons/photoX.svg'
import { useState, useRef } from 'react'
import defaultImg from 'assets/pngs/defaultBackground.png'

function UserPostModal ({ show, onClose, onShow, onChange, userName, discription, onNameChange, onDiscriptionChange }) {
  const fileInputRef = useRef(defaultImg)
  const [image, setImage] = useState(defaultImg)

  const handleSVGClick = (event) => {
    fileInputRef.current.click()
    const file = event.target.files
    console.log('上传文件:', file)
  }
  const handleOnPreview = (event) => {
    console.log(event.target.files)
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', function () {
      setImage(reader.result)
    }, false)

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleXClick = () => {
    setImage(defaultImg)
  }

  return (
    <>
      <Modal contentClassName={styles.modalContainer} show={show} onHide={onClose}>
        <Modal.Header className={styles.modalHeader} >
          <div onClick={onClose} className={styles.closeBtn}>
            &times;
          </div>
          <div className={styles.headerTitle}>編輯個人資料</div>
          <div className={styles.postSubmitBtnContainer}>
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
                  <Photo onClick={handleSVGClick}/>
                  <PhotoX onClick={handleXClick}/>
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleOnPreview}
                  />
                </div>
                <img src={image} alt="imgBroken" className={styles.backGroundImg} />
            </div>
            <img src={homepageDummy[0].userId.avatar} alt="Image" className={styles.avatar}></img>
            <div className={styles.inputGroup}>

                <div className={styles.nameInputContainer}>
                    <p>名稱</p>
                    <input
                        className={styles.nameInput}
                        defaultValue={userName}
                        onChange={(event) => onNameChange?.(event.target.value)}
                    />
                    {userName.length !== 0 &&
                        <div className={styles.inputNotice} >
                            <div className={styles.lengthRule}>
                                {userName.length}/50
                            </div>
                        </div>
                    }

                </div>
                <div className={styles.discriptionInputContainer}>
                    <p>自我介紹</p>
                    <textarea
                        className={styles.postTextarea}
                        cols="65"
                        rows="5"
                        placeholder='有什麼新鮮事？'
                        defaultValue={discription}
                        onChange={(event) => onDiscriptionChange?.(event.target.value)}
                    />
                    {discription.length !== 0 &&
                        <div className={styles.inputNotice} >
                            <div className={styles.lengthRule}>
                                {discription.length}/160
                            </div>
                        </div>
                    }

                </div>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UserPostModal
