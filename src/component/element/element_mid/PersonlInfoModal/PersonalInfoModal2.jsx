import { useRef } from 'react'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import styles from './PersonInfoModal2.module.scss'
import { ReactComponent as Photo } from 'assets/icons/photo.svg'
import { ReactComponent as PhotoX } from 'assets/icons/photoX.svg'

function Example ({
  userHead, show, onShow,
  onClose, imageSrc, onOnPreview, onDeletePreview
}) {
  // 上傳圖片
  const inputFileRef = useRef()

  const handleOnClickUpload = () => {
    inputFileRef.current.click()
  }

  return (
    <>
      {/* <Button variant="primary" onClick={onShow}>
        編輯個人資料
      </Button> */}
      <button onClick={onShow}>編輯個人資料</button>
      <Modal contentClassName={styles.modalContainer} show={show} onHide={onClose} animation={false}>
        <Modal.Header className={styles.modalHeaderContainer} closeButton>

        </Modal.Header>
        <Modal.Body className={styles.modalBodyContainer}>
          <div className={styles.modalBody}>
              <div className={styles.bodyCover}>
                <img className={styles.defaultCover} src={userHead.cover} alt="" />
                <input
                  type="file"
                  accept="image/*"
                  className={styles.coverInput}
                  onChange={onOnPreview}
                  ref={inputFileRef}
                />
                <img className={styles.selectCover} src={imageSrc} alt="" />
                <div className={styles.photoIcon}>
                  <Photo onClick={handleOnClickUpload} />
                  <PhotoX onClick={onDeletePreview}/>
                </div>
              </div>
              <div className={styles.bodyAvatar}>
                <img src={userHead.avatar} alt="" />
              </div>
          </div>
          <div className={styles.modalFooter}>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Example
