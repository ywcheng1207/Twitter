import { useState, useContext, createContext } from 'react'

export const OtherContext = createContext()

export const OtherProvider = ({ children }) => {
  const [otherId, setOtherId] = useState()
  const value = {
    otherId,
    setOtherId
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
