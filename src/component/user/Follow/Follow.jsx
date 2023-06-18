// -- import
// API
import { getUserFollowers, getUserFollowing, postUserFollow, deleteUserFollow } from 'api/user'
// 元件
import UserFollowItem from 'component/element/element_mid/UserFollowItem/UserFollowItem'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
// 樣式/套件
import styles from './Follow.module.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// 圖片
import { ReactComponent as LeftArrow } from 'assets/icons/leftArrow.svg'

// -- 元件
const ContentItem = ({ render, onClick, followerData, followingData, onAvatarClick }) => {
  // render 跟隨或正在追隨
  if (render === '追隨者') {
    if (followerData.length === 0) {
      return null
    } else {
      return (
        followerData.map((item) => (
          <UserFollowItem
            key={item.UserId}
            item={item}
            render={render}
            onAvatarClick={(id) => onAvatarClick?.(id)}
            onClick={(id) => onClick?.(id)}
          />
        ))
      )
    }
  } else if (render === '正在追隨') {
    if (followingData.length === 0 || !Array.isArray(followingData)) {
      return null
    } else {
      return (
        followingData.map((item) => (
          <UserFollowItem
            key={item.UserId}
            item={item}
            onClick={(id) => onClick?.(id)}
            render={render}
            onAvatarClick={(id) => onAvatarClick?.(id)}
          />
        ))
      )
    }
  }
}
// -- 元件
const Follow = () => {
  const { container, headerText, tweetsCount, headerName, tweetsContainer, arrow } = styles
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('追隨者')
  const [followerData, setFollowerData] = useState([])
  const [followingData, setFollowingData] = useState([])
  const list = ['追隨者', '正在追隨']
  const navigate = useNavigate()
  const tweetCount = localStorage.getItem('tweetCount')
  const userName = localStorage.getItem('userName')

  // 更改 追蹤/取消追宗
  const changeUserFollowAsync = async (currentUser, id, authToken) => {
    try {
      if (currentUser.isFollowed) {
        await deleteUserFollow(authToken, id)
      } else if (!currentUser.isFollowed) {
        await postUserFollow(authToken, id)
      }
    } catch (error) {
      console.error(error)
    }
  }

  // 點擊按鈕後觸發 追蹤/取消追蹤
  const handleClick = (id) => {
    const authToken = localStorage.getItem('authToken')
    if (render === '追隨者') {
      setFollowerData(followerData.map(item => {
        if (item.UserId === id) {
          return {
            ...item,
            isFollowed: !item.isFollowed
          }
        } else {
          return item
        }
      }))
      const currentUser = followerData.find(item => item.UserId === id)
      changeUserFollowAsync(currentUser, id, authToken)
    } else if (render === '正在追隨') {
      setFollowingData(followingData.map(item => {
        if (item.UserId === id) {
          return {
            ...item,
            isFollowed: !item.isFollowed
          }
        } else {
          return item
        }
      }))
      const currentUser = followingData.find(item => item.UserId === id)
      changeUserFollowAsync(currentUser, id, authToken)
    }
  }
  // 點擊後切換 tab
  const handleSwitchClick = (index, item) => {
    setStatus(index)
    setRender(item)
  }

  // 點擊頭像切換至 other
  const handleAvatarClick = (id) => {
    localStorage.setItem('otherId', id)
    navigate('/user/other/main')
  }

  // 摳 api 取得 following array
  const getUserFollowingAsync = async (authToken, renderId) => {
    const data = await getUserFollowing(authToken, renderId)
    if (data.message === '無追蹤其他使用者') {
      setFollowingData([])
    } else {
      setFollowingData(data)
    }
  }

  // 摳 api 取得 follower array
  const getUserFollowersAsync = async (authToken, renderId) => {
    const data = await getUserFollowers(authToken, renderId)
    if (data.message === '無跟隨者資料') {
      setFollowerData([])
    } else {
      setFollowerData(data)
    }
  }

  // 渲染畫面
  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    let renderId = ''
    const id = localStorage.getItem('id')
    const otherId = localStorage.getItem('otherId')
    if (id === otherId) {
      renderId = id
    } else {
      renderId = otherId
    }
    getUserFollowersAsync(authToken, renderId)
    getUserFollowingAsync(authToken, renderId)
  }, [render])

  return (
    <div className={container}>
      <header>
        <LeftArrow className={arrow} onClick={() => navigate(-1)}/>
        <div className={headerText}>
        <h4 className={headerName}>{userName}</h4>
        <span className={tweetsCount}>{tweetCount} 推文</span>
        </div>
      </header>
      <TweetSwitchTab
        list={list}
        status = {status}
        onClick={handleSwitchClick}
        render={render}
      />
      <div className={tweetsContainer}>
        <ContentItem
          render={render}
          onClick={handleClick}
          followerData={followerData}
          followingData={followingData}
          onAvatarClick={handleAvatarClick}
        />
      </div>
    </div>
  )
}

export default Follow
