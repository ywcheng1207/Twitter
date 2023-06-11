import styles from './Home.module.scss'
import HomeContentHead from 'component/element/element_mid/HomeContentHead/HomeContentHead'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
// import homepageDummy from 'dummyData/homepageDummy'
import { useEffect, useState } from 'react'
import { getTweets } from 'api/user'

const Home = () => {
  const { contentContainer, HomeContentItemList } = styles
  const [homeList, setHomeList] = useState([])

  useEffect(() => {
    const getUserDataAsync = async (authToken) => {
      try {
        const data = await getTweets(authToken)
        console.log(data[0])
        setHomeList(data)
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
      <HomeContentHead />
        <div className={HomeContentItemList}>
           {homeList.map((item) => (
              <HomeContentItem tweet={item} key={item.tweetId} />
           ))}
        </div>
    </div>
  )
}

export default Home
