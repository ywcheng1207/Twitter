import Modal from 'react-bootstrap/Modal'
import styles from './UserReplyModal.module.scss'
import HoursPassed from 'component/element/element_basic/HoursPassed/HoursPassed'

const TextWarning = ({ userTextNothing }) => {
  if (userTextNothing) {
    return <span>內容不可空白</span>
  }
}
const handleSubmit = ({ onUserReply, onClose, text, onUserTextWarning, tweet }) => {
  if (text.length > 0) {
    onUserReply?.({ TweetId: tweet.TweetId, text })
    onClose()
  }
  if (text.length === 0) {
    onUserTextWarning(true)
  } else {
    onUserTextWarning(false)
  }
}

function UserReplyModal ({
  children, show, onClose, onShow, text,
  onChange, tweet, onUserReply, userTextNothing, onUserTextWarning
}) {
  let avatar
  if (localStorage.getItem('avatar')) {
    avatar = localStorage.getItem('avatar')
  } else {
    avatar = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=878'
  }

  return (
    <>
      { children }
      <Modal contentClassName={styles.modalContainer} onShow={onShow} show={show} onHide={onClose}>
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
                    <span className={styles.ownerName}>{tweet.tweetOwnerName}</span>
                    <a>@{tweet.tweetOwnerAccount}</a>
                    <span className={styles.tweetCreateAt}>・<HoursPassed item={tweet.createdAt}/></span>
                </div>
                <div className={styles.rightDescription}>
                  {tweet.description}
                </div>
                <div className={styles.rightPoster}>
                    <span>回覆給</span>
                    <a>@{tweet.tweetOwnerAccount}</a>
                </div>
              </div>
            </div>
            <div className={styles.postBodyContainer}>
              <img src={avatar} alt="" />
              <textarea
                cols="60"
                rows="2"
                className={styles.postTextarea}
                placeholder='推你的回覆'
                value={text}
                onChange={(event) => onChange?.(event.target.value)}
              >
              </textarea>
            </div>
            <div className={styles.postSubmitBtnContainer}>
                <TextWarning text={text} userTextNothing={userTextNothing} />
                <button
                  onClick={() => handleSubmit({
                    tweet,
                    text,
                    onUserReply,
                    onClose,
                    userTextNothing,
                    onUserTextWarning
                  })}
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
