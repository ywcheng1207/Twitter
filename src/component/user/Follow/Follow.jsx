import UserFollowItem from 'component/element/element_mid/UserFollowItem/UserFollowItem'
import styles from './Follow.module.scss'
import { ReactComponent as LeftArrow } from 'assets/icons/leftArrow.svg'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserFollowers, getUserFollowing, postUserFollow, deleteUserFollow } from 'api/user'

const ContentItem = ({ render, onClick, followerData, followingData }) => {
  if (render === '追隨者') {
    if (followerData.length === 0) {
      return null
    } else {
      return (
        followerData.map((item) => (
          <UserFollowItem
            key={item.UserId}
            item={item}
            onClick={(id) => onClick?.(id)}
            render={render}
          />
        ))
      )
    }
  } else if (render === '正在追隨') {
    if (Array.isArray(followingData) && followingData.length > 0) {
      return (
        followingData.map((item) => (
          <UserFollowItem
            key={item.UserId}
            item={item}
            onClick={(id) => id}
            render={render}
          />
        ))
      )
    } else {
      return null
    }
  }
}

const Follow = () => {
  const { container, headerText, tweetsCount, headerName, tweetsContainer, arrow } = styles
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('追隨者')
  const [followerData, setFollowerData] = useState([])
  const [followingData, setFollowingData] = useState([])
  const list = ['追隨者', '正在追隨']
  const navigate = useNavigate()

  const changeUserFollowAsync = async (currentUser, id, authToken) => {
    if (currentUser.isFollowed) {
      try {
        const res = await deleteUserFollow(authToken, id)
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    } else {
      const res = await postUserFollow(authToken, id)
      console.log(res)
    }
  }

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
      const currentUser = followerData.find(item => item.UserId === id)
      changeUserFollowAsync(currentUser, id, authToken)
    }
  }

  const handleSwitchClick = (index, item) => {
    setStatus(index)
    setRender(item)
  }

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    const id = localStorage.getItem('id')
    const getUserFollowingAsync = async () => {
      const data = await getUserFollowing(authToken, id)
      setFollowingData(data)
    }
    const getUserFollowersAsync = async () => {
      const data = await getUserFollowers(authToken, id)
      console.log('追蹤者資料取得成功')
      setFollowerData(data)
    }
    getUserFollowersAsync()
    getUserFollowingAsync()
  }, [])

  return (
    <div className={container}>
      <header>
        <LeftArrow className={arrow} onClick={() => navigate(-1)}/>
        <div className={headerText}>
        <h4 className={headerName}>john dopw</h4>
        <span className={tweetsCount}>25 推文</span>
        </div>
      </header>
      <TweetSwitchTab
        list={list}
        status = {status}
        onClick={handleSwitchClick}
        render={render}
      />
      <div className={tweetsContainer}>
        {/* {render === '追隨者' &&
           followerData.map((item) => (
            <UserFollowItem key={item.UserId} item={item} onClick={handleClick} render={render}/>
           ))
        }
        {render === '正在追隨' &&
           followingData.map((item) => (
            <UserFollowItem key={item.UserId} item={item} onClick={handleClick} render={render}/>
           ))
        } */}
        <ContentItem
          render={render}
          onClick={handleClick}
          followerData={followerData}
          followingData={followingData}
        />
      </div>

    </div>
  )
}

export default Follow
