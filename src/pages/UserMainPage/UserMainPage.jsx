import styles from './UserMainPage.module.scss'
import Nav from 'component/element/element_mid/Nav/Nav'
import SideBar from 'component/element/element_mid/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const UserMainPage = () => {
  const { UserMainPageContainer, contentContainer } = styles
  return (
    <>
      <div className={UserMainPageContainer}>
        <Nav />
        <div className={contentContainer}>
            <Outlet />
        </div>
        <SideBar />
      </div>
    </>
  )
}

export default UserMainPage
