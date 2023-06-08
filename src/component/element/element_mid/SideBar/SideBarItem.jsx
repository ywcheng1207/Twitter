import styles from './SideBarItem.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import homepageDummy from 'dummyData/homepageDummy'

const SideBarItem = () => {
  const {
    SideBarItem, SideBarItemHead, SideBarItemDescription,
    SideBarItemBtn, SideBarItemDescriptionName, SideBarItemDescriptionAccount
  } = styles

  return (
    <div className={ SideBarItem }>
      <div className={ SideBarItemHead }>
         <img src={homepageDummy[0].userId.avatar} alt="Image"></img>
      </div>
      <div className={ SideBarItemDescription }>
        <div className={ SideBarItemDescriptionName }>Pizza Hut</div>
        <div className={ SideBarItemDescriptionAccount }>@pizzahut</div>
      </div>
      <div className={ SideBarItemBtn }>
        <Button value='正在跟隨' type='fullPill'/>
      </div>
    </div>
  )
}

export default SideBarItem
