import styles from './PersonInfo.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import PersonalInfoHead from 'component/element/element_mid/PersonalInfoHead/PersonalInfoHead'
import { useState } from 'react'

const PersonalInfo = () => {
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('推文')

  const handleClick = async (index, item) => {
    setStatus(index)
    setRender(item)
  }

  const { container, contentItemContainer } = styles
  return (
    <div className={container}>
      <PersonalInfoHead/>
      <TweetSwitchTab
        list={['推文', '回覆', '喜歡的內容']}
        status={status}
        onClick={handleClick}
        render={render}
      />
      <div className={contentItemContainer}>
          <HomeContentItem />
          <HomeContentItem />
          <HomeContentItem />
          <HomeContentItem />
          <HomeContentItem />
      </div>
    </div>
  )
}

export default PersonalInfo
