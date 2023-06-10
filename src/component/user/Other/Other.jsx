import styles from './Other.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import PersonalInfoHead from 'component/element/element_mid/PersonalInfoHead/PersonalInfoHead'
import { useState } from 'react'
import axios from 'axios'

const Other = () => {
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('推文')

  const handleClick = async (index, item) => {
    setStatus(index)
    setRender(item)
    if (render === '推文') {
      const { data } = await axios.get()
      return data
    } else if (render === '回覆') {
      const { data } = await axios.get()
      return data
    } else if (render === '喜歡的內容') {
      const { data } = await axios.get()
      return data
    }
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

export default Other
