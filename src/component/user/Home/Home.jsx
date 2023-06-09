import styles from './Home.module.scss'
// import Nav from 'component/element/element_mid/Nav/Nav'
import HomeContentHead from 'component/element/element_mid/HomeContentHead/HomeContentHead'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
// import SideBar from 'component/element/element_mid/SideBar/SideBar'

const Home = () => {
  const { contentContainer, HomeContentItemList } = styles
  // const { contentContainer } = styles
  return (
    <>
      <div className={contentContainer}>
        <HomeContentHead />
        <div className={HomeContentItemList}>
            <HomeContentItem />
            <HomeContentItem />
            <HomeContentItem />
            <HomeContentItem />
            <HomeContentItem />
            <HomeContentItem />
            <HomeContentItem />
        </div>
      </div>
    </>
  )
}

export default Home
