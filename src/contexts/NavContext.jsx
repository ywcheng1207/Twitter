// -- import
// 樣式/套件
import { createContext, useState, useContext } from 'react'

// -- 元件
const NavSwitchContext = createContext('')
export const useNavSwitch = () => useContext(NavSwitchContext)
export const SwitchCotextProvider = ({ children }) => {
  const [status, setStatus] = useState('home')

  const handleNavSwitch = (page) => {
    setStatus(page)
  }

  const value = {
    status,
    onNavSwitch: handleNavSwitch
  }

  return (
    <NavSwitchContext.Provider value={value} >
      {children}
    </NavSwitchContext.Provider>
  )
}
