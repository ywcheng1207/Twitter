import styles from './UserFollowItem.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import clsx from 'clsx'

const UserFollowItem = ({ item, onClick, render }) => {
  const { followItemContainer, avatar, itemContent, nameAndBtn, name, btnContainer, tweet, follow } = styles
  const isFollowed = item.isFollowed

  return (
        <div className={followItemContainer}>
            <img src={item.avatar} alt="avatar" className={avatar} />
            <div className={itemContent}>
                <div className={nameAndBtn}>
                    <p className={name}>{item.name}</p>
                    <div className={clsx(btnContainer, { [follow]: isFollowed })} onClick={() => {
                      onClick?.(item.UserId)
                    }} >
                        <Button
                            value={ item.isFollowed ? '正在跟隨' : '跟隨'}
                            type={ item.isFollowed ? 'fullPill' : 'holePill' }
                        />
                    </div>
                </div>
                <div className={tweet}>
                    {item.introduction}
                </div>
            </div>
        </div>
  )
}

export default UserFollowItem
