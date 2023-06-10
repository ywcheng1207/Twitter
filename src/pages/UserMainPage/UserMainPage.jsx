import styles from './UserMainPage.module.scss'
import Nav from 'component/element/element_mid/Nav/Nav'
import SideBar from 'component/element/element_mid/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const UserMainPage = () => {
  const { UserMainPageContainer, contentContainer } = styles

  const [status, setStatus] = useState('home')

  const handleHomeClick = () => {
    setStatus('home')
  }
  const handlePersonClick = () => {
    setStatus('person')
  }
  const handleSettingClick = () => {
    setStatus('setting')
  }

  return (
    <>
      <div className={UserMainPageContainer}>
        <Nav
          status={status}
          homeClick={handleHomeClick}
          personClick={handlePersonClick}
          settingClick={handleSettingClick}

        />
        <div className={contentContainer}>
            <Outlet />
        </div>
        <SideBar />
      </div>
    </>
  )
}

export default UserMainPage
