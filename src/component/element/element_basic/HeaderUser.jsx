import styles from './HeaderUser.module.scss'
import LeftArrow from '../../../assets/icons/leftArrow.svg'

const HeaderUser = ({ name, tweets }) => {
  return (
    <div className={styles.headerContainer}>
        <img src={LeftArrow} className={styles.leftArrow} />
        <div className={styles.headerText} >
            <p className={styles.headerName} >{name}</p>
            <p className={styles.headerTweets} >{tweets.length}推文</p>
        </div>
    </div>
  )
}

export default HeaderUser
