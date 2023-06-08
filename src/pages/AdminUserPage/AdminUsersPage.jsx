import styles from './AdminUserPage.module.scss'
import AdminNav from 'component/element/element_basic/AdminNav/AdminNav'
import UserListItem from 'component/admin/UserListItem/UserListItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const dummyData = [
  {
    id: 12,
    name: 'user1',
    account: 'user1',
    avatar: 'https://loremflickr.com/320/240/people/?random=9.556532493647829',
    cover: 'https://loremflickr.com/320/240/mountain/?random=61.42141615044277',
    tweetCount: 10,
    follower: 0,
    following: 0,
    likeCount: 0
  },
  {
    id: 13,
    name: 'user2',
    account: 'user2',
    avatar: 'https://loremflickr.com/320/240/people/?random=8.224976933990062',
    cover: 'https://loremflickr.com/320/240/mountain/?random=87.74327855451133',
    tweetCount: 10,
    follower: 0,
    following: 0,
    likeCount: 0
  },
  {
    id: 14,
    name: 'user3',
    account: 'user3',
    avatar: 'https://loremflickr.com/320/240/people/?random=0.9326769688078196',
    cover: 'https://loremflickr.com/320/240/mountain/?random=51.74321471879344',
    tweetCount: 10,
    follower: 0,
    following: 0,
    likeCount: 0
  },
  {
    id: 15,
    name: 'user4',
    account: 'user4',
    avatar: 'https://loremflickr.com/320/240/people/?random=6.675514250289694',
    cover: 'https://loremflickr.com/320/240/mountain/?random=90.78529807662964',
    tweetCount: 10,
    follower: 0,
    following: 0,
    likeCount: 0
  },
  {
    id: 16,
    name: 'user5',
    account: 'user5',
    avatar: 'https://loremflickr.com/320/240/people/?random=0.2306345450590208',
    cover: 'https://loremflickr.com/320/240/mountain/?random=34.04386912752293',
    tweetCount: 10,
    follower: 0,
    following: 0,
    likeCount: 0
  },
  {
    id: 11,
    name: 'root',
    account: 'root',
    avatar: 'https://loremflickr.com/320/240/people/?random=2.1540993761188076',
    cover: 'https://loremflickr.com/320/240/mountain/?random=74.09029661166127',
    tweetCount: 0,
    follower: 0,
    following: 0,
    likeCount: 0
  }
]

const AdminUsersPage = () => {
  const [status, setStatus] = useState('userList')

  const navigate = useNavigate()

  const handleTweetListClick = () => {
    setStatus('tweetList')
    navigate('/admin_main')
  }
  const handleUserListClick = () => {
    setStatus('userList')
  }
  const handleLogoutClick = () => {
    navigate('/admin')
  }

  const { container, mainContainer, cardContainer } = styles
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
                    <h4 className='Bold'>使用者列表</h4>
                </header>
                <main className={cardContainer}>
                  <UserListItem data={dummyData} />
                </main>
            </div>
        </div>
  )
}
export default AdminUsersPage
