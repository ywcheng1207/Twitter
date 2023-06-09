import styles from './Home.module.scss'
import HomeContentHead from 'component/element/element_mid/HomeContentHead/HomeContentHead'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import homepageDummy from 'dummyData/homepageDummy'
import { useEffect } from 'react'
import { getTweets } from 'api/user'

const Home = () => {
  const { contentContainer, HomeContentItemList } = styles

  useEffect(() => {
    const getUserDataAsync = async (authToken) => {
      try {
        const data = await getTweets(authToken)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    console.log(localStorage.getItem('authToken'))
    if (localStorage.getItem('authToken')) {
      getUserDataAsync(localStorage.getItem('authToken'))
    }
  }, [])

  return (
    <div className={contentContainer}>
      <HomeContentHead />
        <div className={HomeContentItemList}>
           {homepageDummy.map((item) => (
              <HomeContentItem tweet={item} key={item.tweetId} />
           ))}
        </div>
    </div>
  )
}

export default Home
