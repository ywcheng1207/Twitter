import styles from './AdminTweetListPage.module.scss'
import AdminNav from 'component/element/element_basic/AdminNav/AdminNav'
import TweetListCard from 'component/admin/TweetListCard/TweetListCard'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const dummyData = [
  {
    tweetId: 51,
    description: 'Minima reiciendis vel quo tempora sed architecto aut. Dolor quos consequuntur beatae quod blanditiis. Labore non repellendus officia. Et dol',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  },
  {
    tweetId: 52,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 53,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 54,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 55,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 56,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 57,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 58,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 59,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 60,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 61,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 62,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 663,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 64,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 65,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 66,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }, {
    tweetId: 67,
    description: 'Quia delectus fuga officia ea quis a occaecati possimus. Nostrum autem hic consequatur ut. Ad assumenda dolore assumenda veniam qui. Tempore',
    userId: {
      id: 8,
      name: 'user1',
      avatar: 'https://loremflickr.com/320/240/people/?random=7.976051090916998',
      account: 'user1'
    },
    tweetTime: '2023-06-06T18:02:16.000Z',
    replyCount: 3,
    likeCount: 0
  }
]

const AdminTweetListPage = () => {
  const [data, setData] = useState(dummyData)
  const [status, setStatus] = useState('tweetList')
  const navigate = useNavigate()

  const handleTweetListClick = () => {
    setStatus('tweetList')
    navigate('/admin_main')
  }
  const handleUserListClick = () => {
    setStatus('userList')
    navigate('/admin_users')
  }
  const handleLogoutClick = () => {
    navigate('/admin')
  }

  const handleDelete = (id) => {
    setData(data.filter(item => item.tweetId !== id))
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
                    <TweetListCard data={data} onDelete={handleDelete}/>
                </div>
            </div>
        </div>
  )
}

export default AdminTweetListPage
