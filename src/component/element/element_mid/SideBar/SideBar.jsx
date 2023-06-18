// -- import
// API
import { getSidebarData, postUserFollow, deleteUserFollow } from 'api/user'
// 元件
import SideBarItem from './SideBarItem'
// 樣式/套件
import styles from './SideBar.module.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// -- 元件
const SideBar = () => {
  const { sideBarContainer, sideBarHead, sideBarList } = styles
  const [sidebarData, setSidebarData] = useState([])
  const navigate = useNavigate()

  const postUserFollowAsync = async (authToken, id) => {
    try {
      const data = await postUserFollow(authToken, id)
      return data
    } catch (error) {
      console.error(error)
    }
  }
  const deleteUserFollowAsync = async (authToken, id) => {
    try {
      const data = await deleteUserFollow(authToken, id)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = (value) => {
    const authToken = localStorage.getItem('authToken')
    const { id, isFollowed } = value
    if (isFollowed) {
      deleteUserFollowAsync(authToken, id)
      setSidebarData(sidebarData.map(item => {
        if (item.FollowingId === id) {
          return {
            ...item,
            isFollowed: !item.isFollowed
          }
        } else {
          return item
        }
      }))
    } else if (!isFollowed) {
      postUserFollowAsync(authToken, id)
      setSidebarData(sidebarData.map(item => {
        if (item.FollowingId === id) {
          return {
            ...item,
            isFollowed: !item.isFollowed
          }
        } else {
          return item
        }
      }))
    }
  }

  const handleImgClick = (id) => {
    localStorage.setItem('otherId', id)
    if (id === localStorage.getItem('id')) {
      navigate('/user/personalinfo/main')
    } else {
      navigate('/user/other/main')
    }
  }

  useEffect(() => {
    const getSidebarDataAsync = async () => {
      const authToken = localStorage.getItem('authToken')
      const data = await getSidebarData(authToken)
      setSidebarData(data)
    }
    getSidebarDataAsync()
  }, [])

  return (
    <div className={sideBarContainer}>
      <div className={sideBarHead}>
        <h4 className='Bold'>推薦跟隨</h4>
      </div>
      <div className={sideBarList} >
        {sidebarData.map(item =>
          <SideBarItem
            item={item}
            key={item.FollowingId}
            onClick={handleClick}
            onImgClick={handleImgClick}
          />
        )}
      </div>
    </div>
  )
}

export default SideBar
