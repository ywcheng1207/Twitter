import { useState } from 'react'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ReactComponent as X } from 'assets/icons/iconX.svg'
import styles from './AdminDeleteModal.module.scss'

function Example ({ onDelete, TweetId }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <X className={styles.deleteIcon} onClick={() => {
        handleShow()
      }} />
      <Modal contentClassName={styles.modalContainer} show={show} onHide={handleClose} animation={false}>
        <Modal.Body className={styles.bodyContainer}>
          <div className={styles.title}>確定要刪除這則貼文？</div>
          <div className={styles.buttonContainer}>
            <button className={styles.cancel} onClick={handleClose}>
                取消
            </button>
            <button className={styles.confirm} variant="primary" onClick={() => {
              onDelete?.(TweetId)
              handleClose()
            }}>
                確認刪除
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Example
