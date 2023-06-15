import styles from './Home.module.scss'
import HomeContentHead from 'component/element/element_mid/HomeContentHead/HomeContentHead'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import { useEffect } from 'react'
import { getTweets } from 'api/user'
import { useUserPostModal } from 'contexts/UserMainPageContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { contentContainer, HomeContentItemList } = styles
  const { homeList, onHomeList, onAddHomeList } = useUserPostModal()
  const navigate = useNavigate()
  useEffect(() => {
    const getUserDataAsync = async (authToken) => {
      try {
        const data = await getTweets(authToken)
        onHomeList(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (localStorage.getItem('authToken')) {
      getUserDataAsync(localStorage.getItem('authToken'))
    }
  }, [])

  const handleAvatarClick = (clickId) => {
    console.log(clickId)
    const userId = localStorage.getItem('id')
    if (Number(clickId) === Number(userId)) {
      navigate('/user/personalinfo/main')
    } else {
      localStorage.setItem('otherId', clickId)
      navigate('/user/other/main')
    }
  }

  return (
    <div className={contentContainer}>
      <HomeContentHead onAddHomeList={onAddHomeList} />
      <div className={HomeContentItemList}>
          {homeList.map((item) => (
            <HomeContentItem tweet={item} TweetId={item.TweetId} key={item.TweetId} id={item.tweetOwnerId} onAvatarClick={handleAvatarClick}/>
          ))}
      </div>
    </div>
  )
}

export default Home
