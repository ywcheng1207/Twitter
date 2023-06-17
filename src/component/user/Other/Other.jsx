import styles from './Other.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
// import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import OtherPostContent from 'component/element/element_mid/OtherPostContent/OtherPostContent'
import OtherHead from 'component/element/element_mid/OtherHead/OtherHead'
import { useNavigate } from 'react-router-dom'
import { getAccountInfo, getUserTweets, getUserReplyTweets, getUserLikeTweets, postUserFollow, deleteUserFollow } from 'api/user'
// import { useOtherContext } from 'contexts/OtherContext'

import { useState, useEffect } from 'react'

const ContentItem = ({ render, postList, replyList, userLikeList, onPostList, onUserLikeList, onAvatarClick }) => {
  if (render === '推文') {
    if (postList.length === 0 || !Array.isArray(postList)) {
      return null
    } else {
      return (
        postList.map((item) => (
          <HomeContentItem tweet={item} key={item.TweetId} TweetId={item.TweetId} onPostList={onPostList} onAvatarClick={(clickId) => onAvatarClick?.(clickId)} />
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
        <HomeContentItem tweet={item} key={item.TweetId} TweetId={item.TweetId} onUserLikeList={onUserLikeList} onAvatarClick={(clickId) => onAvatarClick?.(clickId)} />
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

  // 點擊追蹤//取消追蹤
  const handleFollowClick = async () => {
    const authToken = localStorage.getItem('authToken')
    if (otherUser.isFollowed) {
      setOtherUser({
        ...otherUser,
        isFollowed: !otherUser.isFollowed
      })
      const data = deleteUserFollowAsync(authToken, otherUser.id)
      console.log(data)
    } else {
      const data = postUserFollowAsync(authToken, otherUser.id)
      setOtherUser({
        ...otherUser,
        isFollowed: !otherUser.isFollowed
      })
      console.log(data)
    }
  }

  const postUserFollowAsync = async (authToken, id) => {
    try {
      const data = await postUserFollow(authToken, id)
      console.log(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }
  const deleteUserFollowAsync = async (authToken, id) => {
    try {
      const data = await deleteUserFollow(authToken, id)
      console.log(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  //
  const handlePostList = ({ TweetId, count }) => {
    setPostList(pre => {
      return pre.map(item => {
        if (item.TweetId === TweetId) {
          console.log(item)
          return { ...item, isLiked: !item.isLiked, likeCount: item.likeCount + count }
        } else {
          return item
        }
      })
    })
  }
  const handleUserLikeList = ({ TweetId, count }) => {
    setUserLikeList(pre => {
      return pre.map(item => {
        if (item.TweetId === TweetId) {
          return { ...item, isLiked: !item.isLiked, likeCount: item.likeCount + count }
        } else {
          return item
        }
      })
    })
  }

  // render 用戶資料
  useEffect(() => {
    const getAccountInfoAsync = async () => {
      try {
        const authToken = localStorage.getItem('authToken')
        const data = await getAccountInfo(authToken, otherId)
        console.log('用戶資料取得成功')
        setOtherUser(data)
        localStorage.setItem('tweetCount', data.tweetCount)
        localStorage.setItem('userName', data.name)
        return data
      } catch (error) {
        console.error(error)
      }
    }
    getAccountInfoAsync()
  }, [localStorage.getItem('otherId')])
  //

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
  }, [render, localStorage.getItem('otherId')])
  // localStorage.getItem('otherId')

  return (
    <div className={container}>
      <OtherHead otherUser={otherUser} onFollowClick={handleFollowClick} />
      <TweetSwitchTab
        list={list}
        status={status}
        onClick={handleClick}
        render={render}
        className={switchTab}
      />
      <div className={contentItemContainer}>
        <ContentItem
          render={render}
          postList={postList}
          replyList={replyList}
          userLikeList={userLikeList}
          onAvatarClick={handleAvatarClick}
          onPostList={handlePostList}
          onUserLikeList={handleUserLikeList}
         />
      </div>
    </div>
  )
}

export default Other
