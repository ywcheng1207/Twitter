// -- import
// API
import { userAddTweets, userReplyTweets } from 'api/user'
// 樣式/套件
import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// -- 元件
const userPostModalContext = createContext('')
const userReplyModalContext = createContext('')

export const useUserPostModal = () => useContext(userPostModalContext)
export const useUserReplyModal = () => useContext(userReplyModalContext)

// UserPostModel
export const UserPostModalContextProvider = ({ children }) => {
  const [homeList, setHomeList] = useState([])

  const handleHomeList = (data) => {
    setHomeList(data)
  }

  // 點擊愛心+1
  const handleLike = (TweetId) => {
    setHomeList((pre) => {
      return pre.map((item) => {
        if (item.TweetId === TweetId) {
          return { ...item, isLiked: true, likeCount: item.likeCount + 1 }
        } else {
          return item
        }
      })
    })
  }
  // 點擊愛心-1
  const handleUnLike = (TweetId) => {
    setHomeList((pre) => {
      return pre.map((item) => {
        if (item.TweetId === TweetId) {
          return { ...item, isLiked: false, likeCount: item.likeCount - 1 }
        } else {
          return item
        }
      })
    })
  }

  const handleAddHomeList = async (text) => {
    if (text.length === 0) {
      return
    }
    const data = await userAddTweets({ description: text })
    setHomeList((preHomeList) => {
      return [{
        TweetId: data.TweetId,
        description: data.description,
        isLiked: data.isLiked,
        likeCount: data.likeCount,
        replyCount: data.replyCount,
        tweetOwnerAccount: data.tweetOwnerAccount,
        tweetOwnerAvatar: data.tweetOwnerAvatar,
        tweetOwnerId: data.tweetOwnerId,
        tweetOwnerName: data.tweetOwnerName,
        createdAt: data.createdAt
      },
      ...preHomeList]
    })
  }
  const value = {
    homeList,
    onHomeList: handleHomeList,
    onAddHomeList: handleAddHomeList,
    onLike: handleLike,
    onUnLike: handleUnLike
  }
  return (
    <userPostModalContext.Provider value={value} >
      {children}
    </userPostModalContext.Provider>
  )
}

// UserReplyModel
export const UserReplyModalContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const handleUserReply = async ({ TweetId, text }) => {
    try {
      await userReplyTweets({ TweetId, comment: text })
      navigate('/user/replylist/main')
      localStorage.removeItem('replyListLength')
    } catch (error) {
      console.error(error)
    }
  }
  const value = {
    onUserReply: handleUserReply
  }
  return (
    <userReplyModalContext.Provider value={value} >
      {children}
    </userReplyModalContext.Provider>
  )
}
