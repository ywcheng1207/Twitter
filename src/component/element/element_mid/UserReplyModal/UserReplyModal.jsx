import Modal from 'react-bootstrap/Modal'
import styles from './UserReplyModal.module.scss'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'
const avatarUrl2 = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=878'

function UserReplyModal ({ children, show, onClose, onShow, text, onChange, tweet, onUserReply }) {
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
                <img src={tweet.tweetOwnerAvatar} alt="" />
                <span></span>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.rightInfo}>
                    <span>{tweet.tweetOwnerName}</span>
                    <a>@{tweet.tweetOwnerAccount}・<HoursPassed item={tweet.createdAt}/></a>
                </div>
                <div className={styles.rightDescription}>
                  {tweet.description}
                </div>
                <div className={styles.rightPoster}>
                    <span className={styles.ownerName}>回覆給</span>
                    <a>@{tweet.tweetOwnerAccount}</a>
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
                value={text}
                onChange={(event) => onChange?.(event.target.value)}
              >
              </textarea>
            </div>
            <div className={styles.postSubmitBtnContainer}>
                <button
                  onClick={() => {
                    onUserReply?.({ TweetId: tweet.TweetId, text })
                    onClose()
                  }}
                >
                  回覆
                </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UserReplyModal
