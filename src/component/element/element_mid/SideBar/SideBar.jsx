import styles from './SideBar.module.scss'
import SideBarItem from './SideBarItem'

const SideBar = () => {
  const { sideBarContainer, sideBarHead, sideBarList } = styles
  return (
    <div className={sideBarContainer}>
      <div className={sideBarHead}>
        <h4 className='Bold'>推薦跟隨</h4>
      </div>
      <div className={sideBarList}>
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
      </div>
    </div>
  )
}

export default SideBar
