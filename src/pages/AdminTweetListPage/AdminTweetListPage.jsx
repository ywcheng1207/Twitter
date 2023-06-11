import styles from './AdminTweetListPage.module.scss'
import AdminNav from 'component/element/element_basic/AdminNav/AdminNav'
import TweetListCard from 'component/admin/TweetListCard/TweetListCard'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTweets } from 'api/user'

const AdminTweetListPage = () => {
  const [tweetList, setTweetList] = useState([])
  const [status, setStatus] = useState('tweetList')
  const navigate = useNavigate()

  useEffect(() => {
    const getUserDataAsync = async (authToken) => {
      try {
        const data = await getTweets(authToken)
        console.log(data[0])
        setTweetList(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (localStorage.getItem('authToken')) {
      getUserDataAsync(localStorage.getItem('authToken'))
    }
  }, [])

  const handleTweetListClick = () => {
    setStatus('tweetList')
    navigate('/admin/main')
  }
  const handleUserListClick = () => {
    setStatus('userList')
    navigate('/admin/users')
  }
  const handleLogoutClick = () => {
    navigate('/admin')
  }

  const handleDelete = (id) => {
    setTweetList(tweetList.filter(item => item.tweetId !== id))
  }

  const { container, mainContainer, tweetListContainer } = styles
  return (
        <div className={container}>
            <AdminNav
                status={status}
                tweetListClick={handleTweetListClick}
                userListClick={handleUserListClick}
                logoutClick={handleLogoutClick}
            />

            <div className={mainContainer}>
                <header>
                    <h4 className='Bold'>推文清單</h4>
                </header>
                <div className={tweetListContainer}>
                    <TweetListCard data={tweetList} onDelete={handleDelete}/>
                </div>
            </div>
        </div>
  )
}

export default AdminTweetListPage
