import styles from './Other.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
// import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import OtherPostContent from 'component/element/element_mid/OtherPostContent/OtherPostContent'
import OtherHead from 'component/element/element_mid/OtherHead/OtherHead'
import { useNavigate } from 'react-router-dom'
// import { useOtherContext } from 'contexts/OtherContext'

import { useState, useEffect } from 'react'
import { getAccountInfo, getUserTweets, getUserReplyTweets, getUserLikeTweets } from 'api/user'

const ContentItem = ({ render, postList, replyList, userLikeList, onAvatarClick }) => {
  if (render === '推文') {
    if (postList.length === 0 || !Array.isArray(postList)) {
      return null
    } else {
      return (
        postList.map((item) => (
          <HomeContentItem tweet={item} key={item.TweetId} onAvatarClick={(clickId) => onAvatarClick?.(clickId)} />
        ))
      )
    }
  } else if (render === '回覆') {
    if (replyList.length === 0 || !Array.isArray(replyList)) {
      console.log('null')
      return null
    } else {
      return (
        replyList.map((item) => (
        <OtherPostContent key={item.reaplyId} item={item} />
        ))
      )
    }
  } else if (render === '喜歡的內容') {
    if (replyList.length === 0 || !Array.isArray(replyList)) {
      return null
    } else {
      return (
        userLikeList.map((item) => (
        <HomeContentItem tweet={item} key={item.TweetId} onAvatarClick={(clickId) => onAvatarClick?.(clickId)} />
        ))
      )
    }
  }
}

const Other = () => {
  const { container, contentItemContainer, switchTab } = styles
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('推文')
  const [postList, setPostList] = useState([])
  const [replyList, setReplyList] = useState([])
  const [userLikeList, setUserLikeList] = useState([])
  const [otherUser, setOtherUser] = useState([])
  const otherId = localStorage.getItem('otherId')
  const navigate = useNavigate()

  const list = ['推文', '回覆', '喜歡的內容']

  const handleClick = (index, item) => {
    setStatus(index)
    setRender(item)
  }

  // 點擊 avatar 至 other 頁面
  const handleAvatarClick = (clickId) => {
    console.log(clickId)
    const userId = localStorage.getItem('id')
    if (Number(clickId) === Number(userId)) {
      navigate('/user/personalinfo/main')
    } else {
      localStorage.setItem('otherId', clickId)
      navigate('/user/other/main')
    }
  }

  // render 用戶資料
  useEffect(() => {
    const getAccountInfoAsync = async () => {
      try {
        const authToken = localStorage.getItem('authToken')
        const data = await getAccountInfo(authToken, otherId)
        console.log('用戶資料取得成功')
        setOtherUser(data)
        return data
      } catch (error) {
        console.error(error)
      }
    }
    getAccountInfoAsync()
  }, [localStorage.getItem('otherId')])

  useEffect(() => {
    const getUserDataAsync = async (authToken, id) => {
      try {
        const postListData = await getUserTweets(authToken, id)
        const replyListData = await getUserReplyTweets(authToken, id)
        const userLikeListData = await getUserLikeTweets(authToken, id)
        console.log('成功取得 other 頁的個人推文串')
        console.log('成功取得 other 頁的回覆推文串')
        console.log('成功取得 other 頁的Like推文串')

        setPostList(postListData)
        setReplyList(replyListData)
        setUserLikeList(userLikeListData)
      } catch (error) {
        console.error(error)
      }
    }
    if (localStorage.getItem('authToken')) {
      getUserDataAsync(localStorage.getItem('authToken'), otherId)
    }
  }, [localStorage.getItem('otherId')])

  return (
    <div className={container}>
      <OtherHead otherUser={otherUser} />
      <TweetSwitchTab
        list={list}
        status={status}
        onClick={handleClick}
        render={render}
        className={switchTab}
      />
      <div className={contentItemContainer}>
        <ContentItem render={render} postList={postList} replyList={replyList} userLikeList={userLikeList} onAvatarClick={handleAvatarClick} />
      </div>
    </div>
  )
}

export default Other
