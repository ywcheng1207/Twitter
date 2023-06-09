import styles from './SideBarItem.module.scss'
import Button from 'component/element/element_basic/Button/Button'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=987'

const SideBarItem = () => {
  const {
    SideBarItem, SideBarItemHead, SideBarItemDescription,
    SideBarItemBtn, SideBarItemDescriptionName, SideBarItemDescriptionAccount
  } = styles

  return (
    <div className={ SideBarItem }>
      <div className={ SideBarItemHead }>
         <img src={avatarUrl} alt="Image"></img>
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
