import { createContext, useState, useContext } from 'react'
const replyListContext = createContext('')
export const useReplyList = () => useContext(replyListContext)
export const ReplyListContextProvider = ({ children }) => {
  const [theTweetId, setTheTweetId] = useState('')
  const handleTheTweetId = (TweetId) => {
    setTheTweetId(TweetId)
    localStorage.setItem('TweetId', TweetId)
  }
  const value = {
    theTweetId,
    onTheTweetId: handleTheTweetId
  }
  return (
    <replyListContext.Provider value={value}>
      { children }
    </replyListContext.Provider>
  )
}
