import styles from './PersonInfo.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import PersonalInfoHead from 'component/element/element_mid/PersonalInfoHead/PersonalInfoHead'
import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import homepageDummy from 'dummyData/homepageDummy'

const ContentItem = ({ render }) => {
  if (render === '推文') {
    return (
      homepageDummy.map((item) => (
        <HomeContentItem tweet={item} key={item.tweetId} />
      ))
    )
  } else if (render === '回覆') {
    return (
      homepageDummy.map((item) => (
        <PostContentItem key={item.tweetId} />
      ))
    )
  } else if (render === '喜歡的內容') {
    return (
      homepageDummy.map((item) => (
        <HomeContentItem tweet={item} key={item.tweetId} />
      ))
    )
  }
}

const PersonalInfo = () => {
  const { container, contentItemContainer, switchTab } = styles
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('推文')
  const list = ['推文', '回覆', '喜歡的內容']
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (index, item) => {
    setStatus(index)
    setRender(item)
    console.log(item)
  }

  useEffect(() => {
  }, [location.pathname, navigate])

  return (
    <div className={container}>
      <PersonalInfoHead />
      <TweetSwitchTab
        list={list}
        status={status}
        onClick={handleClick}
        render={render}
        className={switchTab}
      />
      <div className={contentItemContainer}>
        <ContentItem render={render} />
      </div>
    </div>
  )
}

export default PersonalInfo
