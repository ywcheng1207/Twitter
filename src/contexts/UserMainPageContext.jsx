import { createContext, useState, useContext } from 'react'
import { userAddTweets } from 'api/user'

const userPostModalContext = createContext('')

export const useUserPostModal = () => useContext(userPostModalContext)

export const UserPostModalContextProvider = ({ children }) => {
  const [homeList, setHomeList] = useState([])

  const handleHomeList = (data) => {
    setHomeList(data)
  }

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
