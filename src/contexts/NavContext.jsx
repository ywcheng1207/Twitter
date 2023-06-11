import { createContext, useState, useContext } from 'react'

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
