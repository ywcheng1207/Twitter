import styles from './UserMainPage.module.scss'
import Nav from 'component/element/element_mid/Nav/Nav'
import SideBar from 'component/element/element_mid/SideBar/SideBar'
import { Outlet, useParams } from 'react-router-dom'

const UserMainPage = () => {
  const { UserMainPageContainer, contentContainer, settingContentContainer } = styles
  const { page } = useParams()

  if (page !== 'infosetting') {
    return (
    <div className={UserMainPageContainer}>
      <Nav />
        <div className={contentContainer}>
            <Outlet />
        </div>
      <SideBar />
    </div>
    )
  } else {
    return (
      <div className={UserMainPageContainer}>
        <Nav />
        <div className={settingContentContainer}>
          <Outlet />
        </div>
      </div>
    )
  }
}

export default UserMainPage
