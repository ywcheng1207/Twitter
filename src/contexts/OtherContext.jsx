import { useState, useContext, createContext } from 'react'
import { getAccountInfo } from 'api/user'

export const OtherContext = createContext()

export const OtherProvider = ({ children }) => {
  const [otherUser, setOtherUser] = useState([])

  const getAccountInfoAsync = async () => {
    try {
      const otherId = localStorage.getItem('otherId')
      const authToken = localStorage.getItem('authToken')
      const data = await getAccountInfo(authToken, otherId)
      console.log('用戶資料取得成功')
      setOtherUser(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const value = {
    otherUser,
    getAccountInfoAsync,
    setOtherUser
  }

  return (
        <OtherContext.Provider value={value}>
            {children}
        </OtherContext.Provider>
  )
}

export const useOtherContext = () => {
  return useContext(OtherContext)
}
