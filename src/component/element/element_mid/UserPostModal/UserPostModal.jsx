import Modal from 'react-bootstrap/Modal'
import styles from './UserPostModal.module.scss'
import homepageDummy from 'dummyData/homepageDummy'

const TextWarning = ({ text }) => {
  if (text.length >= 140) {
    return <span>字數不可以超過 140 字</span>
  }
}

function UserPostModal ({ children, show, onClose, onShow, text, onChange }) {
  return (
    <>
      { children }
      <Modal contentClassName={styles.modalContainer} show={show} onHide={onClose}>
        <Modal.Header className={styles.postModalHead} >
          <div onClick={onClose} className={styles.closeBtn}>
            &times;
          </div>
        </Modal.Header>
        <Modal.Body >
          <div className={styles.bodyContainer}>
            <div className={styles.postHead}>
              <img src={homepageDummy[0].userId.avatar} alt="Image"></img>
            </div>
            <textarea
              className={styles.postTextarea}
              cols="65"
              rows="5"
              placeholder='有什麼新鮮事？'
              value={text}
              onChange={(event) => onChange?.(event.target.value)}
            >
            </textarea>
          </div>
          <div className={styles.postSubmitBtnContainer}>
            <TextWarning text={text} />
            <button className={styles.postSubmitBtn}>
              推文
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UserPostModal
