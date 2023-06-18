import styles from './SideBarItem.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import clsx from 'clsx'

const SideBarItem = ({ item, onClick, onImgClick }) => {
  const {
    SideBarItem, SideBarItemHead, SideBarItemDescription,
    SideBarItemBtn, SideBarItemDescriptionName, SideBarItemDescriptionAccount, follow, btnContainer
  } = styles

  const id = item.FollowingId
  const isFollowed = item.isFollowed

  return (
    <div className={ SideBarItem }>
      <div className={ SideBarItemHead }>
         <img src={item.FollowingAvatar} alt="Image" onClick={() => {
           onImgClick?.(id)
         }}/>
      </div>
      <div className={ SideBarItemDescription }>
        <div className={ SideBarItemDescriptionName }>{item.FollowingName}</div>
        <div className={ SideBarItemDescriptionAccount }>{item.FollowingAccount}</div>
      </div>
      <div className={btnContainer} onClick={() => {
        onClick?.({
          id,
          isFollowed
        })
      }} >
        <div className={clsx(SideBarItemBtn, { [follow]: isFollowed })}>
          <Button
            value={ item.isFollowed ? '正在跟隨' : '跟隨'}
            type={ item.isFollowed ? 'fullPill' : 'holePill' }
          />
        </div>
      </div>
    </div>
  )
}

export default SideBarItem
