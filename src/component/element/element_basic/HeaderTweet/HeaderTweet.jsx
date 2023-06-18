import styles from './HeaderTweet.module.scss'
import { ReactComponent as LeftArrow } from 'assets/icons/leftArrow.svg'

const HeaderTweet = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.icon}>
          <LeftArrow />
        </div>
        <h4 className={styles.headerText} >推文</h4>
    </div>
  )
}

export default HeaderTweet
