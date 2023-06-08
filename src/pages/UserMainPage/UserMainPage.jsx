import styles from './UserMainPage.module.scss'
import Home from 'component/user/Home/Home'

const UserMainPage = () => {
  const { UserMainPageContainer } = styles
  return (
    <div className={UserMainPageContainer}>
      <Home />
    </div>
  )
}

export default UserMainPage
