import styles from './TweetSwitchTab.module.scss'
import clsx from 'clsx'

const TweetSwitchTab = ({ list, status, onClick }) => {
  const { active, switchBox } = styles

  return (
    <div className={styles.TweetSwitchTabContainer}>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(switchBox, { [active]: status === index })}
              onClick={() => { onClick?.(index, item) }
            }>
              {item}
            </div>
          )
        })}
    </div>
  )
}

export default TweetSwitchTab
