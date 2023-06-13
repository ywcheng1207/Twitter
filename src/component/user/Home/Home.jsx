import styles from './Home.module.scss'
import HomeContentHead from 'component/element/element_mid/HomeContentHead/HomeContentHead'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import { useEffect } from 'react'
import { getTweets } from 'api/user'
import { useUserPostModal } from 'contexts/UserMainPageContext'

const Home = () => {
  const { contentContainer, HomeContentItemList } = styles
  const { homeList, onHomeList, onAddHomeList } = useUserPostModal()
  useEffect(() => {
    // console.log('測試')
    const getUserDataAsync = async (authToken) => {
      try {
        const data = await getTweets(authToken)
        // console.log('成功取得首頁資料')
        // console.log(data)
        onHomeList(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (localStorage.getItem('authToken')) {
      getUserDataAsync(localStorage.getItem('authToken'))
    }
  }, [])

  return (
    <div className={contentContainer}>
      <HomeContentHead onAddHomeList={onAddHomeList} />
      <div className={HomeContentItemList}>
          {homeList.map((item) => (
            <HomeContentItem tweet={item} TweetId={item.TweetId} key={item.TweetId} id={item.tweetOwnerId}/>
          ))}
      </div>
    </div>
  )
}

export default Home
