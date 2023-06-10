import Modal from 'react-bootstrap/Modal'
import styles from './PersonInfoModal.module.scss'
import homepageDummy from 'dummyData/homepageDummy'
import Button from 'component/element/element_basic/Button/Button'

function UserPostModal ({ show, onClose, onShow, onChange, userName, discription, onNameChange, onDiscriptionChange }) {
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
                <img src="https://loremflickr.com/639/200/mountain/?random=61.42141615044277" alt="" className={styles.backGroundImg} />
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
