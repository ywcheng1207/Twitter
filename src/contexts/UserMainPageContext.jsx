import { createContext, useState, useContext } from 'react'

const userPostModalContext = createContext('')

export const useUserPostModal = () => useContext(userPostModalContext)

export const UserPostModalContextProvider = ({ children }) => {
  const [homeList, setHomeList] = useState([])

  const handleHomeList = (data) => {
    setHomeList(data)
  }
  const handleAddHomeList = (text) => {
    if (text.length === 0) {
      return
    }
    console.log(`送出${text}`)
    setHomeList((preHomeList) => {
      return [{
        TweetId: Math.floor(Math.random() * 1000000000),
        description: text,
        isLiked: false,
        likeCount: 0,
        replyCount: 0,
        tweetOwnerAccount: 'user1',
        tweetOwnerAvatar: 'https://loremflickr.com/320/240/icon?lock=3',
        tweetOwnerId: '204',
        tweetOwnerName: 'user1',
        tweetTime: new Date()
      },
      ...preHomeList]
    })
  }
  const value = {
    homeList,
    onHomeList: handleHomeList,
    onAddHomeList: handleAddHomeList
  }
  return (
    <userPostModalContext.Provider value={value} >
      {children}
    </userPostModalContext.Provider>
  )
}
