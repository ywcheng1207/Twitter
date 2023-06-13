import styles from './SideBarItem.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import clsx from 'clsx'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=987'

const SideBarItem = ({ item, onClick }) => {
  const {
    SideBarItem, SideBarItemHead, SideBarItemDescription,
    SideBarItemBtn, SideBarItemDescriptionName, SideBarItemDescriptionAccount, follow, btnContainer
  } = styles

  const id = item.FollowingId
  const isFollowed = item.isFollowed

  return (
    <div className={ SideBarItem }>
      <div className={ SideBarItemHead }>
         <img src={avatarUrl} alt="Image"></img>
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
