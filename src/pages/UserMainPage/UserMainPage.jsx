import styles from './UserMainPage.module.scss'
import Nav from 'component/element/element_mid/Nav/Nav'
import SideBar from 'component/element/element_mid/SideBar/SideBar'
import { Outlet, useParams, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavSwitch } from 'contexts/NavContext'
import { UserPostModalContextProvider, UserReplyModalContextProvider } from 'contexts/UserMainPageContext'
import { ReplyListContextProvider } from 'contexts/RelyLIstContext'

const UserMainPage = () => {
  const { UserMainPageContainer, contentContainer, settingContentContainer } = styles
  const { status, onNavSwitch } = useNavSwitch()
  const { page } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    onNavSwitch(pathname.split('/')[2])
  }, [pathname])

  if (page !== 'infosetting') {
    return (
      <UserPostModalContextProvider>
        <UserReplyModalContextProvider>
          <ReplyListContextProvider>
            <div className={UserMainPageContainer}>
              <Nav status={status} onNavSwitch={onNavSwitch}/>
                <div className={contentContainer}>
                    <Outlet />
                </div>
              <SideBar />
            </div>
          </ReplyListContextProvider>
        </UserReplyModalContextProvider>
      </UserPostModalContextProvider>
    )
  } else {
    return (
      <UserPostModalContextProvider>
        <UserReplyModalContextProvider>
          <ReplyListContextProvider>
          <div className={UserMainPageContainer}>
            <Nav status={status} onNavSwitch={onNavSwitch}/>
            <div className={settingContentContainer}>
              <Outlet />
            </div>
          </div>
          </ReplyListContextProvider>
        </UserReplyModalContextProvider>
      </UserPostModalContextProvider>
    )
  }
}

export default UserMainPage
