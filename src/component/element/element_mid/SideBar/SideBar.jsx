import styles from './SideBar.module.scss'
import SideBarItem from './SideBarItem'
import { getSidebarData, postUserFollow, deleteUserFollow } from 'api/user'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const { sideBarContainer, sideBarHead, sideBarList } = styles
  const [sidebarData, setSidebarData] = useState([])
  const navigate = useNavigate()

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

  const handleClick = (value) => {
    const authToken = localStorage.getItem('authToken')
    const { id, isFollowed } = value
    console.log(id)
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
    console.log(id)
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
      console.log('sidebar 取得資料')
    }
    getSidebarDataAsync()
  }, [])

  return (
    <div className={sideBarContainer}>
      <div className={sideBarHead}>
        <h4 className='Bold'>推薦跟隨</h4>
      </div>
      <div className={sideBarList} >
        {sidebarData.map(item => <SideBarItem item={item} key={item.FollowingId} onClick={handleClick} onImgClick={handleImgClick}/>)}
      </div>
    </div>
  )
}

export default SideBar
