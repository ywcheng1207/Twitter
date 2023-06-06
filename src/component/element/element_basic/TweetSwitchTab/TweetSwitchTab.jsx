import styles from './TweetSwitchTab.module.scss'
import { useState } from 'react'
import clsx from 'clsx'

const testArray = [
  '推文',
  '回覆',
  '喜歡的內容'

]

const TweetSwitchTab = () => {
  const [status, setStatus] = useState(0)
  const { active, switchBox } = styles

  return (
        <div className={styles.TweetSwitchTabContainer}>
            {testArray.map((item, index) => {
              return (
                <>
                    <div key={index} className={clsx(switchBox, { [active]: status === index })} onClick={() => {
                      setStatus(index)
                    }}>
                        {item}
                    </div>
                </>

              )
            })}
        </div>
  )
}

export default TweetSwitchTab
