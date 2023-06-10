import Modal from 'react-bootstrap/Modal'
import styles from './UserReplyModal.module.scss'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'
const avatarUrl2 = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=878'

function UserReplyModal ({ children, show, onClose, onShow, text, onChange }) {
  return (
    <>
      { children }
      <Modal contentClassName={styles.modalContainer} show={show} onHide={onClose}>
        <Modal.Header className={styles.replyModalHead} >
          <div onClick={onClose} className={styles.closeBtn}>
            &times;
          </div>
        </Modal.Header>
        <Modal.Body >
          <div className={styles.bodyContainer}>
            <div className={styles.postHeadContainer}>
              <div className={styles.leftSide}>
                <img src={avatarUrl} alt="" />
                <span></span>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.rightInfo}>
                    <span>Apple</span>
                    <a>@apple・3 小時</a>
                </div>
                <div className={styles.rightDescription}>
                  Nulla Lorem mollit cupidatat irure.
                  Laborum magna nulla duis ullamco cillum dolor.
                  Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </div>
                <div className={styles.rightPoster}>
                    <span>回覆給</span>
                    <a>@Mitsubishi</a>
                </div>
              </div>
            </div>
            <div className={styles.postBodyContainer}>
              <img src={avatarUrl2} alt="" />
              <textarea
                cols="62"
                rows="2"
                className={styles.postTextarea}
                placeholder='推你的回覆'
              >
              </textarea>
            </div>
            <div className={styles.postSubmitBtnContainer}>
              <button>回覆</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UserReplyModal
