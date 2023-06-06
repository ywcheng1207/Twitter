import styles from './HeaderTweet.module.scss'
import LeftArrow from '../../../assets/icons/leftArrow.svg'

const HeaderTweet = () => {
  return (
        <div className={styles.headerContainer}>
            <img src={LeftArrow} className={styles.leftArrow} />
            <h1 className={styles.headerText} >推文</h1>
        </div>
  )
}

export default HeaderTweet
