import Modal from 'react-bootstrap/Modal'
import styles from './UserPostModal.module.scss'

const TextWarning = ({ text }) => {
  if (text.length >= 140) {
    return <span>字數不可以超過 140 字</span>
  }
}

function UserPostModal ({ children, show, onClose, onShow, text, onChange, onAddHomeList }) {
  let avatar
  if (localStorage.getItem('avatar')) {
    avatar = localStorage.getItem('avatar')
  } else {
    avatar = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=878'
  }

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
              <img src={avatar} alt="Image"></img>
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
            <button
              className={styles.postSubmitBtn}
              onClick={() => {
                onAddHomeList(text)
                text.length > 0 && onClose()
              }}
            >
              推文
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UserPostModal
